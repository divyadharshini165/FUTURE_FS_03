export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-500 to-purple-600 text-white py-24 text-center">
      <h1 className="text-5xl font-extrabold">Soundify</h1>
      <p className="mt-4 text-lg">
        Stream music smarter with AI-powered playlists
      </p>
      <button className="mt-6 px-8 py-3 bg-black rounded-full hover:opacity-80">
        Start Listening
      </button>
    </section>
  );
}
