import CryptoJS from 'crypto-js';
import { PAYU_CONFIG } from '../../config/payuConfig';


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { txnid, amount, productinfo, firstname, email } = req.body;

    const hashString = `${PAYU_CONFIG.key}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${PAYU_CONFIG.salt}`;
    const hash = CryptoJS.SHA512(hashString).toString();

    res.status(200).json({ hash });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
