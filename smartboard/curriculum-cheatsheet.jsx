import { useState } from "react";

const SLATE = "#2D3142";
const EMERALD = "#10B981";
const ROSE = "#E84393";
const WHITE = "#FFFFFF";
const OFF = "#FAFAFA";
const LIGHT = "#F3F3F3";
const BORDER = "#E8E8E8";
const DARK = "#333333";
const SUB = "#666666";

const CLASSES = {
  "3d": {
    label: "🎨 3D Art",
    accent: EMERALD,
    accentDark: "#059669",
    accentLight: "#ECFDF5",
    accentGlow: "rgba(16,185,129,0.12)",
    bigIdeas: [
      { title: "🧊 Form & Space", desc: "How objects occupy and interact with 3-dimensional space" },
      { title: "🏗️ Structure & Surface", desc: "Building strong forms and transforming their surfaces" },
      { title: "💡 Function vs. Expression", desc: "Art that serves a purpose vs. art that communicates an idea" },
      { title: "🧠 Material Thinking", desc: "Each material has a voice — clay speaks differently than wire" },
    ],
    principles: [
      { name: "Form", icon: "🧊", desc: "3D shapes with height, width & depth" },
      { name: "Space", icon: "🫧", desc: "Positive (object) vs. negative (around it)" },
      { name: "Texture", icon: "🪨", desc: "How a surface looks & feels" },
      { name: "Balance", icon: "⚖️", desc: "Visual weight distribution" },
      { name: "Proportion", icon: "📐", desc: "Size relationships between parts" },
      { name: "Unity", icon: "🔗", desc: "Everything works together as one piece" },
      { name: "Movement", icon: "🌊", desc: "Guiding the viewer's eye around the work" },
      { name: "Emphasis", icon: "🎯", desc: "The focal point that grabs attention" },
    ],
    materials: [
      { name: "Clay", uses: "Pinch pots, coil building, slab construction, sculpture", icon: "🏺" },
      { name: "Wire", uses: "Armatures, contour sculpture, jewelry, kinetic art", icon: "〰️" },
      { name: "Cardboard", uses: "Architectural models, relief sculpture, masks", icon: "📦" },
      { name: "Paper / Papier-Mâché", uses: "Masks, sculptural forms, layered builds", icon: "📜" },
      { name: "Plaster", uses: "Casting, carving, mold-making", icon: "🪨" },
      { name: "Found Objects", uses: "Assemblage, mixed-media sculpture", icon: "🔩" },
      { name: "Fabric & Fiber", uses: "Soft sculpture, sewing, textile art", icon: "🧶" },
      { name: "Foam & Wood", uses: "Carving, construction, architectural models", icon: "🪵" },
    ],
    projects: [
      { name: "👟 Dream Sneaker Sculpture", skill: "Hand-building & surface design", unit: "U1" },
      { name: "🧸 Design & Sew Your Own Plush", skill: "Character design → pattern-making → sewing", unit: "U2" },
      { name: "💡 Wire Neon Sign", skill: "Line, form & bending in 3D space", unit: "U2" },
      { name: "🏠 Tiny House / Dream Room", skill: "Slab construction & architectural thinking", unit: "U3" },
      { name: "👑 Wearable Art Piece", skill: "Structure, engineering & the body as form", unit: "U3" },
      { name: "💿 Album Cover in Relief", skill: "Low/high relief, texture & personal taste", unit: "U4" },
      { name: "🎭 Character / Cosplay Mask", skill: "Form-building over armature", unit: "U4" },
      { name: "🤖 E-Waste Creature", skill: "Found-object assemblage & composition", unit: "U5" },
      { name: "💍 Custom Ring or Wearable", skill: "Carving, casting & finishing", unit: "U5" },
      { name: "🗽 Personal Monument", skill: "Student choice — represent who you are in 3D", unit: "U6" },
    ],
  },
  visual: {
    label: "🖌️ Visual Art I",
    accent: ROSE,
    accentDark: "#C2185B",
    accentLight: "#FDF2F8",
    accentGlow: "rgba(232,67,147,0.12)",
    bigIdeas: [
      { title: "👀 Seeing Like an Artist", desc: "Training your eye to observe shape, light, shadow & detail" },
      { title: "🗣️ The Language of Art", desc: "Elements & principles are the grammar of visual communication" },
      { title: "🎨 Color as Emotion", desc: "Color choices shape how artwork feels and what it communicates" },
      { title: "✨ Personal Voice", desc: "Every artist develops a unique way of seeing and making" },
    ],
    principles: [
      { name: "Line", icon: "✏️", desc: "Marks that define edges, movement & texture" },
      { name: "Shape", icon: "🔷", desc: "2D areas — geometric or organic" },
      { name: "Value", icon: "🌗", desc: "Lightness & darkness, creating depth" },
      { name: "Color", icon: "🎨", desc: "Hue, saturation & temperature" },
      { name: "Texture", icon: "🪨", desc: "Implied or actual surface quality" },
      { name: "Space", icon: "🖼️", desc: "Depth, overlap, perspective" },
      { name: "Contrast", icon: "◐", desc: "Differences that create visual interest" },
      { name: "Composition", icon: "📐", desc: "How elements are arranged on the page" },
    ],
    materials: [
      { name: "Graphite Pencils", uses: "Sketching, shading, value studies, contour drawing", icon: "✏️" },
      { name: "Charcoal", uses: "Expressive drawing, gesture, large-scale value work", icon: "🖤" },
      { name: "Colored Pencils", uses: "Color blending, layering, detailed illustration", icon: "🖍️" },
      { name: "Oil Pastels", uses: "Bold color, blending, resist techniques", icon: "🟠" },
      { name: "Watercolor", uses: "Washes, wet-on-wet, transparency, landscapes", icon: "💧" },
      { name: "Acrylic Paint", uses: "Layering, color mixing, canvas & board work", icon: "🎨" },
      { name: "Ink", uses: "Line work, wash, pen & ink illustration", icon: "🖋️" },
      { name: "Mixed Media", uses: "Collage, layering materials, experimental work", icon: "✂️" },
    ],
    projects: [
      { name: "👁️ Blind Contour Portrait Swap", skill: "Observation & line control — draw your classmate", unit: "U1" },
      { name: "🔥 \"Draw Your Grail\"", skill: "Value & shading — render something you love", unit: "U1" },
      { name: "🎒 \"What's In My Bag\" Still Life", skill: "Observation from life — your objects tell your story", unit: "U2" },
      { name: "📸 Texture Hunt & Draw", skill: "Photo + drawing hybrid — find & recreate real textures", unit: "U2" },
      { name: "🏷️ Design a Product Label", skill: "Color theory in action — packaging, album art, or brand", unit: "U3" },
      { name: "🌊 Mood Painting (Monochromatic)", skill: "One color, full range of value — paint a feeling", unit: "U3" },
      { name: "🌌 Imaginary World Landscape", skill: "Space, depth & atmosphere — a place that doesn't exist yet", unit: "U4" },
      { name: "🪞 Identity Portrait (Any Style)", skill: "Proportion & self-expression — who are you beyond a photo?", unit: "U4" },
      { name: "📰 Social Commentary Collage", skill: "Mixed media & message — remix culture to say something real", unit: "U5" },
      { name: "📖 Personal Zine / Mini Portfolio", skill: "Student choice — curate your best work into something shareable", unit: "U6" },
    ],
  },
};

