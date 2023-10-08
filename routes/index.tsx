import { useSignal } from "@preact/signals";
import Counter from "@/islands/Counter.tsx";
import { Dosen, showDosen } from "@/utils/db.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head, asset } from "$fresh/runtime.ts";

export const handler: Handlers<Dosen[]> = {
  async GET(_req, ctx) {
    const dosens = await showDosen();
    return ctx.render(dosens);
  }
}

export default function Home(props: PageProps<Dosen[]>) {
  // console.dir(props);
  const count = useSignal(3);
  return (
    <>
      <Head>
        <title>Tabel Dosen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tugas Basis Data (Kelompok 1)"/>
        <link rel="icon" type="image/x-icon" href={asset("/favicon.ico")} />
        <link type="stylesheet" href={asset("/styles.css")} />
      </Head>
      <div class="w-screen h-screen bg-gradient-to-r from-fuchsia-600 to-sky-400">
        <h1 class="pt-6 font-bold text-redd text-center text-3xl">Tabel Dosen</h1>
        <div class="table-container">
          <table class="table">
            <thead>
              <tr>
                <th>NIP</th>
                <th>Nama</th>
                <th>Tanggal Lahir</th>
                <th>Alamat</th>
                <th>Kode Pos</th>
                <th>No Telepon</th>
                <th>Email</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {props.data.map(el => 
                <tr key={el.nip}>
                  <td>{el.nip}</td>
                  <td>{el.nama}</td>
                  <td>{new Date(el.tanggalLahir).toLocaleDateString('id-ID', { year: "numeric", month: "long", day: "numeric" })}</td>
                  <td>{el.alamat}</td>
                  <td>{el.kodePos}</td>
                  <td>{el.noTelp}</td>
                  <td>{el.email}</td>
                  <td>Edit | Delete</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
