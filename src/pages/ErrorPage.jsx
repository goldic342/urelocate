import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div>
        <h1>404 Page Not Found</h1>
        <Link to={"/"}>go home</Link>
    </div>
  )
}

export default ErrorPage
