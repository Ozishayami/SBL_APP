export type Session = { time: string; title: string; speaker: string; room: string };
export type SblEvent = {
  slug: string; title: string; category: string; date: string; venue: string;
  description: string; status: "Upcoming" | "Past"; sessions: Session[];
};
export const events: SblEvent[] = [
  {
    slug: "annual-business-law-conference",
    title: "Annual Business Law Conference",
    category: "Flagship conference",
    date: "Date to be announced",
    venue: "Venue to be announced",
    description: "Explore conference sessions, presentation resources, attendee connections and participation tools in one place.",
    status: "Upcoming",
    sessions: [
      { time: "TBA", title: "Opening plenary", speaker: "Speaker to be announced", room: "Main hall" },
      { time: "TBA", title: "Business law and innovation", speaker: "Speaker to be announced", room: "Main hall" },
    ],
  },
  {
    slug: "sbl-professional-development",
    title: "SBL Professional Development Series",
    category: "Learning & development",
    date: "Date to be announced",
    venue: "Online / venue to be announced",
    description: "A space for upcoming SBL learning programmes and member engagement.",
    status: "Upcoming",
    sessions: [],
  },
];
