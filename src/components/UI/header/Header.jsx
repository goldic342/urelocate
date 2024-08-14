import cs from './Header.module.css'

const Header = () => {
  return (
    <header className={cs.header}>
        <h1 className={cs.header_h1}>URELOCATE</h1>
        <ul className={cs.header_list}>
            <li>Form</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>
    </header>
)
}

export default Header
