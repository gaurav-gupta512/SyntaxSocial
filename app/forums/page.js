import React from 'react'
import { 
  FaPython, 
  FaJs, 
  FaReact, 
  FaJava, 
  FaCode, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaDatabase, 
  FaGitAlt, 
  FaDocker, 
  FaAngular, 
  FaVuejs, 
  FaAws, 
  FaLinux 
} from "react-icons/fa";
// import { Button } from "@/components/ui/button"
import Link from 'next/link';

const topics = [
  { 
    text: "Python", 
    img: <FaPython className="text-4xl text-blue-500" />, 
    description: "Join discussions and share knowledge about Python, from data science to web development.",
    slug: "Python" 
  },
  { 
    text: "JavaScript", 
    img: <FaJs className="text-4xl text-yellow-500" />, 
    description: "Talk about JavaScript, the language of the web and beyond.",
    slug: "JavaScript" 
  },
  { 
    text: "Next.js", 
    img: <FaNodeJs className="text-4xl text-green-500" />, 
    description: "Explore Next.js, the React framework for building fast and scalable web apps.",
    slug: "Next" 
  },
  { 
    text: "React", 
    img: <FaReact className="text-4xl text-blue-400" />, 
    description: "Dive into React, the popular library for building user interfaces.",
    slug: "React" 
  },
  { 
    text: "Java", 
    img: <FaJava className="text-4xl text-red-500" />, 
    description: "Share insights and solutions about Java, from enterprise apps to Android development.",
    slug: "Java" 
  },
  { 
    text: "C++", 
    img: <FaCode className="text-4xl text-gray-600" />, 
    description: "Discuss C++, the powerful language for systems programming and performance-critical applications.",
    slug: "Cpp" 
  },
  { 
    text: "HTML5", 
    img: <FaHtml5 className="text-4xl text-orange-500" />, 
    description: "Learn and share tips about HTML5, the backbone of web pages.",
    slug: "HTML5" 
  },
  { 
    text: "CSS3", 
    img: <FaCss3Alt className="text-4xl text-blue-600" />, 
    description: "Explore CSS3 techniques for designing modern and responsive websites.",
    slug: "CSS3" 
  },
  { 
    text: "Git", 
    img: <FaGitAlt className="text-4xl text-orange-600" />, 
    description: "Master version control and collaborate effectively using Git.",
    slug: "Git" 
  },
  { 
    text: "Linux", 
    img: <FaLinux className="text-4xl text-black" />, 
    description: "Explore Linux, the open-source operating system powering the world.",
    slug: "Linux" 
  }
];
 
const page = () => {

  return (
    // <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 bg-gray-400'>
    <div className="inset-0 -z-10 min-h-screen min-w-screen px-4 bg-white [background:radial-gradient(125%_200%_at_50%_50%,#fff_15%,#63e_69%)] sm:px-6 lg:px-8 pb-10">

        <h2 className='py-5 font-bold text-2xl '>Discussion Forums</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic)=>{ 
            return <Link className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer flex items-center space-x-4" href={`/forum/${topic.slug}`} key={topic.slug}>
            {topic.img}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{topic.text}</h3>
              <p className="text-gray-600">{topic.description}</p>
            </div>      
</Link>
          })}
        </div>
    </div>
  )
}

export default page

export const metadata = {
  title: 'Forums - SyntaxSocial',
  description: '...',
}
