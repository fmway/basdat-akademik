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

await db.kodepos.addMany([
  {
    kodePos: "41113",
    alamatKecamatan: "Cipaisan",
    alamatKotaKab: "Purwakarta",
    alamatProvinsi: "Jawa Barat",
  },
  {
    kodePos: "41115",
    alamatKecamatan: "Pondoksalam",
    alamatKotaKab: "Purwakarta",
    alamatProvinsi: "Jawa Barat",
  },
  {
    kodePos: "41116",
    alamatKecamatan: "Sukasari",
    alamatKotaKab: "Purwakarta",
    alamatProvinsi: "Jawa Barat",
  },
  {
    kodePos: "41151",
    alamatKecamatan: "Babakancikao",
    alamatKotaKab: "Purwakarta",
    alamatProvinsi: "Jawa Barat",
  },
  {
    kodePos: "41152",
    alamatKecamatan: "Jatiluhur",
    alamatKotaKab: "Purwakarta",
    alamatProvinsi: "Jawa Barat",
  },
  {
    kodePos: "41162",
    alamatKecamatan: "Plered",
    alamatKotaKab: "Purwakarta",
    alamatProvinsi: "Jawa Barat",
  },
  {
    kodePos: "41163",
    alamatKecamatan: "Darangdan",
    alamatKotaKab: "Purwakarta",
    alamatProvinsi: "Jawa Barat",
  },
  {
    kodePos: "41164",
    alamatKecamatan: "Bojong",
    alamatKotaKab: "Purwakarta",
    alamatProvinsi: "Jawa Barat",
  },
  {
    kodePos: "41165",
    alamatKecamatan: "Tegalwaru",
    alamatKotaKab: "Purwakarta",
    alamatProvinsi: "Jawa Barat",
  },
  {
    kodePos: "41166",
    alamatKecamatan: "Manilis",
    alamatKotaKab: "Purwakarta",
    alamatProvinsi: "Jawa Barat",
  },
  {
    kodePos: "41167",
    alamatKecamatan: "Sukatani",
    alamatKotaKab: "Purwakarta",
    alamatProvinsi: "Jawa Barat",
  },
  {
    kodePos: "41172",
    alamatKecamatan: "Pasawahan",
    alamatKotaKab: "Purwakarta",
    alamatProvinsi: "Jawa Barat",
  },
  {
    kodePos: "41174",
    alamatKecamatan: "Wayanasa",
    alamatKotaKab: "Purwakarta",
    alamatProvinsi: "Jawa Barat",
  },
  {
    kodePos: "41175",
    alamatKecamatan: "Klarapedes",
    alamatKotaKab: "Purwakarta",
    alamatProvinsi: "Jawa Barat",
  },
  {
    kodePos: "41180",
    alamatKecamatan: "Campaka",
    alamatKotaKab: "Purwakarta",
    alamatProvinsi: "Jawa Barat",
  },
  {
    kodePos: "41181",
    alamatKecamatan: "Bungusari",
    alamatKotaKab: "Purwakarta",
    alamatProvinsi: "Jawa Barat",
  },
  {
    kodePos: "41182",
    alamatKecamatan: "Cibatu",
    alamatKotaKab: "Purwakarta",
    alamatProvinsi: "Jawa Barat",
  },
]);

await db.dosens.addMany([
  {
    nip: "920200119880817112",
    nama: "Rizki Hikmawan",
    tanggalLahir: new Date("1988-08-17"),
    alamat: "Komplek Babakan Indah, Jalan Lebak No 7, esa Cibuntu",
    kodePos: "41174",
    noTelp: "628522100444",
    email: "rizkihikmawan@upi.edu"
  },
  {
    nip: "920200119880825111",
    nama: "Rian Andrian",
    tanggalLahir: new Date("1988-08-25"),
    alamat: "Komplek Pakusarakan, Jalan Prabu Sliliwangi No 6, Desa Cipaisan",
    kodePos: "41113",
    noTelp: "6285222444425",
    email: "rianandrian@upi.edu",
  },
  {
    nip: "920200119900825113",
    nama: "Nur Wachid Abdul Majid",
    tanggalLahir: new Date("1990-08-25"),
    alamat: "Komplek Cianting Raya, Jalan Perhiasan No 7, Desa Cianting",
    kodePos: "41167",
    noTelp: "6285225004421",
    email: "nurwahid@upi.edu",
  },
]);

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


// await deleteDosen("88282");
// await addDosen({
//   nip: "88282",
//   nama: "anuan",
//   noTelp: "928398223",
//   kodePos: "53254",
//   email: "email@upi.edu",
//   alamat: "alamatku",
//   tanggalLahir: new Date(),
// })

// await updateDosen("920200119900825113", {
//   nama: "Nur Wachid",
// });

// console.log(await db.dosens.updateByPrimaryIndex("nip", "920200119900825113", {
  // nama: "Mohamad Fikri",
// }));

// console.dir(await showDosen());
