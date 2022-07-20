import React, { useState } from 'react';
import styles from './styles.module.scss';
import { useForm } from "react-hook-form";

function UserForm({ handlerClose, generateOrder }) {

  const { register, handleSubmit } = useForm();
  const [isVisible, setVisible] = useState(false);

  const validateMail = (user) => {
    if (user.email === user.reEmail) {
      setVisible(false);
      return true;
    } else {
      setVisible(true);
      return false;
    }
  }

  const onSubmit = (event) => {
    const newUser = event;
    const isValid = validateMail(event);
    isValid && generateOrder(newUser);
    isValid && handlerClose(false);
  }

  return (
    <div className={styles.main}>
      <div className={styles.cancel}><span onClick={() => handlerClose(false)}>Cancelar</span></div>

      <form className={styles.formInput} onSubmit={handleSubmit(onSubmit)}>
        <h2>Información Personal</h2>
        <input {...register("name", {
          required: true, minLength: {
            value: 3,
            message: 'error message'
          }
        })} placeholder={"Nombre"} />
        <input {...register("lastName", {
          required: true, minLength: {
            value: 3,
            message: 'error message'
          }
        })} placeholder={"Apellidos"} />
        <h2>Información de Contacto</h2>
        <input {...register("phone", {
          required: true, validate: {
            number: (v) => parseInt(v) > 0
          }
        })} placeholder={"Teléfono"} />
        <p className={isVisible ? styles.validationCheck : styles.disable }>Email no coincide</p>
        <input {...register("email", { required: true })} placeholder={"Email"} />
        <input {...register("reEmail", { required: true })} placeholder={"Re-Email"} />
        <input {...register("country", { required: true })} placeholder={"País"} />
        <input {...register("adress", { required: true })} placeholder={"Dirección"} />
        <input {...register("zipCode", {
          required: true, validate: {
            number: (v) => parseInt(v) > 0
          }
        })} placeholder={"Código Postal"} />
        <div className={styles.submitWrap}>
          <input 
            className={styles.submit} 
            type="submit" 
            value="ACEPTAR"/>
        </div>
      </form>
    </div>
  )
}

export default UserForm