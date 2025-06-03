// /pages/api/sendActivationEmail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, name, activationCode, expiryDate, source } = req.body;

  if (!email || !activationCode || !expiryDate || !source) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ukdevelopers007@gmail.com",
        pass: "wpnwcxjuqjmutmjg", // App password
      },
    });

    const activationUrl = `${source}/activateMembership`;

    const mailOptions = {
      from: "ukdevelopers007@gmail.com",
      to: email,
      subject: "🎉 Your Membership Activation Code",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6">
          <h2>Hi ${name || "there"},</h2>
          <p>Thank you for purchasing the Premium Membership!</p>
          <p><strong>Activation Code:</strong> <code>${activationCode}</code></p>
          <p><strong>Expiry Date:</strong> ${new Date(expiryDate).toDateString()}</p>
          <p>To activate your membership, please visit:</p>
          <p><a href="${activationUrl}">${activationUrl}</a></p>
          <p>Use your activation code to complete the process.</p>
          <br />
          <p>Thanks again,<br/>The ${source} Team</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("❌ Email send error:", error);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
