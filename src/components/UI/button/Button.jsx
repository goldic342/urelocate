import { PropTypes } from 'prop-types'
import  cs from './Button.module.css'

const Button = ({ children, ...props }) => {
  return <button {...props} className={cs.button}>{children}</button>
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Button
