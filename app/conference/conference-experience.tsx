"use client";
import { useState } from "react";
import Link from "next/link";
import { conferenceSessions, speakers } from "@/lib/conference";

export default function ConferenceExperience({ audioUrl }: { audioUrl: string }) {
  const [activeSessionId, setActiveSessionId] = useState(conferenceSessions[0].id);
  const [slideIndex, setSlideIndex] = useState(0);
  const [tab, setTab] = useState<"slides"|"speakers">("slides");
  const [showAgenda, setShowAgenda] = useState(true);
  const [audioError, setAudioError] = useState(false);
  const session = conferenceSessions.find(item => item.id === activeSessionId) || conferenceSessions[0];
  const slide = session.slides[slideIndex] || session.slides[0];
  const sessionSpeakers = session.speakerIds.map(id => speakers.find(s => s.id === id)).filter((speaker): speaker is (typeof speakers)[number] => Boolean(speaker));
  const selectSession = (id: string) => { setActiveSessionId(id); setSlideIndex(0); setTab("slides"); };
  return <main className="conference-page">
    <header className="conf-topbar"><div className="container conf-topbar-inner">
      <Link href="/" className="conf-logo"><span>SBL</span><strong>Conference hub</strong></Link>
      <div className="conf-top-actions"><span className="conf-preview">● Interactive preview</span><Link href="/" className="conf-back">← Events</Link></div>
    </div></header>
    <div className="container conf-body">
      <div className="conf-intro"><div><div className="conf-kicker">NBA-SBL · CONFERENCE EXPERIENCE</div><h1>Conference companion</h1><p>Follow presentations, explore speakers and keep up with the programme.</p></div><div className="conf-demo">Sample event content · No live event connected</div></div>
      <div className="conf-main">
        <div className="conf-primary">
          <section className="conf-session-title">
            <div className="conf-label">SELECTED SESSION · PREVIEW</div><h2>{session.title}</h2><p>{session.topic}</p><div className="conf-session-meta"><span>◷ {session.time} · {session.duration}</span><span>⌖ {session.room}</span></div>
          </section>
          <section className="audio-panel" aria-label="Conference audio player">
            <div className="audio-icon">♫</div><div className="audio-main"><div className="audio-heading">Conference audio</div><p>{audioUrl ? "Stream source configured. Press play to listen." : "Live audio is not connected yet. Add a stream URL in Vercel to enable playback."}</p>
              {audioUrl ? <audio controls preload="none" src={audioUrl} onError={() => setAudioError(true)} aria-label="Listen to conference audio">Your browser does not support HTML audio.</audio> : <div className="audio-unavailable">◌ Stream offline</div>}
              {audioError && <div className="audio-error" role="alert">Unable to play the configured stream. Check the stream URL, browser format support and CORS settings.</div>}
            </div><span className={audioUrl ? "audio-status ready":"audio-status"}>{audioUrl ? "SOURCE SET" : "OFFLINE"}</span>
          </section>
          <section className="conf-presentation">
            <div className="conf-section-head"><div><h3>Session materials</h3><p>Demo slides for exploring the presentation viewer</p></div><div className="conf-tabs" role="tablist" aria-label="Session materials"><button type="button" role="tab" aria-selected={tab==="slides"} onClick={() => setTab("slides")} className={tab==="slides"?"selected":""}>Slides</button><button type="button" role="tab" aria-selected={tab==="speakers"} onClick={() => setTab("speakers")} className={tab==="speakers"?"selected":""}>Presenters</button></div></div>
            {tab === "slides" ? <div role="tabpanel"><div className="slide-screen" aria-label={`Slide ${slideIndex+1}: ${slide.title}`}><div className="slide-top"><span>SBL<span className="slide-dot">.</span></span><span>{slide.eyebrow}</span></div><div className="slide-content"><div className="slide-divider"></div><h4>{slide.title}</h4><p>{slide.body}</p><div className="slide-highlights">{slide.highlights.map(x=><span key={x}>{x}</span>)}</div></div><div className="slide-bottom"><span>NBA-SBL · ILLUSTRATIVE MATERIAL</span><span>{String(slideIndex+1).padStart(2,"0")} / {String(session.slides.length).padStart(2,"0")}</span></div></div>
              <div className="slide-controls"><span>Slide {slideIndex+1} of {session.slides.length}</span><div><button type="button" onClick={() => setSlideIndex(i => Math.max(0,i-1))} disabled={slideIndex === 0} aria-label="Previous slide">← Previous</button><button type="button" onClick={() => setSlideIndex(i => Math.min(session.slides.length-1,i+1))} disabled={slideIndex === session.slides.length-1} aria-label="Next slide">Next →</button></div></div><p className="conf-hint">Slides are navigated locally in this prototype. Presenter-controlled synchronization requires a real-time backend in a later phase.</p>
            </div> : <div role="tabpanel" className="conf-speaker-grid">{sessionSpeakers.length ? sessionSpeakers.map(speaker=><article key={speaker.id} className="conf-speaker"><div className="speaker-avatar">{speaker.initials}</div><div><span className="speaker-tag">{speaker.role}</span><h4>{speaker.name}</h4><small>{speaker.organization}</small><p>{speaker.bio}</p>{speaker.linkedin && <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer">View LinkedIn ↗</a>}</div></article>) : <div className="conf-no-speaker">This session has no scheduled presenter.</div>}</div>}
          </section>
        </div>
        <aside className="conf-sidebar"><div className="conf-agenda-head"><div><div className="conf-label">YOUR PROGRAMME</div><h3>Session agenda</h3></div><button type="button" onClick={() => setShowAgenda(x=>!x)} aria-expanded={showAgenda}>{showAgenda?"Hide":"Show"}</button></div>
          {showAgenda && <div className="agenda-items">{conferenceSessions.map((item,i)=><button type="button" key={item.id} onClick={() => selectSession(item.id)} className={`agenda-item ${item.id===activeSessionId?"current":""}`} aria-current={item.id===activeSessionId?"true":undefined}><span className="agenda-time">{item.time}</span><div><span className="agenda-status">{item.id===activeSessionId?"VIEWING SESSION":`SESSION ${i+1}`}</span><strong>{item.title}</strong><small>{item.room} · {item.duration}</small></div><span className="agenda-arrow">↗</span></button>)}</div>}
          <div className="conf-sidebar-note"><strong>Speaker spotlight</strong>{sessionSpeakers.length ? sessionSpeakers.map(s=><div key={s.id} className="spotlight-line"><span>{s.initials}</span><div><b>{s.name}</b><small>{s.role}</small></div></div>) : <p>No speakers assigned to this session.</p>}<button type="button" onClick={()=>setTab("speakers")}>Explore presenter details →</button></div>
          <div className="conf-sidebar-note conf-up-next"><strong>Coming in later releases</strong><p>Check-in, notifications, quizzes, polls, live Q&A and downloadable files.</p></div>
        </aside>
      </div>
    </div>
    <footer><div className="container footer-inner"><strong>NBA-SBL · Conference hub</strong><span>Independent demonstration · Not an official NBA-SBL service</span></div></footer>
  </main>;
}
