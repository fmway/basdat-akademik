import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import styles from '@/styles/Home.module.css';
import { RotatingLines } from 'react-loader-spinner';



export default function Home() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [delet, setDelet] = useState(false);
  
  /**
  * @param nip {string}
  * */
  const handleDelete = async (nip) => {
    const res = await fetch('/api/dosen/' + nip, {
      method: 'DELETE'
    });
    if(res.ok) {
      setDelet(true);
    }
  };

  useEffect(() => {
    fetch('/api/dosen').then(res => res.json()).then(res => {
      if(res.data && data != res.data) {
        setData(res.data);
        setLoad(false);
        setDelet(false);
      }
    });
  }, [delet]);

  return (
    <>
      <Head>
        <title>Tabel Dosen</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.body}>
        <span className={styles.kelompok}>Kelompok 1</span>
        <h1>Tabel Dosen <RotatingLines strokeColor="red" strokeWidth="3" animationDuration="0.5" width="32" visible={load} /></h1>
        <div className={styles.container}>
          {!load && (
            <Table className={styles.table}>
              <Thead>
                <Tr>
                  <Th>NIP</Th>
                  <Th>Nama</Th>
                  <Th>Tanggal Lahir</Th>
                  <Th>Alamat</Th>
                  <Th>Kode Pos</Th>
                  <Th>No Telepon</Th>
                  <Th>Email</Th>
                  <Th>Aksi</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map(el =>
                  <Tr key={el.nip}>
                    <Td>{el.nip}</Td>
                    <Td>{el.nama}</Td>
                    <Td>{new Date(el.tanggal_lahir).toLocaleDateString('id-ID', { year: "numeric", month: "long", day: "numeric" })}</Td>
                    <Td>{el.alamat}</Td>
                    <Td className={styles.pos}>{el.kode_pos}</Td>
                    <Td>{el.no_telp}</Td>
                    <Td>{el.email}</Td>
                    <Td className={styles.action}><Link className={styles.edit} href={"/form/" + el.nip}>Edit</Link><Link href="" className={styles.delete} onClick={() => handleDelete(el.nip)}>Delete</Link></Td>
                  </Tr>
                )}
              </Tbody>
            </Table>
          )} 
        </div>
        <div className={styles.buttonLeft}>
          <Link href="/form">Tambah Dosen</Link>
          </div>
      </div>
    </>
  );
}
