import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

interface TestInterface {
  property1?: { nestedProperty1?: string };
}

const someValue: TestInterface = {};

const testVar = someValue.property1!.nestedProperty1!;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
