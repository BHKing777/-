"use client";
import React, { useState } from "react";

const headshot = (id) => `https://cdn.nba.com/headshots/nba/latest/1040x760/${id}.png`;
const logo = (id) => `https://cdn.nba.com/logos/nba/${id}/primary/L/logo.svg`;

// Цвета команд (классы Tailwind написаны целиком, чтобы они попали в сборку)
const themes = {
  lakers: { border: "border-purple-900", glow: "from-purple-300", logoId: 1610612747 },
  nets: { border: "border-black", glow: "from-neutral-300", logoId: 1610612751 },
  warriors: { border: "border-blue-800", glow: "from-blue-300", logoId: 1610612744 },
  bucks: { border: "border-green-800", glow: "from-green-300", logoId: 1610612749 },
  mavs: { border: "border-sky-700", glow: "from-sky-300", logoId: 1610612742 },
  nuggets: { border: "border-amber-500", glow: "from-amber-200", logoId: 1610612743 },
  sixers: { border: "border-blue-700", glow: "from-red-200", logoId: 1610612755 },
  celtics: { border: "border-green-700", glow: "from-green-200", logoId: 1610612738 },
  suns: { border: "border-orange-600", glow: "from-orange-300", logoId: 1610612756 },
};

const players = [
  { id: 1, name: "LeBron James", team: "Los Angeles Lakers", theme: "lakers", img: headshot(2544), ppg: 25, rpg: 7.7, apg: 7.8 },
  { id: 2, name: "Kevin Durant", team: "Brooklyn Nets", theme: "nets", img: headshot(201142), ppg: 27, rpg: 7.1, apg: 5.9 },
  { id: 3, name: "Stephen Curry", team: "Golden State Warriors", theme: "warriors", img: headshot(201939), ppg: 30.1, rpg: 5.5, apg: 6.1 },
  { id: 4, name: "Giannis Antetokounmpo", team: "Milwaukee Bucks", theme: "bucks", img: headshot(203507), ppg: 31.1, rpg: 11.8, apg: 5.7 },
  { id: 5, name: "Luka Doncic", team: "Dallas Mavericks", theme: "mavs", img: headshot(1629029), ppg: 32.4, rpg: 8.6, apg: 8 },
  { id: 6, name: "Nikola Jokic", team: "Denver Nuggets", theme: "nuggets", img: headshot(203999), ppg: 24.5, rpg: 11.8, apg: 9.8 },
  { id: 7, name: "Joel Embiid", team: "Philadelphia 76ers", theme: "sixers", img: headshot(203954), ppg: 33.1, rpg: 10.2, apg: 4.2 },
  { id: 8, name: "Jayson Tatum", team: "Boston Celtics", theme: "celtics", img: headshot(1628369), ppg: 30.1, rpg: 8.8, apg: 4.6 },
  { id: 9, name: "Devin Booker", team: "Phoenix Suns", theme: "suns", img: headshot(1626164), ppg: 27.8, rpg: 4.5, apg: 5.5 },
];

const Topplayers = () => {
  const [search, setSearch] = useState("");

  const q = search.trim().toLowerCase();
  const filtered = players.filter(
    (p) => p.name.toLowerCase().includes(q) || p.team.toLowerCase().includes(q)
  );

  return (
    <main className="mx-auto max-w-6xl px-4 pb-16">
      <h1 className="mt-6 mb-10 text-4xl">Top Players</h1>

      <div className="mb-6 flex justify-center">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search players..."
          className="w-full max-w-xl rounded-xl border-2 border-neutral-300 bg-white px-4 py-3 text-xl outline-none focus:border-blue-600"
        />
      </div>

      <div className="grid grid-cols-1 gap-7 rounded-3xl bg-white p-9 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => {
          const t = themes[p.theme];
          return (
            <div
              key={p.id}
              className={`overflow-hidden rounded-3xl border-[10px] bg-white shadow-lg ${t.border}`}
            >
              <div className={`relative h-80 bg-radial to-white ${t.glow}`}>
                <img
                  src={logo(t.logoId)}
                  alt={p.team}
                  className="absolute top-2 left-2 z-10 h-14 w-14 object-contain"
                />
                <img src={p.img} alt={p.name} className="h-full w-full object-contain object-bottom" />
              </div>

              <div className={`border-t-[5px] bg-white py-1 text-center text-xl ${t.border}`}>
                {p.name}
              </div>
              <div className={`border-t-[5px] bg-white py-1 text-center text-xl ${t.border}`}>
                {p.team}
              </div>

              <div className={`grid grid-cols-3 border-t-[5px] ${t.border}`}>
                {[
                  ["PPG", p.ppg],
                  ["RPG", p.rpg],
                  ["APG", p.apg],
                ].map(([label, value], i) => (
                  <div
                    key={label}
                    className={`bg-white py-1 text-center ${i > 0 ? `border-l-[5px] ${t.border}` : ""}`}
                  >
                    <div className="text-xl">{label}</div>
                    <div className="text-3xl font-bold text-rose-600">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-xl text-neutral-500">Nothing found</p>
      )}
    </main>
  );
};

export default Topplayers;