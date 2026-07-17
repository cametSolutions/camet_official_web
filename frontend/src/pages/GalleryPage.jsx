import { useState, useMemo } from "react";

/* ============================================================
   Team Gallery — React component
   Usage: <TeamGallery /> — drop it anywhere in your app.
   Tailwind core utility classes only (no custom config needed).
   ============================================================ */

// ---- Category definitions: id, label, accent color ----
const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "camp", label: "Camp", color: "#5AA07E" },
  { id: "incidents", label: "Incidents", color: "#D96A4B" },
  { id: "lunch", label: "Team Lunch & Meetings", color: "#E8A33D" },
  { id: "achievements", label: "Achievements", color: "#4B8FE0" },
  { id: "trip", label: "Annual Trip", color: "#B673D6" },
  { id: "christmas", label: "Christmas", color: "#E0526B" },
];

// ---- Sample items. Replace `img` with real photo URLs and edit captions freely. ----
const ITEMS = [
  { cat: "camp", title: "First night around the fire", date: "Mar 2025", img: "https://picsum.photos/seed/camp1/500/620" },
  { cat: "camp", title: "Tent-pitching relay", date: "Mar 2025", img: "https://picsum.photos/seed/camp2/500/640" },
  { cat: "camp", title: "Morning trail, whole crew", date: "Mar 2025", img: "https://picsum.photos/seed/camp3/500/600" },
  { cat: "camp", title: "Campfire stories", date: "Mar 2025", img: "https://picsum.photos/seed/camp4/500/660" },

  { cat: "incidents", title: "The projector that wouldn't start", date: "Jan 2025", img: "https://picsum.photos/seed/inc1/500/630" },
  { cat: "incidents", title: "Flood in the server room", date: "Feb 2025", img: "https://picsum.photos/seed/inc2/500/600" },
  { cat: "incidents", title: "Fire drill, actual fire", date: "Apr 2025", img: "https://picsum.photos/seed/inc3/500/650" },

  { cat: "lunch", title: "Friday standup, extended edition", date: "Weekly", img: "https://picsum.photos/seed/lunch1/500/610" },
  { cat: "lunch", title: "Biryani day", date: "May 2025", img: "https://picsum.photos/seed/lunch2/500/640" },
  { cat: "lunch", title: "Planning over coffee", date: "Jun 2025", img: "https://picsum.photos/seed/lunch3/500/600" },
  { cat: "lunch", title: "All-hands, cake included", date: "Jun 2025", img: "https://picsum.photos/seed/lunch4/500/630" },

  { cat: "achievements", title: "Given: Employee of the Quarter", date: "Q1 2025", img: "https://picsum.photos/seed/ach1/500/650" },
  { cat: "achievements", title: "Taken: certification, finally", date: "Feb 2025", img: "https://picsum.photos/seed/ach2/500/610" },
  { cat: "achievements", title: "Given: 5-year service award", date: "Mar 2025", img: "https://picsum.photos/seed/ach3/500/640" },
  { cat: "achievements", title: "Taken: top performer badge", date: "May 2025", img: "https://picsum.photos/seed/ach4/500/600" },

  { cat: "trip", title: "Departure, still half asleep", date: "Oct 2025", img: "https://picsum.photos/seed/trip1/500/620" },
  { cat: "trip", title: "Beach day, whole company", date: "Oct 2025", img: "https://picsum.photos/seed/trip2/500/660" },
  { cat: "trip", title: "The hike nobody trained for", date: "Oct 2025", img: "https://picsum.photos/seed/trip3/500/600" },
  { cat: "trip", title: "Last night, karaoke", date: "Oct 2025", img: "https://picsum.photos/seed/trip4/500/640" },

  { cat: "christmas", title: "Secret Santa reveal", date: "Dec 2024", img: "https://picsum.photos/seed/xmas1/500/610" },
  { cat: "christmas", title: "Ugly sweater contest", date: "Dec 2024", img: "https://picsum.photos/seed/xmas2/500/650" },
  { cat: "christmas", title: "Office decorated top to bottom", date: "Dec 2024", img: "https://picsum.photos/seed/xmas3/500/600" },
  { cat: "christmas", title: "Year-end toast", date: "Dec 2024", img: "https://picsum.photos/seed/xmas4/500/630" },
];

const catMap = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]));
const ROTATIONS = [-4, -2.5, -1, 0, 1.5, 2.5, 4];

