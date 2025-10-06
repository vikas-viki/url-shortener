
import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      user_id?: string;
    }
  }
}

export interface UserJWTPayload {
    user_id: string
}

export type GoogleSigninResponse = {
    sub: string,
    name: string,
    given_name: string,
    picture: string,
    email: string,
    email_verified: boolean
}