import Router from 'express'
import dotenv from 'dotenv'
import passport from "passport"

import isLoggedIn from '../utils/isLoggedIn';
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
dotenv.config()
const router = Router()
router.use(passport.initialize())
router.use(passport.session())

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `http://${process.env.LOCAL_BACKEND_HOST}/api/auth/google/callback`,
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

router.get('/auth/google/failure', (req, res) => {
  return res.send('Success')
})

router.get('/auth/google/failure', (req, res) => {
  return res.send('Something went wrong')
})

router.get('/api/auth/google/success', isLoggedIn, (req, res) => {
  let name = res.user.displayName
  return res.send(`Hello ${name}`)
})

export default router