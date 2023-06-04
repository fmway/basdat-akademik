import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const solve = (data={}) => {
  if(data.tanggal_lahir && typeof data.tanggal_lahir == 'string') {
    data.tanggal_lahir = new Date(data.tanggal_lahir);
  }
  if(data.kode_pos && typeof data.kode_pos != 'number') {
    data.kode_pos = Number(data.kode_pos);
  }
  return data;
};

const showDosen = async () => {
  return await prisma.dosen.findMany();
};

const showKodePos = async () => {
  return await prisma.kode_pos.findMany();
};

const searchDosen = async (nip) => {
  return await prisma.dosen.findFirst({
    where: {
      nip
    }
  });
};

const updateDosen = async (nip, data={}) => {
  return await prisma.dosen.update({
    where: {
      nip
    },
    data: solve(data),
  });
};

const addDosen = async (data={}) => {
  return await prisma.dosen.create({
    data: solve(data),
  });
};



const deleteDosen = async (nip) => {
  return await prisma.dosen.delete({
    where: {
      nip
    }
  });
};

export { prisma, showDosen, showKodePos, searchDosen, updateDosen, addDosen, deleteDosen };
