import { NextResponse } from 'next/server';
import allowCors from '@/utils/cors';
import { showDosen, addDosen } from '@/utils/db';

/**
* @param res {NextResponse}
* @returns {NextResponse}
* */
const showDosenHandler = async (res) => {
  try {
    const data = await showDosen();
    res.status(200);
    return res.json({data});
  } catch(_) {
    res.status(404);
    return res.json({message: "Can't show dosen tables"});
  }
};

/**
* @param res {NextResponse}
* @param data {ReadableStream<Uint8Array>}
* @returns {NextResponse}
* */
const addDosenHandler = async (res, data) => {
  try {
    data = await addDosen(data);
    res.status(201);
    return res.json({data, message: "Dosen successfully added"});
  } catch(_) {
    res.status(400);
    return res.json({message: "Can't add dosen"});
  }
};

/**
* @param req {Request}
* @param res {NextResponse}
* @returns {NextResponse}
* */
export default function handler(req, res) {
  allowCors(req, res);
  switch(req.method) {
    case 'GET':
      return showDosenHandler(res);
    case 'POST':
      allowCors(req, res);
      return addDosenHandler(res, req.body);
    default:
      res.status(405);
      return res.json({message: "Toba, tolol banget"});
  }
}