const TABS = ["💡 Big Ideas", "📐 Elements & Principles", "🎨 Materials", "🚀 Projects"];

export default function CurriculumCheatSheet() {
  const [activeClass, setActiveClass] = useState("3d");
  const [activeTab, setActiveTab] = useState(0);
  const cls = CLASSES[activeClass];

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", background: WHITE, minHeight: "100vh" }}>
      {/* HEADER */}
      <div style={{
        padding: "26px 32px 22px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: 14,
        borderBottom: `4px solid ${cls.accent}`,
        transition: "border-color 0.3s ease",
      }}>
        <div>
          <div style={{ color: SLATE, fontSize: 30, fontWeight: 900, letterSpacing: 0.5, lineHeight: 1.1 }}>
            ✨ Year at a Glance ✨
          </div>
          <div style={{ color: SUB, fontSize: 14, marginTop: 5 }}>
            Holy Redeemer High School — What We'll Learn, Make & Explore 🚀
          </div>
        </div>
        <div style={{ display: "flex", borderRadius: 12, overflow: "hidden", border: `2px solid ${BORDER}` }}>
          {Object.entries(CLASSES).map(([key, val]) => (
            <button key={key} onClick={() => { setActiveClass(key); setActiveTab(0); }}
              style={{
                padding: "12px 24px", border: "none", cursor: "pointer",
                fontWeight: 800, fontSize: 16, transition: "all 0.3s",
                background: activeClass === key ? val.accent : WHITE,
                color: activeClass === key ? WHITE : SUB,
              }}>{val.label}</button>
          ))}
        </div>
      </div>

      {/* TAB BAR */}
      <div style={{
        display: "flex", background: OFF,
        padding: "0 24px", borderBottom: `1px solid ${BORDER}`,
      }}>
        {TABS.map((tab, i) => (
          <button key={tab} onClick={() => setActiveTab(i)}
            style={{
              padding: "14px 22px", border: "none", cursor: "pointer",
              fontWeight: activeTab === i ? 800 : 500, fontSize: 15,
              color: activeTab === i ? cls.accent : SUB,
              background: activeTab === i ? WHITE : "transparent",
              borderBottom: activeTab === i ? `3px solid ${cls.accent}` : "3px solid transparent",
              borderTop: activeTab === i ? `3px solid ${cls.accent}` : "3px solid transparent",
              borderRadius: activeTab === i ? "8px 8px 0 0" : 0,
              marginBottom: -1, transition: "all 0.2s",
            }}>{tab}</button>
        ))}
      </div>

      {/* CONTENT */}
      <div style={{ padding: "26px 30px 44px", maxWidth: 1100, margin: "0 auto" }}>

        {/* BIG IDEAS */}
        {activeTab === 0 && (
          <div>
            <div style={{
              display: "flex", alignItems: "center", gap: 12, marginBottom: 6,
            }}>
              <h2 style={{ fontSize: 24, fontWeight: 900, color: SLATE, margin: 0 }}>💡 Big Ideas</h2>
              <span style={{
                background: cls.accentLight, color: cls.accent, fontSize: 12,
                fontWeight: 700, padding: "4px 12px", borderRadius: 20,
                border: `1px solid ${cls.accent}33`,
              }}>{cls.label}</span>
            </div>
            <p style={{ color: SUB, fontSize: 14, margin: "0 0 20px" }}>
              The driving themes that shape everything we create this year ⚡
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {cls.bigIdeas.map((idea, i) => (
                <div key={i} style={{
                  background: WHITE, borderRadius: 14, padding: "22px 24px",
                  borderLeft: `5px solid ${cls.accent}`,
                  boxShadow: `0 2px 12px ${cls.accentGlow}`,
                  border: `1px solid ${BORDER}`, borderLeftWidth: 5, borderLeftColor: cls.accent,
                }}>
                  <div style={{ fontSize: 18, fontWeight: 800, color: SLATE, marginBottom: 8 }}>{idea.title}</div>
                  <div style={{ fontSize: 15, color: SUB, lineHeight: 1.55 }}>{idea.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ELEMENTS & PRINCIPLES */}
        {activeTab === 1 && (
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
              <h2 style={{ fontSize: 24, fontWeight: 900, color: SLATE, margin: 0 }}>
                📐 {activeClass === "3d" ? "Elements & Principles of 3D Design" : "Elements & Principles of Art"}
              </h2>
            </div>
            <p style={{ color: SUB, fontSize: 14, margin: "0 0 20px" }}>Our shared vocabulary all year 🗣️</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {cls.principles.map((p, i) => (
                <div key={i} style={{
                  background: WHITE, borderRadius: 12, padding: "16px 18px",
                  display: "flex", alignItems: "center", gap: 14,
                  border: `1px solid ${BORDER}`,
                  boxShadow: `0 2px 8px ${cls.accentGlow}`,
                  transition: "transform 0.2s",
                }}>
                  <div style={{
                    fontSize: 32, lineHeight: 1,
                    width: 52, height: 52, borderRadius: 12,
                    background: cls.accentLight, display: "flex",
                    alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>{p.icon}</div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 16, color: SLATE }}>{p.name}</div>
                    <div style={{ fontSize: 13, color: SUB, marginTop: 2, lineHeight: 1.4 }}>{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MATERIALS */}
        {activeTab === 2 && (
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
              <h2 style={{ fontSize: 24, fontWeight: 900, color: SLATE, margin: 0 }}>🎨 Materials & Media</h2>
            </div>
            <p style={{ color: SUB, fontSize: 14, margin: "0 0 20px" }}>What you'll work with & what you'll make 🔥</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {cls.materials.map((m, i) => (
                <div key={i} style={{
                  background: WHITE, borderRadius: 12, padding: "16px 18px",
                  border: `1px solid ${BORDER}`,
                  boxShadow: `0 2px 8px ${cls.accentGlow}`,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <div style={{
                      fontSize: 24, width: 42, height: 42, borderRadius: 10,
                      background: cls.accentLight, display: "flex",
                      alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>{m.icon}</div>
                    <span style={{ fontWeight: 800, fontSize: 16, color: SLATE }}>{m.name}</span>
                  </div>
                  <div style={{ fontSize: 13, color: SUB, lineHeight: 1.5, paddingLeft: 52 }}>{m.uses}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PROJECTS */}
        {activeTab === 3 && (
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
              <h2 style={{ fontSize: 24, fontWeight: 900, color: SLATE, margin: 0 }}>🚀 Projects & Skills</h2>
            </div>
            <p style={{ color: SUB, fontSize: 14, margin: "0 0 20px" }}>Building from foundations to your own creative vision 💪</p>
            <div style={{
              display: "flex", flexDirection: "column", gap: 6,
              borderRadius: 14, overflow: "hidden",
              boxShadow: `0 2px 12px ${cls.accentGlow}`,
              border: `1px solid ${BORDER}`,
            }}>
              {cls.projects.map((p, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 14,
                  padding: "13px 18px",
                  background: i % 2 === 0 ? WHITE : OFF,
                  borderLeft: `4px solid ${cls.accent}`,
                }}>
                  <span style={{
                    background: cls.accent, color: WHITE,
                    fontSize: 12, fontWeight: 900, padding: "4px 12px",
                    borderRadius: 8, letterSpacing: 0.5, flexShrink: 0,
                  }}>{p.unit}</span>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontWeight: 700, fontSize: 14, color: SLATE }}>{p.name}</span>
                    <span style={{ fontSize: 13, color: SUB, marginLeft: 8 }}>— {p.skill}</span>
                  </div>
                </div>
              ))}
            </div>
            <div style={{
              marginTop: 16, padding: "14px 18px",
              background: cls.accentLight, borderRadius: 10,
              fontSize: 14, color: SLATE, lineHeight: 1.5,
              borderLeft: `4px solid ${cls.accent}`,
            }}>
              📌 <strong>Note:</strong> Projects may shift based on our pace and your interests — the final unit is always <em>your choice</em> ✨
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
