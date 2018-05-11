import React from 'react';
import Link from "react-router-dom";

import Login from '../../components/Login';
import EstimationSettings from '../EstimationSettings';
import * as action from '../../redux/actions/Actions';
import Store from '../../redux/Store';
import ApiCalls from '../../utils/ApiCalls';


class SignIn extends React.PureComponent {
  /*Page de login de l'app.
  Render: Composant Login avec fonction de submit passée en props.
  Call a l'api (ApiCalls.logIn(user)) pour le login quand submit, si echec rester ici, si reussite call de l'action
  setLogin pour set Logged a true et redirect vers EstimationSettings */
}
