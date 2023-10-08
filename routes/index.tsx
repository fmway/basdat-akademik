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
  return (
    <>
      <Head>
        <title>Tabel Dosen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tugas Basis Data (Kelompok 1)"/>
        <link rel="icon" type="image/x-icon" href={asset("/favicon.ico")} />
      </Head>
      <div class="w-screen h-screen bg-gradient-to-r from-fuchsia-600 to-sky-400">
        <h1 class="pt-6 font-bold text-redd text-center text-3xl">Tabel Dosen</h1>
        <div class="flex flex-col mx-3 bg-white rounded-lg">
          <div class="overflow-x-auto mx-1 -mb-1 rounded-lg">
            <div class="inline-block min-w-full pt-1 rounded-lg">
              <div class="overflow-hidden rounded-lg">
                <table class="min-w-full rounded-lg text-left font-light">
                  <thead class="border-b font-medium bg-slate-900 border-white text-white text-center">
                    <tr>
                      <th scope="col" class="px-2 py-2 border-r-2">NIP</th>
                      <th scope="col" class="px-2 py-2 border-r-2">Nama</th>
                      <th scope="col" class="px-2 py-2 border-r-2">Tanggal Lahir</th>
                      <th scope="col" class="px-2 py-2 border-r-2">Alamat</th>
                      <th scope="col" class="px-2 py-2 border-r-2">Kode Pos</th>
                      <th scope="col" class="px-2 py-2 border-r-2">No Telepon</th>
                      <th scope="col" class="px-2 py-2 border-r-2">Email</th>
                      <th scope="col" class="px-2 py-2">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.data.map(el => 
                      <tr key={el.nip} class="border-b bg-[#cfedff] hover:bg-[#cfddff]">
                        <td class="whitespace-nowrap hover:bg-[#cffbff] border-white border-r-2 border-b-2 px-2 py-2">
                          {el.nip}
                        </td>
                        <td class="whitespace-nowrap hover:bg-[#cffbff] border-white border-r-2 border-b-2 px-2 py-2">
                          {el.nama}
                        </td>
                        <td class="hwhitespace-nowrap over:bg-[#cffbff] text-center border-white border-r-2 border-b-2 px-2 py-2">{
                          new Date(el.tanggalLahir).toLocaleDateString('id-ID', { year: "numeric", month: "long", day: "numeric" })
                        }</td>
                        <td class="hover:bg-[#cffbff] border-white border-r-2 border-b-2 px-2 py-2">
                          {el.alamat}
                        </td>
                        <td class="whitespace-nowrap hover:bg-[#cffbff] border-white border-r-2 border-b-2 text-center px-2 py-2">
                          {el.kodePos}
                        </td>
                        <td class="whitespace-nowrap hover:bg-[#cffbff] border-white border-r-2 border-b-2 px-2 py-2">
                          {el.noTelp}
                        </td>
                        <td class="whitespace-nowrap hover:bg-[#cffbff] border-white border-r-2 border-b-2 px-2 py-2">
                          {el.email}
                        </td>
                        <td class="hover:bg-[#cffbff] border-white border-b-2 border-b-2 text-center px-2 py-2">
                          <button class="bg-purple-600 hover:bg-purple-700 hover:text-slate-200 px-2 py-1 rounded-md text-white">Edit</button>
                          <button class="ml-1 bg-red-500 hover:text-slate-700 px-2 py-1 rounded-md text-white">Delete</button>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
