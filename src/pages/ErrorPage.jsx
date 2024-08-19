import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div className='error'>
      <div className="error-wrapper">
        <h1>404 Page Not Found</h1>
        <p className="error-link">
          Go to <Link to={"/"}>home</Link>
        </p>
      </div>
    </div>
  )
}

export default ErrorPage
