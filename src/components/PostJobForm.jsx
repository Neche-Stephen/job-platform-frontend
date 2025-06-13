import { useState } from 'react'

export default function PostJobForm({ onBack }) {
  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    location: 'Southeast Nigeria',
    employmentType: 'Full-time',
    remote: false,
    category: 'Frontend',
    salaryMin: '',
    salaryMax: '',
    description: '',
    requirements: '',
    deadline: '',
    instructions: '',
    logo: null,
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked })
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required'
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required'
    if (!formData.description.trim()) newErrors.description = 'Job description is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validation = validate()
    if (Object.keys(validation).length) {
      setErrors(validation)
      return
    }
    setErrors({})
    // Simulate submission
    console.log('Job data:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Job Posted Successfully!</h2>
        <button
          className="bg-black text-yellow-400 px-4 py-2 rounded"
          onClick={onBack}
        >
          Back to Home
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Post a Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Job Title *</label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className="w-full p-2 border rounded text-black"
          />
          {errors.jobTitle && <p className="text-red-500 text-sm">{errors.jobTitle}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">Company Name *</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full p-2 border rounded text-black"
          />
          {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded text-black"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Employment Type</label>
          <select
            name="employmentType"
            value={formData.employmentType}
            onChange={handleChange}
            className="w-full p-2 border rounded text-black"
          >
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
            <option>Internship</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="remote"
            checked={formData.remote}
            onChange={handleChange}
            id="remote"
          />
          <label htmlFor="remote" className="font-medium">Remote Option</label>
        </div>

        <div>
          <label className="block mb-1 font-medium">Job Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded text-black"
          >
            <option>Frontend</option>
            <option>Backend</option>
            <option>Design</option>
            <option>Product Management</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Salary Min</label>
            <input
              type="number"
              name="salaryMin"
              value={formData.salaryMin}
              onChange={handleChange}
              className="w-full p-2 border rounded text-black"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Salary Max</label>
            <input
              type="number"
              name="salaryMax"
              value={formData.salaryMax}
              onChange={handleChange}
              className="w-full p-2 border rounded text-black"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Job Description *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border rounded text-black"
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">Requirements</label>
          <textarea
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            rows="3"
            className="w-full p-2 border rounded text-black"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Application Deadline</label>
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="w-full p-2 border rounded text-black"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Application Instructions</label>
          <input
            type="text"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            className="w-full p-2 border rounded text-black"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Company Logo</label>
          <input
            type="file"
            name="logo"
            accept="image/*"
            onChange={handleChange}
            className="w-full p-2 text-black"
          />
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            className="border border-yellow-400 text-yellow-400 px-4 py-2 rounded"
            onClick={onBack}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-black text-yellow-400 px-4 py-2 rounded"
          >
            Submit Job
          </button>
        </div>
      </form>
    </div>
  )
}
