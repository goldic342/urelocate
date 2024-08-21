import { useState } from 'react'
import Input from './UI/input/Input'
import Button from './UI/button/Button'

const Form = () => {
  const [formData, setFormData] = useState({
    location: '',
    techStack: '',
    tools: '',
  })
  const [errors, setErrors] = useState({
    location: '',
    techStack: '',
    tools: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validate()

    if (Object.keys(validationErrors).length !== 0) {
      setErrors(validationErrors)
    } else {
      // Send form data to backend
      console.log('send data to backend', formData)
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.location) newErrors.location = 'Location is required'
    if (!formData.techStack) newErrors.techStack = 'Tech Stack is required'
    if (!formData.tools) newErrors.tools = 'Tools is required'

    return newErrors
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  // TODO: When rewriting to MUI change input type to select, add fancy country select
  return (
    <section className="form-section">
      <h1 className="form-h1">Complete the form</h1>
      <div className="form-form">
        <div className="form-form-inputs">
          <Input
            name="location"
            onChange={handleChange}
            error={errors.location}
          />
          <Input
            name="techStack"
            onChange={handleChange}
            error={errors.techStack}
          />
          <Input name="tools" onChange={handleChange} error={errors.tools} />
        </div>

        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </section>
  )
}

export default Form
