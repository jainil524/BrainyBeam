import React, { useContext } from 'react'
import { ThemeContext } from './Themes/ThemeProvider.jsx'
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;