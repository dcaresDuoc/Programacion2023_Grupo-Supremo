// dependencies
const express = require("express")
const nodemailer = require("nodemailer")
const dotenv = require("dotenv")
const cors = require("cors")

// para cargar las variables de entorno escritas en el archivo .env al código
dotenv.config()

// para permitir que el servidor reciba peticiones desde cualquier origen

const APP_PORT = process.env.APP_PORT || null
const SENDER_EMAIL = process.env.SENDER_EMAIL || null
const SENDER_PASSWORD = process.env.SENDER_PASSWORD || null
const FROM_EMAIL = process.env.FROM_EMAIL || null

if (!APP_PORT || !SENDER_EMAIL || !SENDER_PASSWORD) {
  console.log(
    "Please set APP_PORT, SENDER_EMAIL and SENDER_PASSWORD in .env file"
  )
  process.exit(1)
}

console.log(SENDER_EMAIL)
console.log(SENDER_PASSWORD)

// First, define send settings by creating a new transporter:
let transporter = nodemailer.createTransport({
  // smtp.gmail.com
  host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
  port: 465, // Port for SMTP (usually 465)
  secure: true, // Usually true if connecting to port 465
  auth: {
    user: SENDER_EMAIL, // Your email address
    pass: SENDER_PASSWORD, // Password (for gmail, your app password)
    // ⚠️ For better security, use environment variables set on the server for these values when deploying
  },
})

// http server
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// endpoint
app.post("/api/mail", async (req, res) => {
  try {
    const { to, subject, html } = req.body
    await sendMail(to, subject, html)
  } catch (err) {
    console.log(err)
    console.log("error sending email")
  }
  res.send("Email sent")
})

app.post("/api/contact", async (req, res) => {
  try {
    console.log(req.body)
    const { name, email, phone, comment } = req.body
    await sendMail(
      FROM_EMAIL,
      name + " Agencia PelaoMotors",
      `<div>
      <div>Nombre: ${name}</div>
      <div>Correo: ${email}</div>
      <div>Telefono: ${phone}</div>
      <p>Comentario: ${comment}</div>
      </div>`
    )
  } catch (err) {
    console.log(err)
    console.log("error sending email")
  }
  res.sendStatus(204)
})

// to start http server
app.listen(4000, () => {
  console.log("Server is running on port 4000")
})

async function sendMail(to, subject, html) {
  // Define and send message inside transporter.sendEmail() and await info about send from promise:
  let info = await transporter.sendMail({
    from: SENDER_EMAIL,
    to: to,
    subject: subject,
    html: html,
  })

  console.log(info)
  console.log(info.messageId) // Random ID generated after successful send (optional)
}
