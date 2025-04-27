/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PAYPAL_CLIENT_ID: 'AQEfZ9BtOjDaH-FAfZX-yRRFO7RmeSyNycJmJ8IiykzjBWGEKF_5yQJs-xagJEAT0D_fI-7GVdlYrrtX',
    PAYPAL_CLIENT_SECRET: 'EHdwoyfs3cRT6bFCDBgnwIQR67PW8C4AK5spurQoW7A92YBNUPodWG_vtz5XRfBhMouwisgZPVn5ltaV',
    PAYPAL_ENDPOINT: 'https://api-m.sandbox.paypal.com'
  },
}

module.exports = nextConfig
