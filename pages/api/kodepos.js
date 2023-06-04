import { NextResponse } from 'next/server';
import allowCors from '@/utils/cors';
import { showKodePos } from '@/utils/db';

/**
* @param res {NextResponse}
* @returns {NextResponse}
* */
const showKodePosHandler = async (res) => {
  try {
    const data = await showKodePos();
    res.status(200);
    return res.json({data});
  } catch(_) {
    res.status(404);
    return res.json({message: "Can't get kodepos tables"});
  }
};

/**
* @param req {Request}
* @param res {NextResponse}
* @returns {NextResponse}
* */
export default function handler(req, res) {
  allowCors(req, res);
  if (req.method == 'GET') {
    return showKodePosHandler(res);
  } else {
    res.status(405);
    return res.json({message: "Toba, tolol banget"});
  }
}
