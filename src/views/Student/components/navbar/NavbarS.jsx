import "./navbar.scss";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PlagiarismOutlinedIcon from '@mui/icons-material/PlagiarismOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { Link } from 'react-router-dom';


const NavbarS = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
          <p></p>
        <div className="items">
          <div className="item">
          <Link to="/perfil" className='link'>
            <AccountCircleOutlinedIcon className="icon"/>
          </Link>
          </div>
          <div className="item">
            <MailOutlineOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <PlagiarismOutlinedIcon  className="icon"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarS;
