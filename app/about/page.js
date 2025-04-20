import Link from "next/link";
export default function About() {
  return (
    <div className="inset-0 -z-10 min-h-screen min-w-screen bg-white [background:radial-gradient(125%_200%_at_50%_50%,#fff_15%,#63e_69%)]">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to SyntaxSocial</h1>
        <p className="text-xl mb-6">Connecting people, ideas, and discussions worldwide.</p>
        <Link href={'/forums'}>
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-100">
          Check out our available Forums
        </button>
        </Link>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-10">
        <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-center text-lg">
          We aim to create a vibrant community where knowledge, ideas, and collaboration thrive.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-10">
        <h2 className="text-3xl font-bold text-center mb-8">What Makes Us Unique</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Real-Time Discussions</h3>
            <p className="text-gray-600">Engage in live conversations on trending topics.</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Diverse Categories</h3>
            <p className="text-gray-600">Explore discussions tailored to your interests.</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Growing Community</h3>
            <p className="text-gray-600">Join a global network of passionate individuals.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 text-center bg-gray-800 text-white">
        <p>&copy; 2025 SyntaxSocial. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
