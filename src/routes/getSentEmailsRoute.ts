import { Router, Request, Response } from 'express';
import { authCompanyAdmin } from '../MIDDLEWARES/authCompanyAdmin';
import fetchSentEmailsFromYesterday from '../DATABASE/INTEGRATIONS/Email/imapConnect';

const router = Router();

// GET /?companyId=<uuid>&credentialId=<id>
router.get('/', authCompanyAdmin, async (req: Request, res: Response) => {
  const companyId = req.query.companyId as string | undefined;
  const credentialId = req.query.credentialId as string | undefined;
  const password = req.query.password as string | undefined; // one-time IMAP app password

  if (!companyId || !credentialId) {
    return res.status(400).json({ error: 'companyId and credentialId are required' });
  }

  try {
    const emails = await fetchSentEmailsFromYesterday(companyId, credentialId, password);
    return res.json({ emails });
  } catch (err: any) {
    console.error('getSentEmailsRoute error:', err);
    return res.status(500).json({ error: err.message || 'Failed to fetch sent emails' });
  }
});

export default router;
