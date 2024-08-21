import cs from './Input.module.css'
import PropTypes from 'prop-types'

const Input = ({ error, ...props }) => {
  return (
    <>
      <input {...props} className={`${cs.input} ${error ? cs.error : ''}`} />
      {error && <p className={cs.errorMessage}>{error}</p>}
    </>
  )
}

Input.propTypes = {
  error: PropTypes.string,
}

export default Input
