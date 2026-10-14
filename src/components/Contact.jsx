import { useState } from 'react'
import Section from './Section.jsx'
import ExtLink from './ExtLink.jsx'
import { profile } from '../data/content.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // No backend and no API keys: the form opens the visitor's email app with the message filled in.
  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <Section
      id="contact"
      title="Contact"
      intro="I'm looking for internships and entry-level roles. Send me a note."
    >
      <div className="contact-grid">
        <ul className="contact-list">
          <li><span className="note">Email</span><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
          <li><span className="note">Phone</span><a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a></li>
          <li><span className="note">GitHub</span><ExtLink href={profile.links.github} label="github.com/siddheshwari" /></li>
          <li><span className="note">LinkedIn</span><ExtLink href={profile.links.linkedin} label="LinkedIn profile" missing="[LinkedIn URL]" /></li>
          <li><span className="note">CodeChef</span><ExtLink href={profile.links.codechef} label="CodeChef profile" missing="[CodeChef URL]" /></li>
        </ul>

        <form className="card form" onSubmit={submit}>
          <label>
            Your name
            <input name="name" value={form.name} onChange={update} required autoComplete="name" />
          </label>
          <label>
            Your email
            <input name="email" type="email" value={form.email} onChange={update} required autoComplete="email" />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" value={form.message} onChange={update} required />
          </label>
          <button className="btn btn-primary" type="submit">Open in email app</button>
          <p className="muted form-note">This opens your email app with the message filled in.</p>
        </form>
      </div>
    </Section>
  )
}
