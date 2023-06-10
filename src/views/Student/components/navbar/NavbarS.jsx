import "./navbar.scss";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';


const NavbarS = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
          <p></p>
        <div className="items">
          <div className="item">
            <AccountCircleOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <MailOutlineOutlinedIcon className="icon"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarS;
