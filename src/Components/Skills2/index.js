import React from 'react'
import './index.scss'
import Logo1 from '../../assets/images/html.png'
import Logo2 from '../../assets/images/css.png'
import Logo3 from '../../assets/images/js.png'
import Logo4 from '../../assets/images/react.png'
import Logo5 from '../../assets/images/node.png'
import Logo6 from '../../assets/images/mongodb.png'
import Logo7 from '../../assets/images/bs.png'
import Logo8 from '../../assets/images/sass.png'
import Logo9 from '../../assets/images/figma.png'
import Logo10 from '../../assets/images/c.png'
import Logo11 from '../../assets/images/ps.png'
import Logo12 from '../../assets/images/Ai.png'

const SkillsCard = () => {
  return (
    <>
      <div className="container-skillCard">
        <div className="container-card">
          <div>
            <img src={Logo1} className="container-img" alt="" srcset="" />
          </div>
        </div>
        <div className="container-card">
          <div>
            <img src={Logo2} className="container-img" alt="" srcset="" />
          </div>
        </div>
        <div className="container-card">
          <div>
            <img src={Logo3} className="container-img" alt="" srcset="" />
          </div>
        </div>
        <div className="container-card">
          <div>
            <img src={Logo4} className="container-img" alt="" srcset="" />
          </div>
        </div>
        <div className="container-card">
          <div>
            <img src={Logo5} className="container-img" alt="" srcset="" />
          </div>
        </div>{' '}
        <div className="container-card">
          <div>
            <img src={Logo6} className="container-img" alt="" srcset="" />
          </div>
        </div>
        <div className="container-card">
          <div>
            <img src={Logo7} className="container-img" alt="" srcset="" />
          </div>
        </div>
        <div className="container-card">
          <div>
            <img src={Logo8} className="container-img" alt="" srcset="" />
          </div>
        </div>{' '}
        <div className="container-card">
          <div>
            <img src={Logo9} className="container-img" alt="" srcset="" />
          </div>
        </div>
        <div className="container-card">
          <div>
            <img src={Logo10} className="container-img" alt="" srcset="" />
          </div>
        </div>
        <div className="container-card">
          <div>
            <img src={Logo11} className="container-img" alt="" srcset="" />
          </div>
        </div>{' '}
        <div className="container-card">
          <div>
            <img src={Logo12} className="container-img" alt="" srcset="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default SkillsCard
