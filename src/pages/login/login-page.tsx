import styles from './login-page.module.scss';
import { Button } from '../../ui/button';
import { useState } from 'react';
import { Input } from '../../ui/inputs/input';
import { LogoIcon } from '../../ui/icons/logo-icon';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      navigate('/dashboard');
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <LogoIcon />
        <span className={styles.logo__text}>BankDash.</span>
      </div>

      <div className={styles.form_box}>
        <h2 className={styles.title}>Sign In</h2>
        <form className={styles.form} onSubmit={e => e.preventDefault()}>
          <div className={styles.input_group}>
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.input_group}>
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <Button text="Sign In" theme="blue" onClick={handleLogin} />
        </form>
      </div>
    </div>
  );
};
