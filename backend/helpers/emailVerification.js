const nodemailer = require("nodemailer");

const emailVerification = async (email) => {
    const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dacarmarketer@gmail.com",
    pass: "vqegzmrvdhutoqha",
  },
});
  const info = await transporter.sendMail({
    from: 'dacarmarketer@gmail.com', // sender address
    to: email,
    subject: "email verification ✔",
    text: "Hi ", // plain‑text body
    html: `<div style=width:600px;margin:auto;text-align:center><h2 style=font-size:24px>E-commerce System</h2><h3 style=font-size:18px>This is a verification system. Please read the message below and verify your account.</h3><p style=font-size:14px>Email:${email}<p>If you did not request a password for the account "demo2", someone might be trying to access your account. Please check and secure your account immediately.</p><button style="padding:12px 24px;color:#fff;background-color:#00f;border:none;border-radius:8px;cursor:pointer;margin-bottom:8px">Verify</button><br><span>You can also review your security activity at </span><a href=https://myaccount.google.com/notifications target=_blank></a><div><img alt=""src=https://i.ibb.co/84N6Bwcy/image.png style=width:60px;border-radius:7px;margin-top:8px> <img alt=""src=https://i.ibb.co/fbh33Xr/image.png style=width:60px;border-radius:7px;margin-top:8px> <img alt=""src=https://i.ibb.co/ddPpc6N/image.png style=width:60px;border-radius:7px;margin-top:8px></div></div>`, // HTML body
  });

}

module.exports = emailVerification;