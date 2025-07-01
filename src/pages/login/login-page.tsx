import styles from './login-page.module.scss';
import { Button } from '../../ui/button';
import { useState } from 'react';
import { Input } from '../../ui/inputs/input';
import { LogoIcon } from '../../ui/icons/logo-icon';
import { useNavigate } from 'react-router-dom';
import { ERROR } from '../../constants/errors';

export const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const isValidEmail = (value: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleBlurEmail = () => {
    if (!isValidEmail(email)) {
      setEmailError(ERROR.EMAIL);
    }
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleBlurPassword = () => {
    if (!isValidPassword(password)) {
      setPasswordError(ERROR.PASSWORD);
    }
  };

  const isValidPassword = (value: string): boolean => {
    return value.length >= 6;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValidEmail(email) || !isValidPassword(password)) {
      return;
    }
    navigate('/dashboard');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <LogoIcon />
        <span className={styles.logo__text}>BankDash.</span>
      </div>

      <div className={styles.form_box}>
        <h2 className={styles.title}>Sign In</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.input_group}>
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChangeEmail}
              onBlur={handleBlurEmail}
              error={emailError}
            />
          </div>

          <div className={styles.input_group}>
            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleChangePassword}
              onBlur={handleBlurPassword}
              error={passwordError}
            />
          </div>

          <Button
            text="Sign In"
            theme="blue"
            type="submit"
            disabled={Boolean(emailError || passwordError)}
          />
        </form>
      </div>
    </div>
  );
};
