import { useState, useEffect } from "react";

const SLATE = "#2D3142";
const EMERALD = "#10B981";
const ROSE = "#E84393";
const WHITE = "#FFFFFF";
const OFF = "#F9F9F9";
const LIGHT = "#F3F3F3";
const BORDER = "#E8E8E8";
const DARK = "#333333";
const SUB = "#666666";

const PROMPTS = [
  { emoji: "☀️", text: "Best moment of your summer" },
  { emoji: "🎯", text: "One thing you want to crush this year" },
  { emoji: "🎵", text: "A song stuck in your head rn" },
  { emoji: "🌎", text: "A place you need to visit someday" },
  { emoji: "🍕", text: "Your ultimate comfort food" },
  { emoji: "💭", text: "A word that describes your mood today" },
  { emoji: "⚡", text: "Something you're obsessed with rn" },
  { emoji: "🏠", text: "Your happy place" },
  { emoji: "🎮", text: "A character you love (any show, game, book)" },
  { emoji: "🔮", text: "Where you see yourself in 5 years" },
  { emoji: "🐾", text: "A pet you have or wish you had" },
  { emoji: "👟", text: "Your dream fit" },
];

export default function DoodleIcebreaker() {
  const [glow, setGlow] = useState(0);
  const [accent, setAccent] = useState(EMERALD);

  useEffect(() => {
    const t = setInterval(() => setGlow(g => (g + 1) % PROMPTS.length), 2800);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const c = setInterval(() => setAccent(a => a === EMERALD ? ROSE : EMERALD), 10000);
    return () => clearInterval(c);
  }, []);

  const accentLight = accent === EMERALD ? "#ECFDF5" : "#FDF2F8";

  return (
    <div style={{
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      background: WHITE, minHeight: "100vh", position: "relative", overflow: "hidden",
    }}>
      {/* Scattered background emojis */}
      {["✏️","🌀","⭐","🎨","💫","✨","🖍️","💥","🫧","🔥","✌️","🤘"].map((e, i) => (
        <span key={i} style={{
          position: "absolute", fontSize: i % 3 === 0 ? 36 : 26, opacity: 0.06,
          pointerEvents: "none",
          top: `${8 + (i * 7) % 80}%`,
          left: i % 2 === 0 ? `${2 + (i * 5) % 15}%` : undefined,
          right: i % 2 !== 0 ? `${2 + (i * 4) % 12}%` : undefined,
        }}>{e}</span>
      ))}

      {/* HEADER */}
      <div style={{
        padding: "26px 40px 20px", textAlign: "center",
        borderBottom: `3px solid ${accent}`, transition: "border-color 1.5s ease",
      }}>
        <div style={{ fontSize: 40, fontWeight: 900, color: SLATE, letterSpacing: 1, lineHeight: 1.1 }}>
          ✏️🎨 THE BIG DOODLE 🎨✏️
        </div>
        <div style={{
          color: accent, fontSize: 15, marginTop: 8, fontWeight: 700,
          letterSpacing: 0.5, transition: "color 1.5s ease",
        }}>
          ⚡ Your first mark in this studio starts right now ⚡
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "20px 32px 32px" }}>

        {/* INSTRUCTIONS */}
        <div style={{
          background: WHITE, borderRadius: 14, padding: "20px 24px", marginBottom: 16,
          border: `1px solid ${BORDER}`, borderLeft: `4px solid ${accent}`,
          transition: "border-left-color 1.5s ease",
        }}>
          <div style={{ fontSize: 18, fontWeight: 900, color: SLATE, marginBottom: 12 }}>
            🚀 HERE'S WHAT YOU DO
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { n: "1", emoji: "✊", text: "Grab a marker, pen, or pencil — whatever calls to you." },
              { n: "2", emoji: "👀", text: "Find a spot on the paper. Any spot. It's all yours." },
              { n: "3", emoji: "✏️", text: "Doodle. Draw. Write. Scribble. There are NO rules." },
              { n: "4", emoji: "💡", text: "Use a prompt below if you need a spark — or just vibe." },
              { n: "5", emoji: "🤝", text: "Build off someone else's doodle if you want. This is a shared space." },
            ].map(s => (
              <div key={s.n} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{
                  background: accentLight, color: accent, fontWeight: 900, fontSize: 13,
                  width: 28, height: 28, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, border: `2px solid ${accent}44`,
                  transition: "all 1.5s ease",
                }}>{s.n}</span>
                <span style={{ fontSize: 15, color: DARK, lineHeight: 1.4 }}>{s.emoji} {s.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RULES */}
        <div style={{
          background: accentLight, borderRadius: 12, padding: "14px 22px", marginBottom: 16,
          display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap",
          borderLeft: `4px solid ${accent}`, transition: "all 1.5s ease",
        }}>
          <span style={{ fontSize: 16, fontWeight: 900, color: SLATE }}>🚫 THE ONLY RULES</span>
          <span style={{ fontSize: 14, color: DARK, fontWeight: 500, lineHeight: 1.5 }}>
            No erasing — every mark counts ✅ &nbsp;•&nbsp; Be kind to each other's work 💛 &nbsp;•&nbsp; There is NO "bad" doodle 🙅‍♀️
          </span>
        </div>

        {/* PROMPTS */}
        <div style={{ fontSize: 16, fontWeight: 900, color: SLATE, marginBottom: 10 }}>
          🔥 NEED A SPARK? TRY ONE OF THESE 👇
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          {PROMPTS.map((p, i) => {
            const active = glow === i;
            return (
              <div key={i} style={{
                background: active ? accentLight : WHITE,
                borderRadius: 10, padding: "11px 14px",
                display: "flex", alignItems: "center", gap: 10,
                border: `1px solid ${active ? accent : BORDER}`,
                transition: "all 0.5s ease",
              }}>
                <span style={{ fontSize: 20, lineHeight: 1 }}>{p.emoji}</span>
                <span style={{
                  fontSize: 13, color: active ? SLATE : SUB,
                  fontWeight: active ? 700 : 400, lineHeight: 1.3,
                  transition: "all 0.5s ease",
                }}>{p.text}</span>
              </div>
            );
          })}
        </div>

        {/* BOTTOM */}
        <div style={{
          marginTop: 16, background: OFF, borderRadius: 12, padding: "16px 24px",
          textAlign: "center", border: `1px solid ${BORDER}`,
        }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: SLATE, lineHeight: 1.6 }}>
            🙅 This isn't graded. This isn't a test. 🙅
            <br />
            <span style={{ fontSize: 14, color: SUB }}>Just you, a marker, and a blank page.</span>
            <br />
            <span style={{
              color: accent, fontWeight: 900, fontSize: 16,
              transition: "color 1.5s ease",
            }}>
              ✨ Welcome to art class. Let's go. 🚀🎨
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
