import Router from 'express'
import dotenv from 'dotenv'
import passport from "passport"
import GoogleStrategy from "passport-google-oidc"

dotenv.config()
const router = Router()
router.use(passport.initialize())
router.use(passport.session())

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_API_KEY,
  callbackURL: 'https://korea-vehicles.onrender.com/oauth2/redirect/google'
},
function(issuer, profile, cb) {
  console.log(issuer, profile)
  // db.get('SELECT * FROM federated_credentials WHERE provider = ? AND subject = ?', [
  //   issuer,
  //   profile.id
  // ], function(err, cred) {
  //   if (err) { return cb(err); }
  //   if (!cred) {
  //     // The Google account has not logged in to this app before.  Create a
  //     // new user record and link it to the Google account.
  //     db.run('INSERT INTO users (name) VALUES (?)', [
  //       profile.displayName
  //     ], function(err) {
  //       if (err) { return cb(err); }

  //       var id = this.lastID;
  //       db.run('INSERT INTO federated_credentials (user_id, provider, subject) VALUES (?, ?, ?)', [
  //         id,
  //         issuer,
  //         profile.id
  //       ], function(err) {
  //         if (err) { return cb(err); }
  //         var user = {
  //           id: id.toString(),
  //           name: profile.displayName
  //         };
  //         return cb(null, user);
  //       });
  //     });
  //   } else {
  //     // The Google account has previously logged in to the app.  Get the
  //     // user record linked to the Google account and log the user in.
  //     db.get('SELECT * FROM users WHERE id = ?', [ cred.user_id ], function(err, user) {
  //       if (err) { return cb(err); }
  //       if (!user) { return cb(null, false); }
  //       return cb(null, user);
  //     });
  //   }
  // });
}
));

router.get('/login/google', passport.authenticate('google', {
  scope: [ 'email' ]
}))


let people = [
  {
    name: "Hannah Rickard",
    number: "06-51-99-56-83",
    id: 1
  },
  {
    name: "Hyun Namkoong",
    number: "10987654",
    id: 2
  },
  {
    name: "Courtney Martinez",
    number: "3691215",
    id: 3
  }
]

router.get('/', (request, response) => {
    response.send('<h1>Phonebook</h1>')
})

router.get('/api/people', (request, response) => {
    response.json(people)
})

// router.post('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

export default router