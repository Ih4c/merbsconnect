import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MerbsApp from './components/MerbsApp';
import StartRightApp from './components/StartRightApp';
import TeamProfiles from './components/TeamProfiles';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MerbsApp />} />
        <Route path="/startright/*" element={<StartRightApp />} />
        <Route path="/team-profiles" element={<TeamProfiles />} />
      </Routes>
    </Router>
  );
}

export default App;
