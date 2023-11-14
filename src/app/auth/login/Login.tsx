import { Link } from 'react-router-dom';

import { Button, Input } from 'ui';

import { useLogin } from './Login.effect';

export const Login = () => {
  const { username, password, handlePasswordChange, handleSubmit, handleUsernameChange } = useLogin();

  return (
    <>
      <h1 className="my-5 flex self-start text-h5">Login</h1>
      <form className="flex w-full flex-col gap-6" onSubmit={handleSubmit}>
        <Input
          name="username"
          label="Username"
          labelClass="text-md"
          type="text"
          placeholder="Enter username"
          formControlClass="placeholder:text-gray-dark"
          value={username}
          onChange={handleUsernameChange}
        />
        <Input
          name="password"
          label="Password"
          labelClass="text-md"
          type="password"
          placeholder="Enter password"
          formControlClass="placeholder:text-gray-dark"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button type="submit" className="btn-primary btn-lg">
          Log in
        </Button>
      </form>
      <div className="mt-2 flex self-start">
        <Link to="/" className="text-h2 text-gray-dark underline">
          Forgot password?
        </Link>
      </div>
    </>
  );
};
