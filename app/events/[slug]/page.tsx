import Link from "next/link";
import { notFound } from "next/navigation";
import { events } from "@/lib/events";

export function generateStaticParams() {
  return events.map(event => ({ slug: event.slug }));
}
export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = events.find(item => item.slug === slug);
  if (!event) notFound();
  return <main><header className="site-header"><div className="container header-inner"><Link className="brand" href="/"><span className="brand-mark">SBL</span><span>NBA <strong>Section on Business Law</strong></span></Link><Link href="/" className="back-link">← All events</Link></div></header>
    <section className="detail-hero"><div className="container"><span className="eyebrow">{event.category.toUpperCase()}</span><h1>{event.title}</h1><p>{event.description}</p><div className="detail-meta"><span>◷ {event.date}</span><span>⌖ {event.venue}</span></div></div></section>
    <section className="section"><div className="container"><Link href="/conference" className="btn btn-primary" style={{marginBottom:28}}>Open interactive conference hub →</Link></div><div className="container detail-layout"><div><div className="eyebrow dark">EVENT AGENDA</div><h2>Sessions</h2>{event.sessions.length ? <div className="session-list">{event.sessions.map((s,i) => <div className="session" key={i}><span>{s.time}</span><div><h3>{s.title}</h3><p>{s.speaker} · {s.room}</p></div></div>)}</div> : <p className="empty">The programme will appear here when sessions are announced.</p>}</div><aside className="aside-card"><h3>Coming soon</h3><p>Sign-in, QR check-in, live audio, slides, quizzes and attendee networking are planned for future releases.</p><span className="aside-tag">Prototype · No registration yet</span></aside></div></section>
    <footer><div className="container footer-inner"><strong>NBA-SBL · Digital events</strong><span>Independent product prototype — not an official NBA-SBL service.</span></div></footer>
  </main>;
}
