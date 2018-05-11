import React from 'react';

import CodePromo from '../CodePromo';
import ApiCalls from '../../utils/ApiCalls';

/*Composant de recup de commande et de Facturation
Appel a l'API (ApiCalls.calculatePrice(settings)) (ou ressource de reference) pour obtenir le
calcul du prix par rapport aux data de dechets rentre par le client.
Composant CodePromo (simple input de recuperation et verif du Code, fonction du parent en props
pour gerer retour. Recalcul du tarif si code promo bon)
Recap du lieu et date de l'enlevement*/
