"use client"

import { useState } from 'react'
import { motion } from 'motion/react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ExternalLink, Github, Filter } from 'lucide-react'
import Link from 'next/link'

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  category: string
  demoUrl?: string
  githubUrl?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Exoplanet Detection Using Machine Learning Models Trained on Synthetic Light Curves',
    description: 'Research on how SMOTE can significally improve ML-predicted classifications for exoplanets',
    longDescription: 'A comprehensive report about the performance of well-known ML algorithms with and without data augmentation techniques based on exoplanets from the Kepler mission',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a0c0ff94-e6ca-42f3-8007-2dff7186338a/generated_images/scientific-graph-showing-relative-bright-c94a0aa6-20250716012821.jpg',
    technologies: ['Python', 'Google Colab', 'ML'],
    category: 'Machine Learning',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/ecommerce',
    featured: true
  },
  {
    id: '2',
    title: 'Predicting Cyclone Trajectory and Classification with Time Series Data',
    description: 'A research study on models that predict both trajectory and classification of cyclones in the Atlantic and Pacific',
    longDescription: 'A research study on models that use past cyclone data to predict its trajectory and then classify the current cyclone in timed intervals',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a0c0ff94-e6ca-42f3-8007-2dff7186338a/generated_images/hurricane-cyclone-trajectory-map-showing-f3ed18b6-20250716012830.jpg',
    technologies: ['Python', 'Google Colab', 'ML'],
    category: 'Machine Learning',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/taskmanager'
  },
  {
    id: '3',
    title: 'Object Detection Using a Resource-Limited Device with Machine Learning',
    description: 'An object detection program on a Raspberry Pi that detects objects in both images and video streams',
    longDescription: 'An object detection program backed by YOLOv5 ran on a Raspberry Pi that detects objects in both images and video streams',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a0c0ff94-e6ca-42f3-8007-2dff7186338a/generated_images/raspberry-pi-object-detection-setup-with-1dfee59b-20250716012914.jpg',
    technologies: ['Python', 'Raspberry Pi', 'YOLOv5'],
    category: 'Miscellaneous',
    demoUrl: 'https://docs.google.com/presentation/d/1EtJitJznuKpm0uaRos67Nzg3VegD5v5Am9GKrqqCwho/edit?usp=sharing',
    githubUrl: 'https://github.com/example/weather'
  },
  {
    id: '4',
    title: 'Automated Garbage Collection Robot',
    description: 'Identifies and disposes of garbage solely self-automated',
    longDescription: 'A LEGO Mindstorms EV3 robot that identifies and disposes of garbage using a color sensor and a vacuum mechanism',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a0c0ff94-e6ca-42f3-8007-2dff7186338a/generated_images/advanced-lego-mindstorms-ev3-robot-with--9304a544-20250716012851.jpg',
    technologies: ['LEGO Mindstorms EV3'],
    category: 'Robotics',
    githubUrl: 'https://github.com/example/apigateway'
  },
  {
    id: '5',
    title: 'Chatbot Using Domain Knowledge',
    description: 'A chatbot that provides information about a user-inputted file',
    longDescription: 'A chatbot that formulates answers and references based on user queries about a specific upload',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a0c0ff94-e6ca-42f3-8007-2dff7186338a/generated_images/futuristic-ai-chatbot-interface-with-glo-1ded34b3-20250716012839.jpg',
    technologies: ['Python', 'LangChain'],
    category: 'Miscellaenous',
    demoUrl: 'https://www.youtube.com/watch?v=B2sLZ2WX-Is',
    githubUrl: 'https://github.com/example/banking'
  },
  {
    id: '6',
    title: 'Gyroscopic Self-Balancing Robot',
    description: 'A LEGO Mindstorms EV3 robot that balances on two wheels using a gyroscopic sensor',
    longDescription: 'A LEGO Mindstorms EV3 robot that balances on two wheels using a gyroscopic sensor',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a0c0ff94-e6ca-42f3-8007-2dff7186338a/generated_images/lego-mindstorms-ev3-self-balancing-robot-e5d36121-20250716012902.jpg',
    technologies: ['LEGO Mindstorms EV3'],
    category: 'Robotics',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/analytics'
  }
]

const categories = ['All', 'Machine Learning', 'Robotics', 'Miscellaneous']

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' || project.category === selectedCategory
  )

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work spanning full-stack development, mobile applications, 
            and data-driven solutions. Each project represents a unique challenge solved 
            with modern technologies and best practices.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-300 ${
                selectedCategory === category 
                  ? 'bg-primary text-primary-foreground shadow-lg' 
                  : 'bg-card hover:bg-accent hover:text-accent-foreground border-border'
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className={`group ${project.featured ? 'lg:col-span-2' : ''}`}
            >
              <Card className="bg-card border-border overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0,
                      y: hoveredProject === project.id ? 0 : 20
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center gap-3"
                  >
                    {project.demoUrl && (
                      <Button
                        size="sm"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
                        asChild
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-card/90 backdrop-blur-sm border-border hover:bg-accent hover:text-accent-foreground shadow-lg"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </motion.div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <Badge 
                      variant="secondary" 
                      className="bg-secondary text-secondary-foreground border-border"
                    >
                      {project.category}
                    </Badge>
                  </div>

                  <div className="mb-4 max-h-20 overflow-y-auto scrollbar-thin scrollbar-thumb-muted/60 scrollbar-track-background/30">
                    <p className="text-muted-foreground leading-relaxed">
                      {hoveredProject === project.id ? project.longDescription : project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="bg-muted text-muted-foreground border-border text-xs hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-border">
                    {project.demoUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 bg-card hover:bg-accent hover:text-accent-foreground border-border"
                        asChild
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 bg-card hover:bg-accent hover:text-accent-foreground border-border"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg px-8 py-3"
            asChild
          >
            <Link href="/projects">
              View All Projects
              <ExternalLink className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}