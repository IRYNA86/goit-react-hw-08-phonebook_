import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'components/store/auth/auth-operations';
import s from '../RegisterPage/RegisterPage.module.css';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Email can not be empty');
  const [passwordError, setPasswordError] = useState(
    'Password can not be empty'
  );
  const [formValid, setFormValid] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const nameHandler = e => {
    setName(e.target.value);
  };
  const emailHandler = e => {
    setEmail(e.target.value);
    const valid_email =
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    if (!valid_email.test(String(e.target.value).toLowerCase())) {
      setEmailError('Incorrect email');
    } else {
      setEmailError('');
    }
  };

  const passwordHandler = e => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 20) {
      setPasswordError(
        'Password must be longer than 3 and shorter than 20 characters'
      );
      if (!e.target.value) {
        setPasswordError('Password can not be empty');
      }
    } else {
      setPasswordError('');
    }
  };

  const blurHandler = e => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(operations.register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div className={s.registerPage}>
    <form onSubmit={handleSubmit} className={s.register}>
      <h1 className={s.titleRegister}>Registration</h1>
      <input
        onChange={e => nameHandler(e)}
        value={name}
        onBlur={e => blurHandler(e)}
        name="name"
        type="text"
        placeholder="Enter your name ..."
        className={s.inputRegister}
      />
      {emailDirty && emailError && (
        <div style={{ color: 'red' }}>{emailError}</div>
      )}
      <input
        onChange={e => emailHandler(e)}
        value={email}
        onBlur={e => blurHandler(e)}
        name="email"
        type="text"
        placeholder="Enter your email ..."
        className={s.inputRegister}
      />
      {passwordError && passwordDirty && (
        <div style={{ color: 'red' }}>{passwordError}</div>
      )}
      <input
        onChange={e => passwordHandler(e)}
        value={password}
        onBlur={e => blurHandler(e)}
        name="password"
        type="password"
        placeholder="Enter your password ..."
        className={s.inputRegister}
      />
      <button disabled={!formValid} type="submit" className={s.buttonRegister}>
        Registration
      </button>
    </form>
    </div>
  );
}

export default RegisterPage;
