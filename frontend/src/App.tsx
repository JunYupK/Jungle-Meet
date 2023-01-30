import React from 'react';

const Main = React.lazy(() => import('./Pages/Main/Main'));
function App() {
  return <Main></Main>;
}

export default App;