function getCounts() {
  const m = { all: ITEMS.length };
  ITEMS.forEach((it) => (m[it.cat] = (m[it.cat] || 0) + 1));
  return m;
}

export default function TeamGallery() {
  const [active, setActive] = useState("all");
  const counts = useMemo(getCounts, []);
  const visible = useMemo(
    () => ITEMS.filter((it) => active === "all" || it.cat === active),
    [active]
  );

  return (
    <div className="min-h-screen bg-[#1B4B43] text-[#FDF8EE]">
      {/* Header */}
      <header className="max-w-3xl mx-auto text-center px-6 pt-16 pb-8">
        <span className="inline-flex items-center gap-2.5 text-xs tracking-[0.22em] uppercase text-[#E8A33D] font-mono before:content-[''] before:w-6 before:h-px before:bg-[#E8A33D] before:opacity-60 after:content-[''] after:w-6 after:h-px after:bg-[#E8A33D] after:opacity-60">
          Team Moments
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-semibold leading-tight mt-4 mb-3 tracking-tight">
          The <em className="italic font-medium text-[#E8A33D] not-italic sm:italic">gallery</em> board
        </h1>
        <p className="text-[#EFE7D5]/80 text-base max-w-md mx-auto leading-relaxed">
          Camps, incidents, lunches, wins we handed each other, the annual
          trip, and every Christmas in between — pinned up in one place.
        </p>
      </header>

      {/* Filters */}
      <div className="sticky top-0 z-20 px-6 py-4 flex flex-wrap gap-2.5 justify-center bg-gradient-to-b from-[#1B4B43] to-transparent backdrop-blur-sm">
        {CATEGORIES.map((cat) => {
          const isActive = active === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`font-mono text-[13px] tracking-wide px-4.5 py-2 rounded-full border whitespace-nowrap transition-all ${
                isActive
                  ? "bg-[#E8A33D] border-[#E8A33D] text-[#231705] font-semibold"
                  : "bg-white/10 border-white/20 text-[#FDF8EE] hover:bg-white/20"
              }`}
              style={{ paddingLeft: "18px", paddingRight: "18px" }}
            >
              {cat.label}
              <span className={isActive ? "opacity-55 ml-1.5" : "opacity-65 ml-1.5"}>
                {counts[cat.id] || 0}
              </span>
            </button>
          );
        })}
      </div>

      {/* Board */}
      <main className="max-w-6xl mx-auto px-8 pb-24 pt-5 grid gap-x-7 gap-y-9 [grid-template-columns:repeat(auto-fill,minmax(230px,1fr))] items-start">
        {visible.length === 0 ? (
          <div className="col-span-full text-center py-20 text-[#EFE7D5]/60 font-mono text-sm">
            Nothing pinned here yet.
          </div>
        ) : (
          visible.map((it, i) => {
            const cat = catMap[it.cat];
            const r = ROTATIONS[i % ROTATIONS.length];
            return (
              <div
                key={`${it.cat}-${it.title}`}
                className="relative bg-[#FDF8EE] pt-3.5 px-3.5 pb-5 rounded-sm shadow-[0_14px_26px_-10px_rgba(0,0,0,0.33),0_2px_6px_rgba(0,0,0,0.19)] transition-transform duration-300 hover:-translate-y-1.5 hover:scale-[1.035] hover:rotate-0 hover:shadow-[0_24px_40px_-12px_rgba(0,0,0,0.33),0_4px_10px_rgba(0,0,0,0.25)] hover:z-10"
                style={{ transform: `rotate(${r}deg)` }}
              >
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full shadow-[0_3px_5px_rgba(0,0,0,0.33)]"
                  style={{ background: "radial-gradient(circle at 35% 30%, #ffdca0, #C77F1F 75%)" }}
                />
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover block"
                  style={{ filter: "sepia(0.06) contrast(1.02)" }}
                />
                <div className="pt-3">
                  <div className="font-serif font-medium text-[16.5px] text-[#22201C] leading-tight">
                    {it.title}
                  </div>
                  <div className="font-mono text-[11px] text-[#5B5A54] mt-1.5 flex justify-between uppercase tracking-wide">
                    <span className="flex items-center">
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full mr-1.5"
                        style={{ background: cat.color }}
                      />
                      {cat.label}
                    </span>
                    <span>{it.date}</span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </main>

      <footer className="text-center px-6 pb-14 text-[#EFE7D5]/40 font-mono text-[11px] tracking-wide">
        Click a category to filter · click "All" to reset
      </footer>
    </div>
  );
}