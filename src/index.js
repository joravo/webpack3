import { render } from 'react-dom';

import App from './components/App';




const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

console.log(elvenShieldRecipe);

render(<App />, document.getElementById('root'));