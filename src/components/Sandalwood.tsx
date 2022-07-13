import React from 'react'
import { Link } from 'react-router-dom'

function Sandalwood() {
  return (
    <div className="fade">
    <div className="lavender">
      <h1 className="h1-header">Sandalwood benefits</h1>
      <p>
        Sandalwood essential oil is one of the most popular and versatile
        essential oils used in aromatherapy. Distilled from the plant
        Lavandula angustifolia, the oil promotes relaxation and is believed to
        treat anxiety, fungal infections, allergies, depression, insomnia,
        eczema, nausea, and menstrual cramps
      </p>

      <h1 className="h1-header">Side effects</h1>
      <p>
        Sandalwood essential oil may cause skin irritation or an allergic
        reaction in some individuals. If you experience nausea, vomiting, or a
        headache after using lavender, discontinue use immediately.
      </p>
      <h1 className="h1-header">Special precautions </h1>
      <p>
        There are some precautions you should take if you are taking any
        prescription medications, pregnant or breastfeeding. Don’t apply
        essential oils directly to your skin. Always use a carrier oil to
        dilute the oils. Topical use: diffuser or humidifier
      </p>
    </div>
    <Link className="signup-signin" to={`/store`} >
      {/* <button>{userEmail}</button> */}
      <input
        type={"submit"}
        value={" back to shopping"}
        className="signup-link"
      />
    </Link>
  </div>
  )
}

export default Sandalwood