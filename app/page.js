import Link from "next/link";
import { FaPython, FaJs, FaReact, FaJava, FaCode, FaNodeJs } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="inset-0 -z-10 min-h-screen min-w-screen bg-white [background:radial-gradient(125%_200%_at_50%_50%,#fff_15%,#63e_69%)]">
      {/* Hero Section */}
      <header className="text-center py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to SyntaxSocial</h1>
        <p className="text-xl mb-6">Connecting people, ideas, and discussions worldwide.</p>
        <Link href={'/forums'}>
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-100">
          Check out our available Forums
        </button>
        </Link>
      </header>

      {/* Forums Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Forums</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Python", slug: "Python", icon: <FaPython className="text-4xl text-blue-500" /> },
            { name: "JavaScript", slug: "JavaScript", icon: <FaJs className="text-4xl text-yellow-500" /> },
            { name: "Next.js", slug: "Next", icon: <FaNodeJs className="text-4xl text-green-500" /> },
            { name: "React", slug: "React", icon: <FaReact className="text-4xl text-blue-400" /> },
            { name: "Java", slug: "Java", icon: <FaJava className="text-4xl text-red-500" /> },
            { name: "C++", slug: "Cpp", icon: <FaCode className="text-4xl text-gray-600" /> },
          ].map((forum) => (
            <Link href={`/forum/${forum.slug}`} key={forum.slug}>
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer flex items-center space-x-4">
                {forum.icon}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{forum.name}</h3>
                  <p className="text-gray-600">Join discussions and share knowledge about {forum.name}.</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}


export const metadata = {
  title: 'Home - SyntaxSocial',
  description: '...',
}
 
