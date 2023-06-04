import NextCors from 'next-cors';
import { NextResponse } from 'next/server';

/**
* @param req {Request}
* @param res {NextResponse}
*/
export default async function allowCors(req, res) {
  await NextCors(req, res, {
     // Options
     methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
     origin: '*',
     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
}
