import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import '../../LoginView.css';
import { useHistory } from "react-router-dom";

const FormLogin = () => {
  const [alertErr, setAlertErr] = useState(false);
  const history = useHistory();
  const [formLogin, setFormLogin] = useState({
    email: { value: '', err: false },
    passwd: { value: '', err: false },
  });
  const { email, passwd } = formLogin;

  const login = useCallback(async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/authentication/login`,
        { email: email.value, passwd: passwd.value }
      );
      if (data.exist === 0) {
        setFormLogin({
          email: { value: '', err: true },
          passwd: { value: '', err: true }
        });
        setAlertErr(true);
        return;
      }
      localStorage.setItem('idUserLoged', data.userLogin);
      history.push('/');
    } catch (err) {
      console.warn(err);
    }
  }, [email, passwd, history]);

  const submitLoginForm = (e) => {
    e.preventDefault();
    if (email.value.trim() === '' && passwd.value.trim() === '') {
      setFormLogin({
        email: { ...email, err: true },
        passwd: { ...passwd, err: true }
      });
      return;
    }
    login();
  }

  useEffect(() => {
    const objInputEmail = document.getElementById('loginEmail');
    const objInputPasswd = document.getElementById('loginPasswd');

    if (alertErr)
      setTimeout(() => setAlertErr(false), 1000)

    const validateInputEmail = (e) => {
      if ((email.value).toString().trim() !== '') {
        setFormLogin({
          ...formLogin,
          email: { ...email, err: false }
        })
      } else if (e.keyCode === 8 && email.value === '') {
        setFormLogin({
          ...formLogin,
          email: { ...email, err: true }
        });
      }
    }

    const validateInputPasswd = (e) => {
      if ((passwd.value).toString().trim() !== '') {
        setFormLogin({
          ...formLogin,
          passwd: { ...passwd, err: false }
        })
      } else if (e.keyCode === 8 && passwd.value === '') {
        setFormLogin({
          ...formLogin,
          passwd: { ...passwd, err: true }
        });
      }
    }

    objInputEmail.addEventListener('keyup', validateInputEmail);
    objInputPasswd.addEventListener('keyup', validateInputPasswd);
    return () => {
      objInputEmail.removeEventListener('keyup', validateInputEmail);
      objInputPasswd.removeEventListener('keyup', validateInputPasswd);
    }
  });

  const handleInputChange = ({ target }) => {
    let data = ([target.name] === 'email') ? email : passwd;
    setFormLogin({
      ...formLogin,
      [target.name]: { ...data, value: target.value }
    })
  }

  return (
    <>
      <form onSubmit={submitLoginForm} className="needs-validation">
        <div className="col-auto mb-3">
          <input type="text" className={`form-control input-login-card mb-3 ${(email.err) ? 'is-invalid' : ''}`}
            name="email" value={email.value} onChange={handleInputChange} id="loginEmail"
            placeholder="Correo electrónico o número de telefono"/>
          <input type="password" className={`form-control input-login-card ${(passwd.err) ? 'is-invalid' : ''}`}
            name="passwd" value={passwd.value} onChange={handleInputChange} id="loginPasswd"
            placeholder="Contraseña"/>
        </div>
        {(alertErr) && (
          <div className="alert alert-danger" role="alert">
            Credenciales invalidas. Vuelve a intentarlo
          </div>
        )}
        <div className="d-grid gap-2">
          <button type='submit' className="btn btn-sesion-da text-white">
            Iniciar sesión
          </button>
        </div>
        <div className="col-12 d-flex justify-content-center my-3">
          <a href="/authentication" className="link-forgot-passwd">¿Olvidaste tu contraseña?</a>
        </div>
      </form>
    </>
  )
}

export default FormLogin
