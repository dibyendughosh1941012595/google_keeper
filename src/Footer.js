import React from 'react'
import './footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <div className="footer">
      <p>Copyright ⓒ {currentYear}</p>
    </div>
  )
}

export default Footer
