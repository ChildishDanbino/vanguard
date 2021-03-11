import React from 'react';
import LocalStorageService from 'services/local-storage';

export const Login = () => {
  const [text] = React.useState<string | null>('SETTING AUTH TOKEN TO MIMIC LOGIN');

  React.useEffect(() => {
    setTimeout(() => {
      LocalStorageService.setItem('authToken', 'XXXXXHDHDHKMSKJDAS');
    }, 2000);
  }, []);

  return <div>{text}</div>;
};

export default Login;
