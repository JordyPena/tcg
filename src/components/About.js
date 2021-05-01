import "../styling/about.css"
export default function About() {
  return (
    <div className="about-container">
      <p className="about-header">Clone of Pokémon TCG Guru</p>
      <p className="about-p">Motivation behind this project was to recreate an existing site, complete with API calls and CSS styling.</p>
      <p className="about-p">I tried to avoid looking at the original sites CSS styling line by line in order to further my CSS capabilities</p>
      <p className="about-p">Check out the original site by Andrew Backes</p>
      <a href="https://pokemontcg.guru" target="blank" className="about-link">TCG Guru</a>
    </div>
  )
}