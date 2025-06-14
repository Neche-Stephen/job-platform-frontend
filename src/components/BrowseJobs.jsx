import { useState } from 'react'

const jobData = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'EnuguTech',
    location: 'Enugu',
    employmentType: 'Full-time',
    remote: true,
    category: 'Frontend',
    postedDate: '2024-06-01',
    deadline: '2024-07-01'
  },
  {
    id: 2,
    title: 'Backend Engineer',
    company: 'Aba Solutions',
    location: 'Abia',
    employmentType: 'Contract',
    remote: false,
    category: 'Backend',
    postedDate: '2024-06-05',
    deadline: '2024-06-25'
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    company: 'Owerri Labs',
    location: 'Imo',
    employmentType: 'Part-time',
    remote: true,
    category: 'Design',
    postedDate: '2024-05-28',
    deadline: '2024-06-20'
  },
  {
    id: 4,
    title: 'Product Manager',
    company: 'Awka Works',
    location: 'Anambra',
    employmentType: 'Full-time',
    remote: false,
    category: 'Product Management',
    postedDate: '2024-06-03',
    deadline: '2024-07-10'
  },
  {
    id: 5,
    title: 'Data Analyst',
    company: 'Uyo Analytics',
    location: 'Akwa Ibom',
    employmentType: 'Full-time',
    remote: true,
    category: 'Data',
    postedDate: '2024-05-20',
    deadline: '2024-06-30'
  },
  {
    id: 6,
    title: 'Mobile Developer',
    company: 'Asaba Tech',
    location: 'Delta',
    employmentType: 'Internship',
    remote: false,
    category: 'Mobile',
    postedDate: '2024-05-25',
    deadline: '2024-06-28'
  },
  {
    id: 7,
    title: 'QA Engineer',
    company: 'Calabar Soft',
    location: 'Cross River',
    employmentType: 'Contract',
    remote: true,
    category: 'Testing',
    postedDate: '2024-06-07',
    deadline: '2024-07-15'
  },
  {
    id: 8,
    title: 'DevOps Engineer',
    company: 'Port Harcourt Devs',
    location: 'Rivers',
    employmentType: 'Full-time',
    remote: false,
    category: 'DevOps',
    postedDate: '2024-06-02',
    deadline: '2024-06-30'
  }
]

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString()
}

export default function BrowseJobs() {
  const [filters, setFilters] = useState({
    keyword: '',
    category: '',
    employmentType: '',
    remote: '',
    location: '',
    sort: 'Newest'
  })
  const [page, setPage] = useState(1)
  const jobsPerPage = 5

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value })
    setPage(1)
  }

  const filtered = jobData.filter((job) => {
    const keyword = filters.keyword.toLowerCase()
    const matchesKeyword =
      job.title.toLowerCase().includes(keyword) ||
      job.company.toLowerCase().includes(keyword)
    const matchesCategory =
      filters.category === '' || job.category === filters.category
    const matchesEmployment =
      filters.employmentType === '' ||
      job.employmentType === filters.employmentType
    const matchesRemote =
      filters.remote === '' ||
      (filters.remote === 'Yes' ? job.remote : !job.remote)
    const matchesLocation =
      filters.location === '' ||
      job.location.toLowerCase().includes(filters.location.toLowerCase())
    return (
      matchesKeyword &&
      matchesCategory &&
      matchesEmployment &&
      matchesRemote &&
      matchesLocation
    )
  })

  const sorted = [...filtered].sort((a, b) => {
    if (filters.sort === 'Newest') {
      return new Date(b.postedDate) - new Date(a.postedDate)
    }
    if (filters.sort === 'Oldest') {
      return new Date(a.postedDate) - new Date(b.postedDate)
    }
    if (filters.sort === 'Deadline Soonest') {
      return new Date(a.deadline) - new Date(b.deadline)
    }
    return 0
  })

  const totalPages = Math.ceil(sorted.length / jobsPerPage)
  const displayed = sorted.slice((page - 1) * jobsPerPage, page * jobsPerPage)

  return (
    <div className="bg-white text-black p-4">
      <h2 className="text-2xl font-bold mb-4">Browse Jobs</h2>
      <div className="md:flex md:space-x-4">
        <aside className="md:w-1/4 space-y-4 mb-4">
          <div>
            <label htmlFor="keyword" className="block font-medium mb-1">
              Keyword
            </label>
            <input
              id="keyword"
              name="keyword"
              type="text"
              value={filters.keyword}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="category" className="block font-medium mb-1">
              Job Category
            </label>
            <select
              id="category"
              name="category"
              value={filters.category}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">All</option>
              <option>Frontend</option>
              <option>Backend</option>
              <option>Design</option>
              <option>Product Management</option>
              <option>Data</option>
              <option>Mobile</option>
              <option>Testing</option>
              <option>DevOps</option>
            </select>
          </div>
          <div>
            <label htmlFor="employmentType" className="block font-medium mb-1">
              Employment Type
            </label>
            <select
              id="employmentType"
              name="employmentType"
              value={filters.employmentType}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">All</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Internship</option>
            </select>
          </div>
          <div>
            <label htmlFor="remote" className="block font-medium mb-1">
              Remote Option
            </label>
            <select
              id="remote"
              name="remote"
              value={filters.remote}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">All</option>
              <option value="Yes">Remote</option>
              <option value="No">Onsite</option>
            </select>
          </div>
          <div>
            <label htmlFor="location" className="block font-medium mb-1">
              Location
            </label>
            <input
              id="location"
              name="location"
              type="text"
              value={filters.location}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="sort" className="block font-medium mb-1">
              Sort By
            </label>
            <select
              id="sort"
              name="sort"
              value={filters.sort}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option>Newest</option>
              <option>Oldest</option>
              <option>Deadline Soonest</option>
            </select>
          </div>
        </aside>
        <section className="flex-1">
          {displayed.length === 0 ? (
            <p className="text-center py-10">No jobs match your search.</p>
          ) : (
            <ul className="space-y-4">
              {displayed.map((job) => (
                <li key={job.id} className="border p-4 rounded">
                  <h3 className="text-lg font-bold">{job.title}</h3>
                  <p className="text-sm mb-2">
                    {job.company} - {job.location}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2 text-xs">
                    <span className="bg-gray-200 px-2 py-1 rounded">
                      {job.category}
                    </span>
                    {job.remote && (
                      <span className="bg-gray-200 px-2 py-1 rounded">Remote</span>
                    )}
                    <span className="bg-gray-200 px-2 py-1 rounded">
                      {job.employmentType}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">
                    Posted {formatDate(job.postedDate)}
                  </p>
                  <button className="text-yellow-400 hover:underline">
                    View Details
                  </button>
                </li>
              ))}
            </ul>
          )}
          {totalPages > 1 && (
            <div className="flex justify-center mt-4 space-x-4">
              <button
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Prev
              </button>
              <span className="self-center">
                {page} / {totalPages}
              </span>
              <button
                disabled={page === totalPages}
                onClick={() => setPage((p) => p + 1)}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
