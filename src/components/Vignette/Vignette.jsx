import React from 'react';

import * as action from '../../redux/actions/Actions';
import Store from '../../redux/Store';

/*Simple vignette de type de dechet.
Si pas de value passée en props la vignette peut etre cliquee ainsi on peut modifier la value
(soit via un popup input, soit via le +)
Action setGarbageType pour set les types de dechets que l'utilisateur veut faire collecter
*/
