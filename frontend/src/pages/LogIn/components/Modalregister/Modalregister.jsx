import React, { useCallback, useEffect, useRef, useState } from 'react';
import './Modalregister.css';
import PopoverBtn from './components/PopoverBtn';
import DateSelect from './components/DateSelect';
import RadioBtnGen from './components/RadioBtnGen';
import Ref from './components/Ref';
import axios from 'axios';

const { REACT_APP_CONDI, REACT_APP_PDATOS, REACT_APP_PCOOKIES, REACT_APP_API } = process.env;
const endpointAuth = `${REACT_APP_API}/authentication`;

const Modalregister = () => {
  const myDateRef = useRef(); const infoGenero = useRef();
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
      console.warn(err);
    }
  }, [email]);

  useEffect(() => {
    const inputEmail = document.getElementById('emailReg');
    const inputPasswd = document.getElementById('passwdReg');
    const inputNombre = document.getElementById('nombreReg');
    const inputApellido = document.getElementById('apellidoReg');

    const validateEmail = async (e) => {
      if ((email.value).toString().trim() !== '') {
        const data = await verifyEmail();
        if (data !== 0) {
          setRegisterModal({
            ...registerModal,
            email: { ...email, err: true }
          });
          setMsgErrEmail('*Registro existente, por favor digite uno nuevo');
        } else {
          setRegisterModal({
            ...registerModal,
            email: { ...email, err: false }
          });
        }
      } else if (e.keyCode === 8 && email.value === '') {
        setRegisterModal({
          ...registerModal,
          email: { ...email, err: true }
        });
        setMsgErrEmail('*Por favor completar este campo');
      }
    }

    const validatePasswd = (e) => {
      if ((passwd.value).toString().trim() !== '') {
        let isCorrect = ((passwd.value).toString().length <= 6);
        setRegisterModal({
          ...registerModal,
          passwd: { ...passwd, err: isCorrect }
        });
      } else if (e.keyCode === 8 && passwd.value === '') {
        setRegisterModal({
          ...registerModal,
          passwd: { ...passwd, err: true }
        });
      }
    }

    const validateInputsFullName = (e) => {
      if (e.target.name === 'nombre') {
        if ((nombre.value).toString().trim() !== '') {
          let isCorrect = ((nombre.value).toString().length < 2);
          setRegisterModal({
            ...registerModal,
            nombre: { ...nombre, err: isCorrect }
          });
        } else if (e.keyCode === 8 && nombre.value === '') {
          setRegisterModal({
            ...registerModal,
            nombre: { ...nombre, err: true }
          });
        }
      } else if (e.target.name === 'apellido') {
        if ((apellido.value).toString().trim() !== '') {
          let isCorrect = ((apellido.value).toString().length < 2);
          setRegisterModal({
            ...registerModal,
            apellido: { ...apellido, err: isCorrect }
          });
        } else if (e.keyCode === 8 && apellido.value === '') {
          setRegisterModal({
            ...registerModal,
            apellido: { ...apellido, err: true }
          });
        }
      }
    }
    
    inputEmail.addEventListener('keyup', validateEmail);
    inputPasswd.addEventListener('keyup', validatePasswd);
    inputNombre.addEventListener('keyup', validateInputsFullName);
    inputApellido.addEventListener('keyup', validateInputsFullName);
    return () => {
      inputEmail.removeEventListener('keyup', validateEmail);
      inputPasswd.removeEventListener('keyup', validatePasswd);
      inputNombre.removeEventListener('keyup', validateInputsFullName);
      inputApellido.removeEventListener('keyup', validateInputsFullName);
    }
  });

  const handleInputChange = ({ target }) => {
    let data = null;
    switch (target.name) {
      case 'nombre':
        data = nombre;
        break;
      case 'apellido':
        data = apellido;
        break;
      case 'email':
        data = email;
        break;
      case 'passwd':
        data = passwd;
        break;
      default:
        break;
    }
    setRegisterModal({
      ...registerModal,
      [target.name]: {...data, value: target.value}
    })
  }

  const submitRegister = (e) => {
    e.preventDefault();
    const dateBorn = myDateRef.current.getDate();
    const mes = parseInt(dateBorn.mes);
    const genero = infoGenero.current.getGenero();
    setRegisterModal({
      ...registerModal,
      fechaNacimiento: `${dateBorn.year}-${mes + 1}-${dateBorn.dia}`,
      genero
    });
  }

  return (
    <div className="modal fade" id="exampleModal" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header pt-2 pb-0 align-items-baseline">
            <div className="row">
              <h3 className="modal-title" id="exampleModalLabel">Registrarte</h3>
              <p className="text-black-50">Es rápido y fácil</p>
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
                      placeholder="Número de celular o correo electrónico" name="email"
                      className={`form-control bg-inputs-da ${(email.err) ? 'is-invalid' : ''}`}
                      id="emailReg" aria-describedby="validateEmail"/>
                    <div id="validateEmail" className="invalid-feedback">
                      {msgErrEmail}
                    </div>
                  </div>
                  <div className="mb-3">
                    <input type="password" placeholder="Contraseña nueva" name="passwd"
                      onChange={handleInputChange} value={passwd.value}
                      className={`form-control bg-inputs-da ${(passwd.err) ? 'is-invalid' : ''}`}
                      id="passwdReg" aria-describedby="validatePasswd"/>
                    <div id="validatePasswd" className="invalid-feedback">
                      *Contraseña invalida! Por favor mas de 6 digitos.
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
                    la <Ref url={REACT_APP_PDATOS} contenido='Política de datos'/> y
                    la <Ref url={REACT_APP_PCOOKIES} contenido='Política de cookies'/>.
                    Es posible que te enviemos notificaciones por SMS, que puedes desactivar cuando quieras.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <button className="btn bg-color-da text-white" type="submit">Registrarte</button>
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
