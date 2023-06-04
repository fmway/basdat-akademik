import { deleteDosen, searchDosen, updateDosen } from '@/utils/db';
import allowCors from '@/utils/cors';
import { NextResponse } from 'next/server';

/**
* @param req {Request}
* @param res {NextResponse}
* */
export default async function handler(req, res) {
  const nip = String(req.query.nip);
  allowCors(req, res);

  let data = await searchDosen(nip);
  if(!data) {
    res.status(404);
    return res.json({message: "Can't search dosen with those nip"});
  }

  if (req.method == 'GET') {
    res.status(200);
    return res.json({data});
  } else if (req.method == 'PUT') {
    data = await updateDosen(nip, req.body);
    res.status(201);
    return res.json({message: "Change successfully", data});
  } else if (req.method == 'DELETE') {
    data = await deleteDosen(nip);
    res.status(202);
    return res.json({data, message: "Delete successfully"});
  } else {
    res.status(405);
    return res.json({message: "Toba, tolol banget"});
  }
};
