'use client'

import { ArrowRight, CheckCircle, Clock, Plus, Star, Trash2, BadgeCheck, X } from 'lucide-react'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'
import Head from 'next/head'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const slideIn = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 }
}

function TaskCard() {
  const controls = useAnimation()
  const [progress, setProgress] = useState(33);

  const animateTasks = useCallback(async () => {
    await controls.start(i => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2 }
    }));
    await new Promise(resolve => setTimeout(resolve, 1000));
    await controls.start(i => ({
      opacity: i === 0 ? 1 : 0.5,
      x: i === 0 ? 0 : -20,
      transition: { delay: i * 0.1 }
    }));
    setProgress(33);
  }, [controls]);

  useEffect(() => {
    const interval = setInterval(animateTasks, 5000);
    animateTasks(); // Run once immediately
    return () => clearInterval(interval);
  }, [animateTasks]);

  const tasks = [
    { text: "Review previous year's marketing performance data for Q1 and Q4", completed: true, duration: "40m" },
    { text: "Set SMART goals for Q1 and Q4 campaigns", completed: true, duration: "35m" },
    { text: "Conduct market research on competitors' strategies", completed: true, duration: "45m" },
    { text: "Define target audience personas for Q1 and Q4", completed: true, duration: "50m" },
    { text: "Create a content calendar outlining campaign milestones", completed: false, duration: "40m" },
    { text: "Draft initial marketing strategy documents for Q1 and Q4", completed: false, duration: "50m" },
    { text: "Brainstorm creative campaign concepts and themes", completed: false, duration: "45m" }
  ];

  return (
    <motion.div 
      className="bg-[#1a1f2e] rounded-lg p-4 text-gray-100 max-w-md mx-auto relative shadow-2xl shadow-blue-900/40"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="flex items-center justify-between mb-2"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-xl font-semibold">Marketing plan for Q1 and Q4</h2>
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 rounded-full border-4 border-blue-500/20" />
            <motion.div 
              className="absolute inset-0 rounded-full border-4 border-blue-500"
              style={{ 
                clipPath: `inset(0 ${100 - progress}% 0 0)`,
                transform: 'rotate(-90deg)',
                transformOrigin: 'center'
              }}
              initial={{ rotate: -90 }}
              animate={{ rotate: 90 }}
              transition={{ duration: 1, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
            />
            <span className="absolute inset-0 flex items-center justify-center text-xs">{progress}%</span>
          </div>
          <div className="text-gray-400">
            <Trash2 className="h-4 w-4" />
          </div>
        </div>
      </motion.div>
      <motion.p 
        className="text-sm text-gray-400 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Marketing plan for Q1 and Q4 for Taskease
      </motion.p>
      
      <div className="space-y-2 max-h-64 overflow-y-auto pr-2 relative">
        {tasks.map((task, index) => (
          <motion.div 
            key={index}
            custom={index}
            animate={controls}
            initial={{ opacity: 0, x: -20 }}
            className={`bg-[#252b3d] rounded-lg p-2 flex items-center justify-between`}
          >
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className={`h-4 w-4 ${task.completed ? 'text-blue-500' : 'text-gray-500'}`} />
              <span className={task.completed ? '' : 'line-through'}>{task.text}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-400 text-xs">
              <Clock className="h-3 w-3" />
              <span>{task.duration}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="flex items-center gap-2 text-blue-400 mt-4 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Plus className="h-3 w-3" />
        <span>Add Subtask</span>
      </motion.div>

      <motion.div 
        className="flex items-center justify-between mt-4 text-gray-400 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          <span>100m remaining</span>
        </div>
        <span>Total: 200m</span>
      </motion.div>
    </motion.div>
  )
}

function CreateTaskDemo() {
  const [step, setStep] = useState(0)
  const controls = useAnimation()

  const title = "Marketing plan for Q1"
  const description = "Create a marketing plan for Q1, with KPIs and channels"
  const [displayedTitle, setDisplayedTitle] = useState("")
  const [displayedDescription, setDisplayedDescription] = useState("")
  const [showGenerateButton, setShowGenerateButton] = useState(false)
  const [showSubtasks, setShowSubtasks] = useState(false)

  const subtasks = [
    { text: "Conduct market research to identify target demographics and industry trends", duration: "45m" },
    { text: "Define campaign objectives and set measurable goals (KPIs)", duration: "30m" },
    { text: "Brainstorm and outline key messaging points and thematic approach", duration: "50m" },
    { text: "Research and select appropriate marketing channels for Q1 campaigns", duration: "40m" }
  ]

  const animate = useCallback(async () => {
    // Reset
    setDisplayedTitle("")
    setDisplayedDescription("")
    setShowGenerateButton(false)
    setShowSubtasks(false)
    setStep(0)
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Type title
    setStep(1)
    for (let i = 0; i <= title.length; i++) {
      setDisplayedTitle(title.slice(0, i))
      await new Promise(resolve => setTimeout(resolve, 50))
    }
    await new Promise(resolve => setTimeout(resolve, 500))

    // Type description
    setStep(2)
    for (let i = 0; i <= description.length; i++) {
      setDisplayedDescription(description.slice(0, i))
      await new Promise(resolve => setTimeout(resolve, 30))
    }
    await new Promise(resolve => setTimeout(resolve, 500))

    // Show Generate Subtasks button
    setStep(3)
    setShowGenerateButton(true)
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Show subtasks
    setStep(4)
    setShowGenerateButton(false)
    setShowSubtasks(true)
    await controls.start("visible")
    await new Promise(resolve => setTimeout(resolve, 10000))
    animate()
  }, [controls, title, description]);

  useEffect(() => {
    animate()
  }, [animate, controls, title, description])

  return (
    <div className="w-full max-w-sm bg-[#1a1f2e] rounded-lg shadow-2xl shadow-blue-900/30 overflow-hidden">
      <div className="p-2">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-white">Create New Task</h2>
          <X className="h-3 w-3 text-gray-400 cursor-pointer" />
        </div>

        <div className="space-y-2">
          <div>
            <label htmlFor="task-title" className="block text-sm text-gray-300 mb-1">
              Task Title
            </label>
            <div className="bg-[#252b3d] rounded-lg p-2 min-h-[32px]">
              <span id="task-title" className="text-white text-sm">{displayedTitle}</span>
              {step === 1 && <span className="animate-pulse">|</span>}
            </div>
          </div>

          <div>
            <label htmlFor="task-description" className="block text-sm text-gray-300 mb-1">
              Description
            </label>
            <div className="bg-[#252b3d] rounded-lg p-2 min-h-[64px]">
              <span id="task-description" className="text-white text-sm">{displayedDescription}</span>
              {step === 2 && <span className="animate-pulse">|</span>}
            </div>
          </div>

          {showGenerateButton && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white h-8 text-sm"
                variant="default"
              >
                Generate Subtasks
              </Button>
            </motion.div>
          )}

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: showSubtasks ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-sm text-gray-300 mb-1">Subtasks</div>
            <motion.div 
              className="space-y-1"
              initial="hidden"
              animate={showSubtasks ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {subtasks.map((subtask, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="bg-[#252b3d] rounded-lg p-2 flex items-center justify-between group"
                >
                  <span className="text-white text-xs">{subtask.text}</span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-gray-400">
                      <Clock className="h-3 w-3" />
                      <span className="text-xs">{subtask.duration}</span>
                    </div>
                    <Trash2 className="h-3 w-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" />
                  </div>
                </motion.div>
              ))}

              <div className="flex gap-1">
                <Input 
                  className="flex-1 bg-[#252b3d] border-0 text-white placeholder:text-gray-500 h-8 text-xs"
                  placeholder="Subtask"
                />
                <Input 
                  className="w-16 bg-[#252b3d] border-0 text-white placeholder:text-gray-500 h-8 text-xs"
                  placeholder="Min"
                />
                <Button 
                  size="icon"
                  className="bg-[#252b3d] hover:bg-[#2d344a] text-white h-8 w-8"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-2 flex justify-end gap-1">
          <Button 
            variant="outline" 
            className="text-black border-gray-600 hover:bg-gray-700/50 px-2 py-1 text-xs"
          >
            Cancel
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 text-xs">
            Create Task
          </Button>
        </div>
      </div>
    </div>
  )
}

function HowItWorks() {
  return (
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-[1fr,1.2fr] lg:gap-8 items-center">
        <div className="w-full max-w-sm mx-auto">
          <CreateTaskDemo />
        </div>
        
        <motion.div 
          className="space-y-4"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <motion.div variants={fadeIn}>
            <h3 className="text-xl font-bold mb-2">How TaskEase Works</h3>
            <p className="text-sm text-gray-500 mb-3">
              Transform your projects into manageable tasks with our AI-powered system
            </p>
            <ul className="space-y-2">
              {[
                { title: "Describe Your Task", description: "Simply enter your task title and description - be as detailed as you'd like" },
                { title: "AI Generates Subtasks",
                  description: "Our AI analyzes your task and breaks it down into logical, actionable subtasks" },
                { title: "Time Estimates",
                  description: "Each subtask comes with an AI-generated time estimate to help you plan better" },
                { title: "Track Progress",
                  description: "Monitor your progress as you complete each subtask and stay on schedule" }
              ].map((step, index) => (
                <motion.li key={index} className="flex gap-2" variants={slideIn}>
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-violet-600/20 flex items-center justify-center">
                    <span className="text-violet-600 text-xs font-medium">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">{step.title}</h4>
                    <p className="text-xs text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

function FAQSection() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-[#F8F8F8]">
      <div className="container px-4 md:px-6">
        <motion.h2 
          className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="what-is" className="border-t border-gray-200">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                What is TaskEase?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg">
                TaskEase is an AI-powered task management platform that helps you break down complex projects into manageable subtasks, making project planning and execution more efficient.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="how-works" className="border-t border-gray-200">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                How does TaskEase use AI?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg">
                TaskEase uses advanced AI algorithms to analyze your project descriptions and automatically generate a list of subtasks, complete with time estimates for each task.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="accuracy" className="border-t border-gray-200">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                How accurate are the AI-generated time estimates?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg">
                Our AI continuously learns and improves its estimations based on real-world data. While not perfect, many users find the estimates to be surprisingly accurate and helpful for planning.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

export function LandingPageComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 scroll-smooth">
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <div className="w-full py-2 bg-white border border-gray-200 rounded-full px-4 mx-auto my-4 shadow-sm max-w-[95%] sm:max-w-6xl">
        <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
          <Link className="flex items-center gap-0.5" href="#">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
            >
              <defs>
                <filter id="inner-shadow-header">
                  <feOffset dx="0" dy="2" />
                  <feGaussianBlur stdDeviation="1.5" result="offset-blur" />
                  <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
                  <feFlood floodColor="black" floodOpacity="0.9" result="color" />
                  <feComposite operator="in" in="color" in2="inverse" result="shadow" />
                  <feComposite operator="over" in="shadow" in2="SourceGraphic" />
                </filter>
              </defs>
              <path
                d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                fill="#7C3AED"
                filter="url(#inner-shadow-header)"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xl font-bold">TaskEase</span>
          </Link>
          <nav className="hidden sm:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Testimonials
            </Link>
            <Link href="#faq" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center">
            <Link
              href="https://app.gettaskease.com"
              className="inline-flex items-center justify-center rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <main className="flex-1">
        <section className="w-full py-8 md:py-16 lg:py-24 xl:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-[95%] sm:max-w-6xl">
            <motion.div 
              className="flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:space-x-8"
              initial="initial"
              animate="animate"
              variants={staggerChildren}
            >
              <motion.div className="space-y-4 text-center md:text-left md:w-1/2" variants={fadeIn}>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl xl:text-6xl/none">
                  Transform Big Projects into
                  <span className="text-violet-600"> Manageable Steps</span>
                </h1>
                <p className="mx-auto md:mx-0 max-w-[600px] text-gray-500 md:text-xl">
                  TaskEase uses AI to break down your complex tasks into simple, actionable subtasks. Get more done with less stress.
                </p>
                <div className="flex justify-center md:justify-start">
                  <Link href="https://app.gettaskease.com" className="inline-block">
                    <Button className="bg-violet-600 hover:bg-violet-700 text-white">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
              <motion.div className="md:w-1/2" variants={fadeIn}>
                <TaskCard />
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="features" className="w-full py-8 md:py-16 lg:py-24 bg-white">
          <HowItWorks />
        </section>

        <section id="testimonials" className="w-full py-8 md:py-16 lg:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <motion.h2 
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12"
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              What Our Users Say
            </motion.h2>
            <motion.div 
              className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  name: "Alex Johnson",
                  role: "Project Manager",
                  course: "Task Management Pro",
                  avatar: "https://i.pravatar.cc/150?img=1",
                  content: "TaskEase has revolutionized how we manage projects. The AI-powered task breakdown is incredible - it's like having a senior project manager guiding you through complex projects.",
                  verified: true
                },
                {
                  name: "Sarah Lee",
                  role: "Team Leader",
                  course: "Team Collaboration Suite",
                  avatar: "https://i.pravatar.cc/150?img=32",
                  content: "I really enjoyed using TaskEase for our team projects. The automated task breakdown and time estimation features have made our planning so much more accurate.",
                  verified: true
                },
                {
                  name: "Michael Chen",
                  role: "Startup Founder",
                  course: "Startup Efficiency Bundle",
                  avatar: "https://i.pravatar.cc/150?img=3",
                  content: "After trying various project management tools, I felt most solutions were too mechanical and lacked intelligence. TaskEase's AI-powered approach has transformed how I handle multiple projects.",
                  verified: true
                },
                {
                  name: "Emily Rodriguez",
                  role: "Marketing Director",
                  course: "Campaign Management Toolkit",
                  avatar: "https://i.pravatar.cc/150?img=47",
                  content: "TaskEase has streamlined our marketing campaigns. The ability to break down complex projects into manageable tasks has improved our team's productivity significantly.",
                  verified: true
                }
              ].map((testimonial, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Avatar className="h-10 w-10 border">
                          <AvatarImage src={testimonial.avatar} alt={`${testimonial.name}'s avatar`} />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <div className="flex items-center">
                            <h3 className="font-semibold">{testimonial.name}</h3>
                            {testimonial.verified && (
                              <BadgeCheck className="h-4 w-4 ml-1 text-blue-500" aria-label="Verified user" />
                            )}
                          </div>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                          <p className="text-xs text-gray-400">{testimonial.course}</p>
                        </div>
                      </div>
                      <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                        {testimonial.content}
                      </p>
                      <div className="flex mt-4" aria-label={`Rating: 5 out of 5 stars`}>
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <FAQSection />

        <motion.section 
          className="w-full py-8 md:py-16 lg:py-24 bg-violet-600 text-white"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Workflow?</h2>
              <p className="max-w-[600px] text-violet-100 md:text-xl">
                Join thousands of satisfied users who have revolutionized their project management with TaskEase.
              </p>
              <Link href="https://app.gettaskease.com" className="inline-block">
                <Button className="bg-white text-violet-600 hover:bg-violet-100">
                  Start Your Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="container flex flex-col gap-2 py-10 px-4 md:px-6 md:h-24 md:flex-row md:items-center md:justify-between md:py-0">
          <Link className="flex items-center gap-2" href="#">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
            >
              <defs>
                <filter id="inner-shadow-footer">
                  <feOffset dx="0" dy="2" />
                  <feGaussianBlur stdDeviation="1.5" result="offset-blur" />
                  <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
                  <feFlood floodColor="black" floodOpacity="0.9" result="color" />
                  <feComposite operator="in" in="color" in2="inverse" result="shadow" />
                  <feComposite operator="over" in="shadow" in2="SourceGraphic" />
                </filter>
              </defs>
              <path
                d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                fill="#7C3AED"
                filter="url(#inner-shadow-footer)"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-lg font-bold">TaskEase</span>
          </Link>
          <p className="text-xs text-gray-500 dark:text-gray-400"> 2024 TaskEase. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="/terms-of-use">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="/privacy-policy">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}