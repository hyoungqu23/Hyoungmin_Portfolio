import type { NextApiRequest, NextApiResponse } from 'next';

export default function (req: NextApiRequest, res: NextApiResponse) {
  let nodemailer = require('nodemailer');

  const transporter = nodemailer.createTransport({
    port: process.env.SMTP_PORT,
    host: process.env.SMTP_HOST,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: req.body.email,
    to: 'contact.portfolio23@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.content + ' | Sent from: ' + req.body.email,
    html: `<div>${req.body.content}</div><p>Sent from:
    ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, (err: any, info: any) => {
    if (err) console.log('error', err);
    else console.log(info);
  });

  res.status(200);
}
