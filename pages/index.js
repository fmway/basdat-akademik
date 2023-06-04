import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import styles from '@/styles/Home.module.css';
import { RotatingLines } from 'react-loader-spinner';
import Popup from 'reactjs-popup';



export default function Home() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [delet, setDelet] = useState(false);
  const [nipDelete, setNipDelete] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [loadDelete, setLoadDelete] = useState(false);
  
  const closeModal = () => { 
    setOpenModal(false); 
    setNipDelete('');
    setLoadDelete(false);
  };

  /**
  * @param nip {string}
  * */
  const handleDelete = () => {
    if(nipDelete != '') {
      setLoadDelete(true);
      fetch('/api/dosen/' + nipDelete, {
        method: 'DELETE'
      }).then(res => {
        closeModal();
        if(res.ok) {
          setDelet(true);
        }
      }).catch(() => closeModal());
    } else {
      closeModal();
    }
  };

  useEffect(() => {
    setLoad(true);
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tugas Basis Data (Kelompok 1)"/>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <div className={styles.body}>
        <Popup open={openModal} onClose={closeModal} closeOnDocumentClick position="top center" contentStyle={{marginTop: 0}}>
          <div className={styles.modalDel}>
            <div className={styles.deleteMsg}>
              <span className={styles.loadDel}><RotatingLines strokeColor="#946FE3" strokeWidth="3" animationDuration="0.5" width="16" visible={loadDelete} /></span>
              Apakah anda yakin ingin menghapusnya?</div>
            <div className={styles.actionDel}>
              <button className={styles.red} onClick={handleDelete}>Ya</button>
              <button onClick={closeModal}>Tidak</button>
            </div>
          </div>
        </Popup>
        <span className={styles.kelompok}>Kelompok 1</span>
        <h1>Tabel Dosen
          <span className={styles.loading}>
            <RotatingLines strokeColor="red" strokeWidth="3" animationDuration="0.5" width="32" visible={load} />
          </span>
        </h1>
        <div className={styles.container}>
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
                    <Td className={styles.action}>
                      <Link className={styles.edit} href={"/form/" + el.nip}>Edit</Link>
                      <Link href="" className={styles.delete} onClick={() => { setOpenModal(true); setNipDelete(el.nip); } }>Delete</Link></Td>
                  </Tr>
                )}
              </Tbody>
            </Table>
        </div>
        <div className={styles.buttonLeft}>
          <Link href="/form">Tambah Dosen</Link>
          </div>
      </div>
    </>
  );
}
