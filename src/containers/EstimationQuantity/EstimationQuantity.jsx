import React from 'react';
import Link from 'react-router-dom';

import QuantitySelector from '../../components/QuantitySelector';

class EstimationQuantity extends React.PureComponent {
  /*Page pour setter les quantités de dechets que l'utilisateur a selectionné
  Recuperation dans le store des types de dechets selectionnés.
  Map des données pour render un QuantitySelector par type en passant le nom du type de dechet et url/path vers
  l'icone du dechet en props.
  Les appels a l'action setGarbageQuantity sont fait directement dans QuantitySelector
  Bouton de validation qui Link vers EstimationValidate*/
}
