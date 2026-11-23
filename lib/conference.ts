export type Speaker = { id: string; name: string; role: string; organization: string; bio: string; initials: string; linkedin?: string };
export type Slide = { id: string; eyebrow: string; title: string; body: string; highlights: string[] };
export type ConferenceSession = { id: string; time: string; duration: string; title: string; topic: string; room: string; speakerIds: string[]; slides: Slide[] };
export const speakers: Speaker[] = [
  { id: "speaker-1", name: "Guest Speaker One", role: "Keynote presenter", organization: "Details pending confirmation", initials: "GS", bio: "Official speaker biography will appear here once provided by the NBA-SBL event team." },
  { id: "speaker-2", name: "Guest Speaker Two", role: "Panel moderator", organization: "Details pending confirmation", initials: "GM", bio: "The confirmed moderator profile, credentials and professional links will appear here." },
  { id: "speaker-3", name: "Guest Speaker Three", role: "Panelist", organization: "Details pending confirmation", initials: "GP", bio: "The confirmed panelist biography and professional background will appear here." }
];
export const conferenceSessions: ConferenceSession[] = [
  { id: "opening", time: "09:00", duration: "45 min", title: "Opening plenary", topic: "Welcome & the future of business law", room: "Main auditorium", speakerIds: ["speaker-1"], slides: [
    { id:"opening-1", eyebrow:"NBA-SBL CONFERENCE · DEMO",title:"A connected conference experience",body:"Follow live presentation materials on your own device.",highlights:["Audio streaming","Speaker insights","Session-by-session agenda"] },
    { id:"opening-2",eyebrow:"OPENING PLENARY · DEMO",title:"An evolving legal landscape",body:"This presentation is sample content, not an official NBA-SBL deck.",highlights:["Innovation","Collaboration","Professional development"] },
    { id:"opening-3",eyebrow:"OPENING PLENARY · DEMO",title:"Continue the conversation",body:"Discover your next session, access presentation resources, and connect with fellow attendees.",highlights:["Explore sessions","Review materials","Stay connected"] }
  ] },
  { id: "innovation", time: "10:00", duration: "60 min", title: "Business law & innovation", topic: "Emerging ideas and a changing commercial landscape", room: "Main auditorium", speakerIds: ["speaker-2","speaker-3"], slides: [
    { id:"innovation-1",eyebrow:"PANEL SESSION · DEMO",title:"Business law & innovation",body:"How changing business models reshape legal practice.",highlights:["Digital commerce","New opportunities","Regulatory questions"] },
    { id:"innovation-2",eyebrow:"PANEL SESSION · DEMO",title:"Questions for tomorrow",body:"The materials shown here are placeholders awaiting official presentations.",highlights:["Adaptability","Responsible innovation","Cross-border practice"] }
  ] },
  { id: "network", time: "11:15", duration: "30 min", title: "Networking break", topic: "Meet participants and reconnect", room: "Networking lounge", speakerIds: [], slides: [
    { id:"network-1",eyebrow:"CONFERENCE · DEMO",title:"Networking break",body:"Explore the programme while the next session is prepared.",highlights:["Meet colleagues","Share ideas","Plan your afternoon"] }
  ] }
];
