import "../styling/about.css"
export default function About() {
  return (
    <div className="about-container">
      <p className="about-header">Clone of Pokémon TCG Guru</p>
      <p className="about-p">Check out the original site by Andrew Backes</p>
      <a href="https://pokemontcg.guru" target="blank" className="about-link">TCG Guru</a>
    </div>
  )
}