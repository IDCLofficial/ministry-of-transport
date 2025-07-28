import Image from "next/image";
import Link from "next/link";

const events = [
  {
    date: "OCTOBER 29, 2025",
    location: "GOVERNMENT HOUSE, OWERRI",
    title: "ISTMA Launch & Stakeholders Forum",
    description: "Official launch of the Imo State Traffic Management Authority (ISTMA) with comprehensive stakeholder engagement and operational guidelines presentation.",
    img: "/images/commisioner.png",
    details: `Led by the Commissioner for Transport alongside ISTMA officials and transport unions, this forum established operational protocols, compliance requirements, and collaborative frameworks for effective traffic management across Imo State.`,
    dateString: "2025-07-29T09:00:00",
  },
  {
    date: "JUNE 15, 2025",
    location: "ROCKVIEW HOTEL, OWERRI",
    title: "Transport Operators Compliance Workshop",
    description: "Training session for commercial vehicle operators, park managers, and transport unions on new regulatory requirements and safety standards.",
    img: "/images/nurtw.png",
    details: `The Permanent Secretary led the workshop, discussing new compliance frameworks, digital ticketing systems, and safety protocols. Participants agreed on implementation timelines for enhanced transport regulation and service delivery.`,
    dateString: "2025-06-15T10:00:00",
  },
  {
    date: "MAY 27, 2025",
    location: "GOVERNMENT HOUSE, OWERRI",
    title: "Road Safety Awareness Campaign Launch",
    description: "Statewide launch of road safety awareness campaign in collaboration with FRSC, focusing on responsible driving and traffic law compliance.",
    img: "/images/frsc.png",
    details: `Commissioner and FRSC officials led the campaign themed "Safe Roads, Safe Lives." The ministry distributed safety materials, conducted demonstrations, and established community engagement programs for road safety education.`,
    dateString: "2025-05-27T14:00:00",
  },
];


function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export default function EventsListSection() {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Upcoming Events</h2>
      <div className="flex flex-col gap-8">
        {events.map((event, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-6 items-center border-b pb-8 last:border-b-0">
            <div className="w-full md:w-64 h-40 relative rounded overflow-hidden flex-shrink-0">
              <Image src={event.img} alt={event.title} fill className="object-cover" />
            </div>
            <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-2 text-gray-500 text-xs mb-1">
                  <span>{event.date}</span>
                  <span className="hidden md:inline">|</span>
                  <span>{event.location}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                <p className="text-gray-700 text-sm mb-2">{event.description}</p>
              </div>
              <div className="flex justify-end md:justify-center">
                <Link href={`/events/${slugify(event.title)}`} className="border border-green-600 text-green-700 px-4 py-2 rounded font-semibold hover:bg-green-50 transition">More Information</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 