import cs from './Header.module.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={cs.header}>
        <h1 className={cs.header_h1}>URELOCATE</h1>
        <ul className={cs.header_list}>
           {/* TODO: Add scroll to form */}
            <li>Form</li>
            <li><Link to={'/about'}>About us</Link></li>
            <li><Link to={'/contacts'}>Contacts</Link></li>
        </ul>
    </header>
)
}

export default Header
