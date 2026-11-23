import ConferenceExperience from "./conference-experience";
export const metadata = { title: "Conference experience | NBA-SBL" };
export default function ConferencePage() {
  return <ConferenceExperience audioUrl={process.env.NEXT_PUBLIC_CONFERENCE_AUDIO_URL || ""} />;
}
