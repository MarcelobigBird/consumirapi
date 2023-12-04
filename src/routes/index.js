import React from 'react';

import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';

import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Fotos from '../pages/Fotos';
import login from '../pages/Login';
import Register from '../pages/Register';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Alunos} isClosed={false} />
      <MyRoute exact path="/Aluno:id/edit" component={Aluno} isClosed />
      <MyRoute exact path="/Aluno/" component={Aluno} isClosed />
      <MyRoute exact path="/fotos:id" component={Fotos} isClosed />
      <MyRoute exact path="/login" component={login} isClosed={false} />
      <MyRoute exact path="/register/" component={Register} isClosed={false} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
