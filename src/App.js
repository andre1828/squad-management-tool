import './App.css';
import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'
import MyTeams from './MyTeams/MyTeams.js'
import Top5Teams from './Top5Teams/Top5Teams.js'
import HighlightedPlayers from './HighlightedPlayers/HighlightedPlayers.js'

function App() {
  return (
    <>
      <Header />
      <MyTeams />
      <Top5Teams />
      <HighlightedPlayers />
      <Footer />
    </>
  );
}

export default App;
