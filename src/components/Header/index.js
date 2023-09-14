// Write your code here
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import Popup from 'reactjs-popup'
import './index.css'

import 'reactjs-popup/dist/index.css'

const Header = () => (
  <nav>
    <img
      src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
      alt="website logo"
      className="logo"
    />
    <div className="pop">
      <Popup
        model
        trigger={
          <button type="button">
            <GiHamburgerMenu />
          </button>
        }
        className="pop"
      >
        <div className="popup-container">
          <p>kkkd</p>
          <AiFillHome />
        </div>
      </Popup>
    </div>
  </nav>
)

export default Header
