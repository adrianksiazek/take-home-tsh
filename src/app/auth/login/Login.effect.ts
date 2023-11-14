import { ChangeEvent, FormEvent, useState } from 'react';

export const useLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({ username, password });

    setUsername('');
    setPassword('');
  };

  return { username, password, handlePasswordChange, handleSubmit, handleUsernameChange };
};
