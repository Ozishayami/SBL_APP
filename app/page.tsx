import Link from "next/link";
import { events } from "@/lib/events";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/" aria-label="NBA-SBL home"><span className="brand-mark">SBL</span><span>NBA <strong>Section on Business Law</strong></span></Link>
          <nav aria-label="Main navigation"><a href="#events">Events</a><a href="#experience">Experience</a><span className="nav-pill">Preview</span></nav>
        </div>
      </header>
      <section className="hero">
        <div className="container hero-grid">
          <div><div className="eyebrow"><span className="dot" /> THE NBA-SBL DIGITAL EXPERIENCE</div>
            <h1>Every SBL event.<br /><em>One connected experience.</em></h1>
            <p>Discover upcoming programmes, explore sessions, access conference resources and connect with the business law community.</p>
            <div className="hero-actions"><Link className="btn btn-primary" href="/conference">Open conference hub <span aria-hidden="true">↗</span></Link><a className="btn btn-outline" href="#experience">Explore features</a></div>
            <p className="subnote">Early product preview · Event details shown are illustrative placeholders.</p>
          </div>
          <div className="hero-panel">
            <div className="panel-label">CONFERENCE EXPERIENCE <span className="live-dot">● PROTOTYPE</span></div>
            <div className="panel-headline">Everything you need, in the room and beyond.</div>
            <div className="panel-tiles"><div><span>◉</span><strong>Live audio</strong><small>Session listening</small></div><div><span>▤</span><strong>Slides</strong><small>Presentation access</small></div><div><span>▦</span><strong>Check-in</strong><small>Digital attendance</small></div><div><span>♧</span><strong>Networking</strong><small>Professional connections</small></div></div>
            <div className="panel-footer">Designed for NBA-SBL members and conference attendees <span>↗</span></div>
          </div>
        </div>
      </section>
      <section className="section" id="events"><div className="container">
        <div className="section-top"><div><div className="eyebrow dark">PROGRAMMES & CONFERENCES</div><h2>Explore SBL events</h2><p>One profile for events throughout the year.</p></div><span className="count">{events.length} event placeholders</span></div>
        <div className="event-grid">{events.map(event => <Link href={`/events/${event.slug}`} key={event.slug} className="event-card"><div className="event-art"><span className="event-badge">{event.category}</span><span className="event-monogram">SBL<span>.</span></span></div><div className="event-body"><span className="status">◉ {event.status}</span><h3>{event.title}</h3><p>◷ {event.date}</p><p>⌖ {event.venue}</p><div className="event-link">View event details <span>↗</span></div></div></Link>)}</div>
      </div></section>
      <section className="section features" id="experience"><div className="container"><div className="eyebrow dark">THE EXPERIENCE</div><h2>Built for meaningful participation.</h2><div className="feature-grid">{[
        ["01","Follow the programme","Browse sessions, speakers and presentation resources."],
        ["02","Join the conversation","Engage in live quizzes, polls and moderated Q&A."],
        ["03","Build your network","Choose whether your professional profile is discoverable."],
        ["04","Stay in the loop","Receive timely reminders and programme updates."],
      ].map(([number,title,description])=><div className="feature" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></div>)}</div></div></section>
      <footer><div className="container footer-inner"><strong>NBA-SBL · Digital events</strong><span>Independent product prototype — not an official NBA-SBL service.</span></div></footer>
    </main>
  );
}
