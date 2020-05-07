const nodemailer = require('nodemailer');

module.exports = {

  async sendPassword(recipient, password) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'solidaryhero@gmail.com',
        pass: 'bethehero'
      }
    });

    const mailOptions = {
      from: 'solidaryhero@gmail.com',
      to: recipient,
      subject: 'Você se tornou um herói!',
      text: `
        BEM-VINDO AO BE THE HERO

        Obrigado por colaborar com a nossa causa,
        essas são suas credenciais de acesso:

        Email: ${recipient}
        Senha: ${password}

        Visite-nos sempre que puder.
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return error;
      } else {
        return ('Email sent: ' + info.response);
      }
    });
  }
}
