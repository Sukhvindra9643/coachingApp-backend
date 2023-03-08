// import { createTransport } from "nodemailer";

// export const sendMail = async (email, subject, text) => {
//   console.log(process.env.SMTP_USER)
//   const transport = createTransport({
//     host: process.env.SMTP_HOST,
//     port: process.env.SMTP_PORT,
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASS,
//     },
//   });

//   await transport.sendMail({
//     from: process.env.SMTP_USER,
//     to: email,
//     subject,
//     text,
//   });
// };
import nodemailer  from "nodemailer"


export const sendMail = async (email,subject,text) => {
  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    //service: "gmail",
    port: 2525,
    secure: false,
    auth: {
      user: `${process.env.SMTP_MAIL}`,
      pass: `${process.env.S}`,
    },
  });
  var mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: subject,
    text: text,
  };
  transporter.sendMail(mailOptions, function (error, Info) {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent : ` + Info.response);
    }
  });
};

