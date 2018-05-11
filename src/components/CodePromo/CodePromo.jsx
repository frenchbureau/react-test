import React from 'react';

import ApiCalls from '../../utils/ApiCalls';
import Store from '../../redux/Store';


/*Checker de code promo
Simple input et submit. Appel a l'api (ApiCalls.checkPromo(codePromo))(ou ressource de reference)
pour checker si code promo viable. Si viable call fonction du parent pour valider.
Sinon message d'erreur et possibilite d'input a nouveau*/
