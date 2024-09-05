import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">Helen Feeney Portfolio</span>
          {/* this is where you can put a logo*/}
          <span className="font-bold text-xl">HF</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#skills">
            Skills
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Helen Feeney
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Agile Business Analyst | Technical Writer | Open Source Contributor
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#contact"
                >
                  Hire Me
                </Link>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-800 bg-black px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#projects"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hello, I'm Helen!</h2>
            <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I am on a journey of learning everything Web3 nd DevRel. 
              Here you can find some previous projects of mine and the various things I'm interested in! 
              Please note that this website is in flux as I continue to learn and add to it.
            </p>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Projects</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {[1, 2, 3].map((project) => (
                <div key={project} className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <Image
                    alt="Project preview"
                    className="aspect-video overflow-hidden rounded-t-lg object-cover"
                    height="200"
                    src="/placeholder.svg"
                    width="400"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">Project {project}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      A brief description of project {project} and its key features.
                    </p>
                    <Button className="mt-4" variant="outline">
                      View Project
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Skills</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {["JavaScript", "React", "Node.js", "Python", "SQL", "AWS"].map((skill) => (
                <div key={skill} className="flex items-center space-x-4 rounded-lg border p-4">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  <div className="font-semibold">{skill}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Connect with Me</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <p className="text-gray-500 dark:text-gray-400">
                  Feel free to reach out to me for any inquiries or collaboration opportunities.
                </p>
                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-500 hover:text-gray-600">
                    <Github className="h-6 w-6" />
                    <span className="sr-only">Github</span>
                  </Link>
                  <Link href="#" className="text-gray-500 hover:text-gray-600">
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="#" className="text-gray-500 hover:text-gray-600">
                    <Twitter className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href="#" className="text-gray-500 hover:text-gray-600">
                    <Mail className="h-6 w-6" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </div>
              <form className="space-y-4">
                <Input placeholder="Name" />
                <Input placeholder="Email" type="email" />
                <Textarea placeholder="Message" />
                <Button>Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 Helen Feeney. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}