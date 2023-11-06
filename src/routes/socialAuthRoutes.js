import Router from 'express'
import dotenv from 'dotenv'
import passport from "passport"

import isLoggedIn from '../utils/isLoggedIn';
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
var FacebookStrategy = require('passport-facebook');

dotenv.config()
const router = Router()
router.use(passport.initialize())
router.use(passport.session())

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `http://${process.env.BACKEND_HOST}/api/auth/google/callback`,
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
));

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})

router.get('/auth/google',
  passport.authenticate('google', {
    scope: [ 'email', 'profile' ]
  }
));

router.get('/auth/google/callback',
  passport.authenticate( 'google', {
    successRedirect: '/api/auth/google/success',
    failureRedirect: '/api/auth/google/failure'
}));

router.get('/auth/google/success', (req, res) => {
  // console.log(req.user)
  return res.send('Success')
})

router.get('/auth/google/failure', (req, res) => {
  return res.send('Something went wrong')
})

router.get('/auth/protected', isLoggedIn, (req, res) => {
  let name = req.user.displayName
  return res.send(`Hello ${name}`)
})


/**
 * FACEBOOK API
 */
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: `https://${process.env.BACKEND_HOST}/api/auth/facebook/callback`,
    profileFields: ['id', 'displayName', 'photos', 'email']
  },
  function(accessToken, refreshToken, profile, cb) {
    cb(null, profile);
  }
));

router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/auth/facebook/callback',
  passport.authenticate( 'facebook', {
    successRedirect: '/api/auth/facebook/success',
    failureRedirect: '/api/auth/facebook/failure'
}));

router.get('/auth/facebook/success', passport.authenticate('facebook', { failureRedirect: '/login' }),
function(req, res) {
  console.log(req.user)
  res.send('Success');
})

router.get('/auth/facebook/failure', (req, res) => {
  return res.send('Something went wrong')
})

export default router