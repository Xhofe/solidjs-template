import './styles/index.css';
import './styles/global.css';
import { render } from 'solid-js/web';

import App from './App';

render(() => <App />, document.getElementById('root') as HTMLElement);
