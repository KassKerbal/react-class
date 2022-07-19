import React, { useState } from 'react';
import styles from './styles.module.scss';
import CheckUser from '../../utils/CheckUser';

function UserForm({ handlerClose, generateOrder }) {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [adress, setAdress] = useState("");
  const [zipCode, setZipCode] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      name: name,
      lastName: lastName,
      phone: phone,
      email: email,
      country: country,
      adress: adress,
      zipCode: zipCode,
    };
    const isValid = CheckUser(newUser)
    isValid && generateOrder(newUser);
    handlerClose(false);
  }

  return (
    <div className={styles.main}>
      <div className={styles.cancel}><span onClick={() => handlerClose(false)}>Cancelar</span></div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formInput}>
          <h2>Información Personal</h2>
          <label>Nombre:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required />
          </label>
          <label>Apellidos:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required />
          </label>
        </div>
        <div className={styles.formInput}>
          <h2>Información de Contacto</h2>
          <label>Teléfono:
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required />
          </label>
          <label>E-mail:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />
          </label>
          <label>País:
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required />
          </label>
          <label>Dirección:
            <input
              type="text"
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
              required />
          </label>
          <label>Código Postal:
            <input
              type="number"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              required />
          </label>
          <div className={styles.submitWrap}>
            <input className={styles.submit} type="submit" />
          </div>

        </div>
      </form>
    </div>
  )
}

export default UserForm