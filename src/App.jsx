
import './App.css'
import { FaGithub, FaEnvelope, FaQuestion } from 'react-icons/fa'

function App() {

  const aboutClick = () => {
  }

  const gitHubClick = () => {
    window.open('https://github.com/joecooler21?tab=repositories')
  }

  const contactClick = () => {
    window.location = 'mailto:joe@coolweb.dev'
  }

  const iconStyles = {
    fontSize:'25px'
  }

  const menu = [{ text: 'About', handler: aboutClick, icon:<FaQuestion style={iconStyles} /> },
  { text: 'Github', handler: gitHubClick, icon:<FaGithub style={iconStyles} /> },
  { text: 'Contact', handler: contactClick, icon: <FaEnvelope style={iconStyles} /> }]

  const frontend = ['HTML', 'CSS', 'Javascript', 'React', 'Material UI']
  const backend = ['MongoDB', 'Express', 'Node.js']
  const projects = ['Scheduler', 'Audio Looper', 'Bug Tracker']

  const buttonStyles = {
    marginRight: '5px'
  }

  const containerStyles = {
    textAlign:'left',
    padding:'20px',
    paddingTop:'0px',
    marginLeft:'20px',
    marginTop:'-15px',
  }

  


  return (
    <>
      <img src='/avataaars.svg' />
      <h2>Joseph Cooler</h2>
      <p>Full Stack React Developer<br></br>
        Wisconsin, USA</p>
      {menu.map((e, index) => {
        return <button key={index} onClick={e.handler} style={buttonStyles}>{e.icon}<div>{e.text}</div></button>
      })}
        <p>Stuff I've learned, used and made</p>

        <div style={{display:'flex'}}>

        <div style={containerStyles}>
          <p>Front End</p>
          <ul>
            {frontend.map((e, index) => {
              return <li key={index}>{e}</li>
            })}
          </ul>
        </div>

        <div style={containerStyles}>
          <p>Back End</p>
          <ul>
            {backend.map((e, index) => {
              return <li key={index}>{e}</li>
            })}
          </ul>
        </div>

        <div style={containerStyles}>
          <p>Projects</p>
          <ul>
            {projects.map((e, index) => {
              return <li key={index}>{e}</li>
            })}
          </ul>
        </div>

      </div>
    </>
  )
}

export default App
