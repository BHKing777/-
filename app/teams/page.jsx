"use client";
import React, { useState } from "react";

const headshot = (id) => `https://cdn.nba.com/headshots/nba/latest/1040x760/${id}.png`;
const logo = (id) => `https://cdn.nba.com/logos/nba/${id}/primary/L/logo.svg`;

const teams = {
  lakers: {
    label: "Lakers",
    full: "Los Angeles Lakers",
    border: "border-purple-900",
    glow: "from-purple-300",
    logo: logo(1610612747),
    players: [
      { name: "LeBron James", img: headshot(2544), ppg: 25, rpg: 7.7, apg: 7.8 },
      { name: "Anthony Davis", img: headshot(203076), ppg: 24, rpg: 10.4, apg: 3.1 },
      { name: "Russell Westbrook", img: headshot(201566), ppg: 22.2, rpg: 7, apg: 8.5 },
      { name: "Austin Reaves", img: headshot(1630559), ppg: 13, rpg: 3, apg: 3.4 },
      { name: "D'Angelo Russell", img: headshot(1626156), ppg: 17.8, rpg: 3.1, apg: 6.2 },
      { name: "Rui Hachimura", img: headshot(1629060), ppg: 9.6, rpg: 4.7, apg: 0.9 },
    ],
  },
  gsw: {
    label: "GSW",
    full: "Golden State Warriors",
    border: "border-blue-800",
    glow: "from-blue-300",
    logo: logo(1610612744),
    players: [
      { name: "Stephen Curry", img: headshot(201939), ppg: 30.1, rpg: 5.5, apg: 6.1 },
      { name: "Klay Thompson", img: headshot(202691), ppg: 21.9, rpg: 4.1, apg: 2.3 },
      { name: "Draymond Green", img: headshot(203110), ppg: 8.5, rpg: 7.2, apg: 6.8 },
      { name: "Andrew Wiggins", img: headshot(203952), ppg: 17.1, rpg: 5, apg: 2.2 },
      { name: "Jordan Poole", img: headshot(1629673), ppg: 20.4, rpg: 2.7, apg: 4.5 },
      { name: "Kevon Looney", img: headshot(1626172), ppg: 6.9, rpg: 9.4, apg: 3 },
    ],
  },
  clippers: {
    label: "Clippers",
    full: "Los Angeles Clippers",
    border: "border-red-700",
    glow: "from-red-200",
    logo: logo(1610612746),
    players: [
      { name: "Kawhi Leonard", img: headshot(202695), ppg: 23.8, rpg: 6.5, apg: 3.9 },
      { name: "Paul George", img: headshot(202331), ppg: 23.8, rpg: 6.1, apg: 5.1 },
      { name: "James Harden", img: headshot(201935), ppg: 16.6, rpg: 5.1, apg: 8.5 },
      { name: "Russell Westbrook", img: headshot(201566), ppg: 11.1, rpg: 5, apg: 4.5 },
      { name: "Ivica Zubac", img: headshot(1627826), ppg: 10.8, rpg: 9.9, apg: 1.4 },
      { name: "Norman Powell", img: headshot(1626181), ppg: 17, rpg: 3, apg: 1.7 },
    ],
  },
  nets: {
    label: "Brooklyn Nets",
    full: "Brooklyn Nets",
    border: "border-black",
    glow: "from-neutral-300",
    logo: logo(1610612751),
    players: [
      { name: "Kevin Durant", img: headshot(201142), ppg: 27, rpg: 7.1, apg: 5.9 },
      { name: "Kyrie Irving", img: headshot(202681), ppg: 27.1, rpg: 5.1, apg: 5.5 },
      { name: "Ben Simmons", img: headshot(1627732), ppg: 6.9, rpg: 6.3, apg: 6.1 },
      { name: "Mikal Bridges", img: headshot(1628969), ppg: 26.1, rpg: 4.5, apg: 3.6 },
      { name: "Nic Claxton", img: headshot(1629651), ppg: 12.6, rpg: 9.9, apg: 2.1 },
      { name: "Spencer Dinwiddie", img: headshot(203915), ppg: 12.6, rpg: 3, apg: 6.3 },
    ],
  },
  heat: {
    label: "Miami Heat",
    full: "Miami Heat",
    border: "border-red-800",
    glow: "from-orange-200",
    logo: logo(1610612748),
    players: [
      { name: "Jimmy Butler", img: headshot(202710), ppg: 22.9, rpg: 5.9, apg: 5.3 },
      { name: "Bam Adebayo", img: headshot(1628389), ppg: 20.4, rpg: 9.2, apg: 3.2 },
      { name: "Tyler Herro", img: headshot(1629639), ppg: 20.1, rpg: 5, apg: 4.2 },
      { name: "Kyle Lowry", img: headshot(200768), ppg: 11.2, rpg: 4.3, apg: 5.1 },
      { name: "Duncan Robinson", img: headshot(1629130), ppg: 8, rpg: 2.2, apg: 1.5 },
      { name: "Caleb Martin", img: headshot(1628997), ppg: 9.6, rpg: 4.3, apg: 1.5 },
    ],
  },
};

const Teams = () => {
  const [teamKey, setTeamKey] = useState("lakers");
  const team = teams[teamKey];

  return (
    <main className="mx-auto max-w-6xl px-4 pb-16">
      <select
        value={teamKey}
        onChange={(e) => setTeamKey(e.target.value)}
        className="mt-6 mb-8 border border-neutral-700 bg-white px-2 py-1 text-2xl outline-none"
      >
        {Object.entries(teams).map(([key, t]) => (
          <option key={key} value={key}>
            {t.label}
          </option>
        ))}
      </select>

      <div className="grid grid-cols-1 gap-7 rounded-3xl bg-white p-9 sm:grid-cols-2 lg:grid-cols-3">
        {team.players.map((p) => (
          <div
            key={p.name}
            className={`overflow-hidden rounded-3xl border-[10px] bg-white shadow-lg ${team.border}`}
          >
            <div className={`relative h-80 bg-radial to-white ${team.glow}`}>
              {team.logo && (
                <img src={team.logo} alt={team.full} className="absolute top-2 left-2 z-10 h-14 w-14 object-contain" />
              )}
              {p.img && (
                <img src={p.img} alt={p.name} className="h-full w-full object-contain object-bottom" />
              )}
            </div>

            <div className={`border-t-[5px] bg-white py-1 text-center text-xl ${team.border}`}>
              {p.name}
            </div>
            <div className={`border-t-[5px] bg-white py-1 text-center text-xl ${team.border}`}>
              {team.full}
            </div>

            <div className={`grid grid-cols-3 border-t-[5px] ${team.border}`}>
              {[
                ["PPG", p.ppg],
                ["RPG", p.rpg],
                ["APG", p.apg],
              ].map(([label, value], i) => (
                <div
                  key={label}
                  className={`bg-white py-1 text-center ${i > 0 ? `border-l-[5px] ${team.border}` : ""}`}
                >
                  <div className="text-xl">{label}</div>
                  <div className="text-3xl font-bold text-rose-600">{value}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Teams;