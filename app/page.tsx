import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import CopyEmailButton from '@/components/CopyEmailButton'
import { profile } from '@/data/profile'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section id="about" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
                <Image
                  src="/profile.jpg"
                  alt={profile.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Hero Content */}
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
                {profile.name}
              </h1>
              <p className="text-xl text-gray-600 mb-4">{profile.title}</p>
              <p className="text-lg text-gray-700 mb-6 italic">{profile.tagline}</p>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                {profile.about}
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={profile.links.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV
                </a>
                {profile.links.googleScholar && (
                  <a
                    href={profile.links.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                  >
                    Google Scholar
                  </a>
                )}
                {profile.links.github && (
                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {profile.links.linkedin && (
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Research Interests Section */}
        <section id="research" className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Interests</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profile.interests.map((interest, index) => (
                <li
                  key={index}
                  className="flex items-start"
                >
                  <svg className="w-5 h-5 text-gray-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{interest}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Selected Projects & Research</h2>
            <div className="grid gap-6">
              {profile.projects.map((project, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {project.links && project.links.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                      {project.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-600 hover:text-gray-900 underline"
                        >
                          {link.label} →
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Publications</h2>
            <div className="space-y-6">
              {profile.publications.map((pub, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                  <p className="text-sm text-gray-600 mb-1">{pub.authors}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-gray-700 mb-3">
                    <span className="italic">{pub.venue}</span>, {pub.year}
                  </p>
                  {pub.links && pub.links.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                      {pub.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-600 hover:text-gray-900 underline"
                        >
                          [{link.label}]
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

{/* News Section */}
{profile.news && profile.news.length > 0 && (
  <section className="py-16">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header: revert to original Tailwind color */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        News & Updates
      </h2>

      {/* Force LIGHT theme only for the list */}
      <ul
        data-theme="light"
        className="list bg-base-100 rounded-box shadow-md divide-y divide-gray-200"
      >
        {profile.news.map((item, index) => (
          <li key={index} className="list-row p-6 items-start">
            
            {/* Date column */}
            <div className="text-lg font-semibold text-gray-800 whitespace-nowrap">
              {item.date}
            </div>

            {/* News column */}
            <div className="list-col-grow text-gray-700">
              {item.text}
            </div>

          </li>
        ))}
      </ul>
    </div>
  </section>
)}




        {/* Contact Section */}
        <section id="contact" className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact</h2>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                Feel free to reach out if you'd like to discuss research, collaboration opportunities, or just chat!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <a
                  href={`mailto:${profile.email}`}
                  className="text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors"
                >
                  {profile.email}
                </a>
                <CopyEmailButton email={profile.email} />
              </div>
              {profile.location && (
                <p className="text-gray-600 mt-4">
                  📍 {profile.location}
                </p>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} {profile.name}. Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </footer>
    </>
  )
}
