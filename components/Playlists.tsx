export default function Playlists() {
  const playlists = [
    "Chill Vibes",
    "Top Hits",
    "Focus Beats",
    "Workout Mix",
    "Late Night"
  ];

  return (
    <section className="bg-black text-white py-16 px-10">
      <h2 className="text-3xl font-bold mb-8">Featured Playlists</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {playlists.map((list) => (
          <div
            key={list}
            className="bg-gray-900 rounded-xl p-6 hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">{list}</h3>
            <p className="text-gray-400 mt-2">
              Curated using AI recommendations
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
