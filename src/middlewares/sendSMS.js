/* eslint-disable import/no-extraneous-dependencies */
import randomize from 'randomatic'
import dotenv from 'dotenv'
import { Vonage } from '@vonage/server-sdk'
import { Auth, AlgorithmTypes } from '@vonage/auth'
import { SMS } from '@vonage/messages'

dotenv.config()

// const Termii = require("termii-nodejs").Termii
// const { Vonage } = require('@vonage/server-sdk');

// const vonage = new Vonage(credentials, options);

// const termii = new Termii({
//   apiID: process.env.SMS,
//   apiSecret: "zeTAAe2roWDJxMXU"
// })

// const sendText = async (req, res, next) => {
//   // const from = process.env.VONAGE_BRAND_NAME
//   const from = "KVehicles";
//   const recipient = req.body.phoneNumber;
//   const code = randomize('00000');
//   req.userCode = code;
//   const message = `Hi ${req.body.name}. Your KVehicles App confirmation is code: ${code}. Valid for 60 minutes`
//   console.log(`+25${recipient}`, message);

//   await termii.sendMessage(recipient, message).then((res) => console.log(res));

//   next()
// }

// export default sendText
const vonage = new Vonage({
  apiKey: process.env.SMS_API_KEY,
  apiSecret: process.env.SMS_API_SECRET
})

const sendVerificationCode = async (req, res, next) => {
  const from = "KVehicles"
  const to = `+25${req.body.phoneNumber}`
  const code = randomize('00000')
  req.userCode = code
  const text = `Hi ${req.body.name}. Your KVehicles App confirmation is code: ${code}. Valid for 60 minutes`
  console.log(to, text)

  await vonage.sms.send({ to, from, text })
    .then((resp) => { console.log('Message sent successfully'); console.log(resp); })
    .catch((err) => { console.log('There was an error sending the messages.'); console.error(err); });
  next()
}

export default sendVerificationCode
