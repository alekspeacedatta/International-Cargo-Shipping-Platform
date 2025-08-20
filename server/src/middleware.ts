import jwt from 'jsonwebtoken'
import { Role } from './types/types'
import { Request, Response, NextFunction } from 'express';

const JWT_SECRET = process.env.JWT_SECRET!;

export interface JwtPayload {
    id: string;
    email: string,
    role: Role
}
export interface AuthRequest extends Request{
    user?: JwtPayload;
}
export const authenticateJWT = (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeaders = req.headers.authorization;
    if(authHeaders) return res.status(401).json({ message: 'Authorization header missing' });

    const token = authHeaders?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Token missing' });

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as  JwtPayload;
        req.user = decoded;
        next()
    } catch (error) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
}