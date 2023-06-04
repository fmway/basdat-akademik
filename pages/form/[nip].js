import Head from 'next/head';
import styles from '@/styles/Form.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Toggle } from '@/components/Toggle.js';
import Select from 'react-select';
import { ProgressBar } from 'react-loader-spinner';

export default function Form() {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: state.isDisabled ? '#dadada' : '#fff', 
      border: `1px solid ${state.isFocused ? '#9b59b6' : '#ccc'}`,
      minHeight: '45px',
      height: '45px',
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      height: '45px',
      padding: '0 2px',
    }),

    input: (provided, state) => ({
      ...provided,
      margin: '0px',
    }),
    indicatorSeparator: state => ({
      display: 'none',
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: '45px',
    }),
  };
  const { push, query } = useRouter();
  const oldnip = query.nip;
  const [listPos, setListPos] = useState([{ value: 'pos', label: 'Kode Pos', isDisabled: true }]);
  const [edit, setEdit] = useState(false);
  const [dosen, setDosen] = useState({});
  const [nip, setNip] = useState('');
  const [tgl, setTgl] = useState('');
  const [nama, setNama] = useState('');
  const [notelp, setNotelp] = useState('');
  const [email, setEmail] = useState('');
  const [kodePos, setKodePos] = useState('');
  const [alamat, setAlamat] = useState('');
  const [loadPos, setLoadPos] = useState(true);
  const [loadDosen, setLoadDosen] = useState(true);


  useEffect(() => {
    if(!oldnip || oldnip == undefined) {
      push('/form');
    }
    fetch('/api/dosen/' + oldnip).then(res => res.json()).then(res => {
      setDosen(res.data);
      setNip(dosen.nip);
      setNama(dosen.nama);
      setTgl(String(dosen.tanggal_lahir).split('T')[0]);
      setNotelp(String(dosen.no_telp).replace('+', ''));
      setKodePos(dosen.kode_pos);
      setEmail(dosen.email);
      setAlamat(dosen.alamat);
      setLoadDosen(false);
    }).catch((e) => alert(e));
    fetch('/api/kodepos').then(res => res.json()).then(({ data }) => {
      const listPos = [{ value: 'pos', label: 'Kode Pos', isDisabled: true }];
      data.forEach((e) => {
        listPos.push({value: `${e.kode_pos}`, label: `${e.kode_pos}`});
      });
      setListPos(listPos);
      setLoadPos(false);
    });
  }, [loadDosen, loadPos, kodePos]);

  /**
  * @param e {Event}
  * */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nip: String(nip || dosen.nip),
      nama: String(nama || dosen.nama),
      tanggal_lahir: String(tgl || dosen.tanggal_lahir),
      kode_pos: Number(kodePos || dosen.kode_pos),
      no_telp: String(notelp || dosen.no_telp),
      email: String(email || dosen.email),
      alamat: String(alamat || dosen.alamat),
    };
    await fetch('/api/dosen/' + oldnip, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    push('/');
  };

  return  (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Edit Dosen</title>
      </Head>
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.progress}>
            <ProgressBar height="50" width="45" visible={loadDosen} ariaLabel="progress-bar-loading" wrapperStyle={{}} wrapperClass="progress-bar-wrapper" borderColor = '#71b7e6' barColor = '#9b59b6' />
          </div>
          <div className={styles.title}>Edit Dosen {!loadDosen && <Toggle toggled={edit} setToggled={setEdit} />}
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.userDetails}>
              <div className={styles.inputBox}>
                <label htmlFor="nip" className={styles.details}>NIP</label>
                <input type="number" name="nip" id="nip" placeholder="Masukkan nip..." required maxLength={18} value={nip} onInput={ e => setNip(e.currentTarget.value) } readOnly={!edit} />
              </div>
              <div className={styles.inputBox}>
                <label htmlFor="nama" className={styles.details}>Nama</label>
                <input type="text" name="nama" id="nama" placeholder="Masukkan Nama..." required value={nama} onInput={ e => setNama(e.currentTarget.value) } readOnly={!edit} />
              </div>
              <div className={styles.inputBox}>
                <label htmlFor="tanggal_lahir" className={styles.details}>Tanggal Lahir</label>
                <input type="date" name="tanggal_lahir" id="tanggal_lahir" required value={ tgl } onInput={ e => setTgl(e.currentTarget.value) } readOnly={!edit} />
              </div>
              <div className={styles.inputBox}>
                <label htmlFor="kode_pos" className={styles.details}>Kode Pos</label>
                {!loadPos &&
                <Select defaultValue={{value: `${dosen.kode_pos}`, label: `${dosen.kode_pos}`}} onChange={setKodePos} isDisabled={!edit} options={listPos} styles={customStyles} /> }
              </div>
              <div className={styles.inputBox}>
                <label htmlFor="no_telp" className={styles.details}>Nomor Telepon</label>
                <input type="number" name="no_telp" id="no_telp" placeholder="Masukkan no. telp..." required value={notelp} onInput={ e => setNotelp(e.currentTarget.value) } readOnly={!edit} />
              </div>
              <div className={styles.inputBox}>
                <label htmlFor="email" className={styles.details}>Email</label>
                <input type="email" name="email" id="email" placeholder="Masukkan email..." required value={email} onInput={ e => setEmail(e.currentTarget.value) } readOnly={!edit} />
              </div>
              <div className={`${styles.inputBox} ${styles.textarea}`}>
                <label htmlFor="alamat" className={styles.details}>Alamat</label>
                <textarea name="alamat" id="alamat" placeholder="Masukkan alamat..." required value={alamat} onInput={ e => setAlamat(e.currentTarget.value) } readOnly={!edit} />
              </div>
              <div className={styles.button}>
                <input name="submit" type="submit" id="submit" value="Simpan" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
