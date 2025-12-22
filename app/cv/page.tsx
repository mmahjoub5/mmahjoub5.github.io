import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { profile, CV } from '@/data/profile'

export const metadata = {
  title: `CV | ${profile.name}`,
  description: `Curriculum Vitae of ${profile.name}`,
}

interface CVPageContentProps {
  profile: CV;
}

function CVPageContent({ profile }: CVPageContentProps) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header with Download Button */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Curriculum Vitae
              </h1>
              <p className="text-xl text-gray-600">{profile.name}</p>
            </div>
            <a
              href={profile.links.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </a>
          </div>

          {/* Contact Information */}
          <section className="mb-12 pb-8 border-b border-gray-200">
            <div className="flex flex-wrap gap-6 text-gray-700">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${profile.email}`} className="hover:text-gray-900">
                  {profile.email}
                </a>
              </div>
              {profile.location && (
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {profile.location}
                </div>
              )}
            </div>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-2 h-8 bg-gray-900 mr-3"></span>
              Education
            </h2>
            <div className="space-y-6">
              {profile.education.map((edu, index) => (
                <div key={index} className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-x-4 gap-y-2">
                  <div className="pl-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-700 mb-2">{edu.institution}</p>
                    {edu.details && edu.details.length > 0 && (
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {edu.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="pl-5 sm:pl-0 sm:text-right sm:pt-0">
                    <span className="text-sm text-gray-600 font-medium whitespace-nowrap">
                      {edu.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-2 h-8 bg-gray-900 mr-3"></span>
              Experience
            </h2>
            <div className="space-y-6">
              {profile.experience.map((exp, index) => (
                <div key={index} className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-x-4 gap-y-2">
                  <div className="pl-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-gray-700 mb-2">{exp.organization}</p>
                    {exp.details && exp.details.length > 0 && (
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {exp.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="pl-5 sm:pl-0 sm:text-right sm:pt-0">
                    <span className="text-sm text-gray-600 font-medium whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Publications */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-2 h-8 bg-gray-900 mr-3"></span>
              Publications
            </h2>
            <div className="space-y-6">
              {profile.publications.map((pub, index) => (
                <div key={index} className="pl-5">
                  <p className="text-sm text-gray-600 mb-1">{pub.authors}</p>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-gray-700 mb-2">
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
          </section>

          {/* Selected Projects */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-2 h-8 bg-gray-900 mr-3"></span>
              Selected Projects
            </h2>
            <div className="space-y-6">
              {profile.projects.map((project, index) => (
                <div key={index} className="pl-5">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-2 leading-relaxed">
                    {project.description}
                  </p>
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
          </section>

          {/* Skills */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-2 h-8 bg-gray-900 mr-3"></span>
              Skills
            </h2>
            <div className="pl-5">
              <ul className="space-y-2 text-gray-700">
                {profile.skills.map((skill, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
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

export default function CVPage() {
  return <CVPageContent profile={profile} />
}
