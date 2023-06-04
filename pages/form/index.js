import Head from 'next/head';
import styles from '@/styles/Form.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ProgressBar } from 'react-loader-spinner';

export default function Form() {
  const [listPos, setListPos] = useState([]);
  const [loadPos, setLoadPos] = useState(true);
  const [loadSave, setLoadSave] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/kodepos').then(res => res.json()).then(({ data }) => {
      setListPos(data);
      setLoadPos(false);
    });
  }, []);

  /**
  * @param e {Event}
  * */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadSave(true);

    const data = {
      nip: String(e.target.nip.value),
      nama: String(e.target.nama.value),
      tanggal_lahir: String(e.target.tanggal_lahir.value),
      kode_pos: Number(e.target.kode_pos.value),
      no_telp: String(e.target.no_telp.value),
      email: String(e.target.email.value),
      alamat: String(e.target.alamat.value),
    };
    await fetch('/api/dosen', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    setLoadSave(false);
    router.push('/');
  };

  return  (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Tugas Basis Data (Kelompok 1)"/>
        <link rel="icon" href="/favicon.ico" />

        <title>Tambah Dosen</title>
      </Head>
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.title}>Tambah Dosen
            <span className={styles.progress}>
              <ProgressBar height="50" width="45" visible={loadSave} ariaLabel="progress-bar-loading" wrapperStyle={{}} wrapperClass="progress-bar-wrapper" borderColor = '#71b7e6' barColor = '#9b59b6' />
            </span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.userDetails}>
              <div className={styles.inputBox}>
                <label htmlFor="nip" className={styles.details}>NIP</label>
                <input type="number" name="nip" id="nip" placeholder="Masukkan nip..." required maxLength={18} />
              </div>
              <div className={styles.inputBox}>
                <label htmlFor="nama" className={styles.details}>Nama</label>
                <input type="text" name="nama" id="nama" placeholder="Masukkan Nama..." required />
              </div>
              <div className={styles.inputBox}>
                <label htmlFor="tanggal_lahir" className={styles.details}>Tanggal Lahir</label>
                <input type="date" name="tanggal_lahir" id="tanggal_lahir" required />
              </div>
              <div className={styles.inputBox}>
                <label htmlFor="kode_pos" className={styles.details}>Kode Pos</label>
                <select name="kode_pos" id="kode_pos" required defaultValue={"kode"}>
                  <option disabled value={"kode"}>Kode Pos</option>
                  {!loadPos && listPos.map(el => <option key={el.kode_pos} >{el.kode_pos}</option>)}
                </select>
              </div>
              <div className={styles.inputBox}>
                <label htmlFor="no_telp" className={styles.details}>Nomor Telepon</label>
                <input type="number" name="no_telp" id="no_telp" placeholder="Masukkan no. telp..." required />
              </div>
              <div className={styles.inputBox}>
                <label htmlFor="email" className={styles.details}>Email</label>
                <input type="email" name="email" id="email" placeholder="Masukkan email..." required />
              </div>
              <div className={`${styles.inputBox} ${styles.textarea}`}>
                <label htmlFor="alamat" className={styles.details}>Alamat</label>
                <textarea name="alamat" id="alamat" placeholder="Masukkan alamat..." required></textarea>
              </div>
              <div className={styles.button}>
                <button type="submit" id="submit">Tambah</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
