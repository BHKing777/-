import React from "react";

// Заглушки: у каждого видео своя стабильная картинка (seed).
const placeholder = (seed) => `https://picsum.photos/seed/${seed}/640/360`;

// Когда будут настоящие видео на YouTube, используй:
// const yt = (videoId) => `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
// и вместо placeholder("nba-1") пиши yt("ID_ВИДЕО")

const videos = [
  { id: 1, img: placeholder("nba-1"), time: "52:38", title: "Top Viral Moments of the 2023 Calendar Year" },
  { id: 2, img: placeholder("nba-2"), time: "32:28", title: "Top performances from 2023 calendar year" },
  { id: 3, img: placeholder("nba-3"), time: "03:34", title: "Top 10 clutch plays of the 2023 calendar year" },
  { id: 4, img: placeholder("nba-4"), time: "03:25", title: "Top 10 dunks of the 2023 calendar year" },
  { id: 5, img: placeholder("nba-5"), time: "03:52", title: "Top 10 blocks of the 2023 calendar year" },
  { id: 6, img: placeholder("nba-6"), time: "00:47", title: "Best moments of the 2023 calendar year" },
];

const Home = () => {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-16">
      <h1 className="mt-6 mb-10 text-4xl uppercase">Best of 2023</h1>

      <div className="grid grid-cols-1 gap-7 rounded-3xl bg-white p-9 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((v) => (
          <div
            key={v.id}
            className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm"
          >
            <div className="relative aspect-video w-full bg-neutral-300">
              {v.img && (
                <img src={v.img} alt={v.title} className="h-full w-full object-cover" />
              )}
              <div className="absolute bottom-2 left-2 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-black/60">
                  <svg viewBox="0 0 24 24" className="h-3 w-3 fill-white">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="rounded bg-black/70 px-2 py-0.5 text-lg text-white">
                  {v.time}
                </span>
              </div>
            </div>
            <h3 className="p-3 text-2xl leading-tight">{v.title}</h3>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;