import { z } from "https://deno.land/x/zod@v3.21.4/mod.ts";
import { 
  kvdex, 
  indexableCollection,
} from "https://deno.land/x/kvdex@v0.18.1/mod.ts";

export const kv = await Deno.openKv();

export type Dosen = z.infer<typeof DosenModel>;
export type KodePos = z.infer<typeof KodePosModel>;

const DosenModel = z.object({
  nip: z.string().max(18).describe("unique"),
  nama: z.string().max(40),
  email: z.string().email(),
  tanggalLahir: z.date(),
  alamat: z.string(),
  kodePos: z.string().max(5),
  noTelp: z.string().max(14),
});


const KodePosModel = z.object({
  kodePos: z.string().max(5).describe("unique"),
  alamatKecamatan: z.string().max(40),
  alamatKotaKab: z.string().max(40),
  alamatProvinsi: z.string().max(40),
});

const db = kvdex(kv, {
  dosens: indexableCollection(DosenModel, {
    indices: {
      nip: "primary",
      email: "secondary",
    },
  }),
  kodepos: indexableCollection(KodePosModel, {
    indices: {
      kodePos: "primary",
    },
  }),
});

export const showDosen: () => Promise<Dosen[]> = async () => {
  const dosen = await db.dosens.getMany();
  return dosen.result.map(x => {
    const { nip, nama, tanggalLahir, alamat, kodePos, noTelp, email } = x.value;
    return {
      nip,
      nama,
      tanggalLahir,
      alamat,
      kodePos,
      noTelp,
      email,
    };
  });
}

export const showKodePos: () => Promise<KodePos[]> = async () => {
  const kodePos = await db.kodepos.getMany();
  return kodePos.result.map(x => {
    const { kodePos, alamatKecamatan, alamatKotaKab, alamatProvinsi } = x.value;

    return {
      kodePos,
      alamatKecamatan,
      alamatKotaKab,
      alamatProvinsi,
    };
  });
};

export const searchDosen: (nip: string) => Promise<Dosen> = async (nip) => {
  const dosen = await db.dosens.findByPrimaryIndex("nip", nip);

  if (!dosen) {
    throw Error("Nip tidak ditemukan");
  }

  return {
    nip: dosen.value.nip,
    nama: dosen.value.nama,
    noTelp: dosen.value.noTelp,
    kodePos: dosen.value.kodePos,
    email: dosen.value.email,
    alamat: dosen.value.alamat,
    tanggalLahir: dosen.value.tanggalLahir,
  };
}

export const updateDosen: (nip: string, obj: Partial<Dosen>) => Promise<{ ok: boolean }> = async (nip, obj) => {
  const result = await db.dosens.updateByPrimaryIndex("nip", nip, obj);
  return { ok: result.ok };
}

export const addDosen: (obj: Dosen) => Promise<{ ok: boolean }> = async (obj) => {
  const result = await db.dosens.add(obj);
  return { ok: result.ok };
}

export const deleteDosen: (nip: string) => Promise<void> = async (nip) => {
  return await db.dosens.deleteByPrimaryIndex("nip", nip);
}
