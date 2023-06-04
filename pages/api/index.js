import { NextResponse } from 'next/server';
import allowCors from '@/utils/cors';

export default function handler(req, res) {
  allowCors(req, res);
  return res.status(200).json({
    routes: [
      "/api/dosen",
      "api/dosen/:nip",
      "api/kodepos",
    ],
  });
}
