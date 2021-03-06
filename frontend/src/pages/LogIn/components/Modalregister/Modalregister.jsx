import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import './Modalregister.css';
import PopoverBtn from './components/PopoverBtn';
import DateSelect from './components/DateSelect';
import RadioBtnGen from './components/RadioBtnGen';
import Ref from './components/Ref';
import axios from 'axios';
import { useHistory } from 'react-router';
import { AuthContext } from '../../../../auth/AuthContext';
import { types } from '../../../../types/types';

const { REACT_APP_CONDI, REACT_APP_PDATOS, REACT_APP_PCOOKIES, REACT_APP_API } = process.env;
const endpointAuth = `${REACT_APP_API}/authentication`;

const Modalregister = () => {
  const { dispatch } = useContext(AuthContext);
  const myDateRef = useRef(), infoGenero = useRef();
  let history = useHistory();
  const [msgErrEmail, setMsgErrEmail] = useState(null)
  const [registerModal, setRegisterModal] = useState({
    nombre: { value: '', err: false },
    apellido: { value: '', err: false },
    email: { value: '', err: false },
    passwd: { value: '', err: false }
  });
  const { nombre, apellido, email, passwd } = registerModal;

  const verifyEmail = useCallback(async () => {
    try {
      const { data } = await axios.get(`${endpointAuth}/verifyInfo?q=${email.value}`);
      return data;
    } catch (err) {
      return console.warn(err);
    }
  }, [email]);

  useEffect(() => {
    if (email.value.trim() !== '') {
      verifyEmail().then((resp) => {
        if (resp !== 0) {
          if (email.err === false) {
            setRegisterModal((current) => ({
              ...current,
              email: {...email, err: true}
            }));
            setMsgErrEmail('*Registro existente, por favor digite uno nuevo');
          }
        } else {
          if (email.err) {
            setRegisterModal((current) => ({
              ...current,
              email: {...email, err: false}
            }));
            setMsgErrEmail(null);
          }
        }
      });
    } else {
      if (email.err) {
        setRegisterModal((current) => ({
          ...current,
          email: {...email, err: false}
        }));
        setMsgErrEmail(null);
      }
    }
  }, [email, verifyEmail]);

  useEffect(() => {
    if (passwd.value.trim() !== '') {
      if (passwd.value.length < 7) {
        if (passwd.err === false) {
          setRegisterModal((current) => ({
            ...current,
            passwd: { ...passwd, err: true }
          }));
        }
      } else {
        if (passwd.err) {
          setRegisterModal((current) => ({
            ...current,
            passwd: { ...passwd, err: false }
          }));
        }
      }
    }
  }, [passwd]);

  useEffect(() => {
    if ((nombre.value).trim() !== '') {
      if (nombre.value.length < 3) {
        if (nombre.err === false) {
          setRegisterModal((current) => ({
            ...current,
            nombre: { ...nombre, err: true }
          }));
        }
      } else {
        if (nombre.err) {
          setRegisterModal((current) => ({
            ...current,
            nombre: { ...nombre, err: false }
          }));
        }
      }
    }

    if ((apellido.value).trim() !== '') {
      if (apellido.value.length < 3) {
        if (apellido.err === false) {
          setRegisterModal((current) => ({
            ...current,
            apellido: { ...apellido, err: true }
          }));
        }
      } else {
        if (apellido.err) {
          setRegisterModal((current) => ({
            ...current,
            apellido: { ...apellido, err: false }
          }));
        }
      }
    }
  }, [nombre, apellido]);

  const handleInputChange = ({ target }) => {
    setRegisterModal((current) => ({
      ...current,
      [target.name]: { ...current[target.name], value: target.value }
    }));
  }

  const validateRegister = () => {
    if (nombre.value.trim() === '') {
      setRegisterModal({ ...registerModal, nombre: { ...nombre, err: true } });
      return;
    }
    if (apellido.value.trim() === '') {
      setRegisterModal({ ...registerModal, apellido: { ...apellido, err: true } });
      return;
    }
    if (email.value.trim() === '') {
      setRegisterModal({ ...registerModal, email: { ...email, err: true } });
      return;
    }
    if (passwd.value.trim() === '') {
      setRegisterModal({ ...registerModal, passwd: { ...passwd, err: true } });
      return;
    }
  }

  const registerUser = useCallback(async () => {
    const dateBorn = myDateRef.current.getDate();
    const mes = parseInt(dateBorn.mes) + 1;
    const genero = parseInt(infoGenero.current.getGenero(), 10);
    try {
      const { data } = await axios.post(`${endpointAuth}/register`, {
        nombres: nombre.value,
        apellidos: apellido.value,
        email: email.value,
        passwd: passwd.value,
        fecha_nacimiento: `${dateBorn.year}-${mes}-${dateBorn.dia}`,
        orientacion_sexual: genero
      });
      console.log(data);
      localStorage.setItem('idUserLoged', data.insertId);
      let userLogin = data.insertId;
      dispatch({
        type: types.login,
        payload: { userLogin }
      });
    } catch (err) {
      console.warn(err);
    }
  }, [nombre, apellido, email, passwd, dispatch]);

  const submitRegister = async (e) => {
    e.preventDefault();
    validateRegister();
    if (msgErrEmail != null) return;
    if (infoGenero.current.getGenero() === null) return;
    document.getElementById("registerModal").style.display="none";
    await registerUser().then(() => {
      setTimeout(() => {
        history.replace('/');
        window.location.reload(); // TODO: creo que no se puede hacer despues de reenderizar y enviar a otra vista
      }, 800);
    });
  }

  return (
    <div className="modal fade" id="registerModal" aria-hidden="true" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header pt-2 pb-0 align-items-baseline">
            <div className="row">
              <h3 className="modal-title" id="registerModalLabel">Registrarte</h3>
              <p className="text-black-50">Es r??pido y f??cil</p>
            </div>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form className="col-12 p-2" onSubmit={submitRegister}>
              <div className="row mb-3">
                <div className="col-auto d-inline-flex">
                  <input type="text" placeholder="Nombre" name="nombre"
                    onChange={handleInputChange} value={nombre.value}
                    className={`form-control me-3 bg-inputs-da ${(nombre.err) ? 'is-invalid' : ''}`}
                    id="nombreReg" />
                  <input type="text" placeholder="Apellido" name="apellido"
                    onChange={handleInputChange} value={apellido.value}
                    className={`form-control bg-inputs-da ${(apellido.err) ? 'is-invalid' : ''}`}
                    id="apellidoReg" />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="mb-3">
                    <input type="text" onChange={handleInputChange} value={email.value}
                      placeholder="N??mero de celular o correo electr??nico" name="email"
                      className={`form-control bg-inputs-da ${(email.err) ? 'is-invalid' : ''}`}
                      id="emailReg" aria-describedby="validateEmail"/>
                    <div id="validateEmail" className="invalid-feedback">
                      {msgErrEmail}
                    </div>
                  </div>
                  <div className="mb-3">
                    <input type="password" placeholder="Contrase??a nueva" name="passwd"
                      onChange={handleInputChange} value={passwd.value}
                      className={`form-control bg-inputs-da ${(passwd.err) ? 'is-invalid' : ''}`}
                      id="passwdReg" aria-describedby="validatePasswd"/>
                    <div id="validatePasswd" className="invalid-feedback">
                      *Contrase??a invalida! Por favor mas de 6 digitos.
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 d-inline-flex">
                  <p className="fs-6 text-black-50 mb-0 me-2 font-info-da">Fecha de nacimiento</p>
                  <PopoverBtn />
                </div>
              </div>
              <div className="row mb-3">
                <DateSelect ref={myDateRef} />
              </div>
              <div className="row">
                <div className="col-12 d-inline-flex">
                  <p className="fs-6 text-black-50 mb-0 me-2 font-info-da">Sexo</p>
                  <PopoverBtn />
                </div>
              </div>
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <RadioBtnGen ref={infoGenero}/>
                </div>
              </div>
              <div className="row my-2">
                <div className="col-12">
                  <p className="msg-politics">
                    Al hacer clic en "Registrarte", aceptas nuestras <Ref url={REACT_APP_CONDI} contenido='Condiciones'/>,
                    la <Ref url={REACT_APP_PDATOS} contenido='Pol??tica de datos'/> y
                    la <Ref url={REACT_APP_PCOOKIES} contenido='Pol??tica de cookies'/>.
                    Es posible que te enviemos notificaciones por SMS, que puedes desactivar cuando quieras.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <button className="btn bg-color-da text-white" type="submit">
                    Registrarte
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modalregister;
