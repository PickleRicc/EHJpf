import Navigation from '../components/Navigation'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Hi, I'm <span className="highlight">Eric</span>
          </h1>
          <h2 className="text-2xl md:text-4xl mb-8 text-gray-300">
            Designer & Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            I create beautiful and functional digital experiences
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#projects" className="button">
              View My Work
            </a>
            <a href="#contact" className="border border-[var(--primary)] text-[var(--primary)] px-6 py-3 rounded-full hover:bg-[var(--primary)]/10 transition-all duration-300">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-[70vh] py-20 px-4 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            About <span className="highlight">Me</span>
          </h2>
          <div className="space-y-6 text-lg text-gray-300">
            <p>
              I'm a unique blend of athlete and technologist. As a proud alumnus of The Ohio State University
              and an NCAA All-American, I've brought the same dedication and drive from my athletic career
              into the world of technology and business.
            </p>
            <p>
              One of my proudest achievements was competing in the 2020 Olympic Games as a track
              and field athlete — an experience that taught me the value of perseverance, precision, and
              continuous improvement. These principles now fuel my passion for creating innovative digital
              solutions.
            </p>
            <p>
              Today, I channel my competitive spirit into building cutting-edge applications at the
              intersection of Business, Artificial Intelligence, and Web Development. My focus is on
              creating intuitive, powerful tools that leverage the latest in AI technology to solve
              real-world problems!
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <span className="px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full">Business Strategy</span>
              <span className="px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full">Artificial Intelligence</span>
              <span className="px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full">Web Development</span>
              <span className="px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full">Software Architecture</span>
              <span className="px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full">Olympic Athlete</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            My <span className="highlight">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Struxure"
              description="An AI-powered File Mapping System that intelligently analyzes and visualizes file relationships within folders. The system uses advanced AI to understand file contents and creates interactive maps showing connections between files."
              tools={['Next.js', 'Tailwind CSS', 'React', 'OpenAI', 'D3']}
              images={[
                '/projects/struxure/struxure-homepage.png',
                '/projects/struxure/struxure-analyzefiles.png',
                '/projects/struxure/struxure-textmap.png',
                '/projects/struxure/struxure-visualmap.png'
              ]}
              link="https://struxure-app.vercel.app/"
            />
            <ProjectCard 
              title="LabRag"
              description="An advanced AI-powered RAG (Retrieval-Augmented Generation) system for PDF and audio files. Users can engage in natural conversations with their documents, receiving precise feedback and data extraction through AI-driven analysis."
              tools={['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'Pinecone', 'OpenAI']}
              images={[
                '/projects/labrag/labrag-signup.png',
                '/projects/labrag/labrag-chat.png',
                '/projects/labrag/labrag-response.png'
              ]}
              link="https://studyrag.vercel.app/auth/signup"
            />
            <ProjectCard 
              title="StudyLab"
              description="An innovative AI-powered study companion that transforms learning materials into interactive study tools. Students can upload their study materials and instantly receive AI-generated flashcards and practice tests, making exam preparation more efficient and effective."
              tools={['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'Pinecone', 'OpenAI']}
              images={[
                '/projects/studylab/studylab-homepage.png',
                '/projects/studylab/studylab-testexample.png',
                '/projects/studylab/studylab-flashcards.png'
              ]}
              link="#"
            />
            <ProjectCard 
              title="Speed Force Athletics"
              description="A modern business website for Speed Force Athletics, a premier speed training facility in Lakeland, Florida. Features a dynamic gallery showcase and integrated payment processing for training sessions."
              tools={['Next.js', 'React', 'Tailwind CSS', 'Stripe']}
              images={[
                '/projects/speedforce/sfa-homepage.png',
                '/projects/speedforce/sfa-gallery.png'
              ]}
              link="https://www.speedforceathletics.com/"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 px-4 flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Let's <span className="highlight">Connect</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Have a project in mind? Let's talk about it.
          </p>
          <a
            href="mailto:contact@ericdev.com"
            className="button inline-block"
          >
            Email Me
          </a>
        </div>
      </section>
    </main>
  )
}
