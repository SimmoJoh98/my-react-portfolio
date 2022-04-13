import './App.css';
import MyNav from './components/nav-component';
import MyCard from './components/main-card';
import WhyMe from './components/why-card';
import Projects from './components/projects-card';
import Skills from './components/skills-card';

function App() {
  return (
    <>
      <MyNav/>
      <MyCard/>
      <WhyMe/>
      <Projects/>
      <Skills/>
    </>
  );
}

export default App;
