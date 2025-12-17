"use client";

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 px-6">
        <h1 className="text-5xl font-bold mb-4">Soundify</h1>

        <p className="max-w-xl text-lg opacity-90">
          Stream music smarter with AI-powered playlists
        </p>

        <button
          onClick={() => {
            const section = document.getElementById("playlists");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-6 px-8 py-3 bg-black rounded-full hover:opacity-80 transition"
        >
          Start Listening
        </button>
      </section>

      {/* PLAYLIST SECTION */}
      <section id="playlists" className="p-10">
        <h2 className="text-2xl font-semibold mb-6">Featured Playlists</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Chill Vibes", desc: "Various Artists" },
            { title: "Top Hits", desc: "Trending Now" },
            { title: "Focus Beats", desc: "Productivity Music" },
            { title: "Workout Mix", desc: "High Energy Tracks" },
            { title: "Late Night", desc: "Relax & Unwind" },
            { title: "Indie Wave", desc: "Fresh Indie Sounds" },
          ].map((playlist, index) => (
            <div
              key={index}
              onClick={() =>
                alert(`Opening playlist: ${playlist.title}`)
              }
              className="bg-gray-900 p-6 rounded-lg cursor-pointer hover:bg-gray-800 transition"
            >
              <h3 className="text-lg font-semibold">{playlist.title}</h3>
              <p className="text-gray-400">{playlist.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center p-6 text-gray-500 text-sm">
        © 2025 Soundify. AI-powered music experience.
      </footer>
    </main>
  );
}
