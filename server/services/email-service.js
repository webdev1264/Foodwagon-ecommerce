const nodemailer = require("nodemailer");

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: `Account verification on ${process.env.API_URL}`,
      text: "",
      html: `<div>
          <h1>For activation follow the link below</h1>
          <a href=${link}>${link}</a>
        </div>`,
    });
  }
}

module.exports = new EmailService();
