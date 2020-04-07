import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch } from '~contexts/UserContext';
import { actionCreators } from '~contexts/UserContext/reducer';
import LocalStorageService from '~services/LocalStorageService';

import Login from './layout';

function LoginContainer() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogin = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // TODO: request
      const user = { id: 1, name: 'Mocked User' };
      LocalStorageService.setValue('LoggedUser', user);
      const storedUser = LocalStorageService.getValue('LoggedUser');
      dispatch(actionCreators.setUser(storedUser));
      history.push('/');
    },
    [dispatch, history]
  );

  const handleEmailChange = useCallback(() => {
    // TODO implement function
  }, []);

  const handlePasswordChange = useCallback(() => {
    // TODO implement function
  }, []);

  return (
    <Login onEmailChange={handleEmailChange} onPasswordChange={handlePasswordChange} onLogin={handleLogin} />
  );
}

export default LoginContainer;
