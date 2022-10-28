import './index.scss'
import React from 'react'
const Footer = () => {
  const currentYear = new Date().getFullYear()
  const yearTxt = currentYear === 2022 ? '2022' : '2022 - ' + currentYear
  return (
    <footer className=" footers">
      © {yearTxt} All Rights Reserved - Developed by Muhammad Aman
    </footer>
  )
}

export default Footer
