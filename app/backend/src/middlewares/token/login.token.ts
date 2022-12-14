import { NextFunction, Request, Response } from 'express';
import { validateJWTToken } from '../../shared/TokenGenerator';

export default function tokenValidation(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  try {
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const dataToken = validateJWTToken(authorization);

    if (dataToken.error) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }

    next();
  } catch (error) {
    res.status(401).json({ message: 'No access authorization' });
  }
}
