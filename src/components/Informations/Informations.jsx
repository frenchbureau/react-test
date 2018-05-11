import React from 'react';
import Link from 'react-router-dom';

import Input from '../Input';
import EstimationQuantity from '../../containers/EstimationQuantity';
import * as action from '../../redux/actions/Actions';
import Store from '../../redux/Store';

/*Composant contenant le formulaire relatif aux données de collecte (lieu, horaires, acces)
Trois composants Input avec nom du champ, placeholder, et handlechange en props pour remonter l'input au parent
Bouton de submit qui dispatch l'action setCollectInfo dans le store, et Link vers EstimationQuantity*/
