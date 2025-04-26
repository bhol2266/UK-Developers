/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PAYPAL_CLIENT_ID: 'ASN99XzcW29Fc1Q2lxqtsdEOZt4fP7zg5dXV0dPpw-PPnFR1pYJpib6GOpdx_4BPb9k9glN0eJQSNKe4',
    PAYPAL_CLIENT_SECRET: 'EFue_Mer__aqqsfcOhRLveTS_AZnATQsMVF8imzL2XZNCbSnJegBkTBT8toC8EjBfPn3LulGOd4XltN-',
    PAYPAL_ENDPOINT: 'https://api-m.sandbox.paypal.com'
  },
}

module.exports = nextConfig
