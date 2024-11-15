'use client'

import { ArrowRight, CheckCircle, Clock, Plus, Sparkles, Star, Trash2, BadgeCheck, X } from 'lucide-react'
import Link from 'next/link'
import { motion, useAnimation, Variants } from 'framer-motion'
import { useEffect, useState } from 'react'
import Head from 'next/head'

import { Button } from '@/components/ui/button'
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
const fadeInVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

const staggerChildren: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const slideInVariants: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 }
}

function TaskCard() {
  const controls = useAnimation()
  const [progress, setProgress] = useState(33)

  useEffect(() => {
    const animateTasks = async () => {
      await controls.start(i => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.2 }
      }))
      await new Promise(resolve => setTimeout(resolve, 1000))
      await controls.start(i => ({
        opacity: i === 0 ? 1 : 0.5,
        x: i === 0 ? 0 : -20,
        transition: { delay: i * 0.1 }
      }))
      setProgress(prev => (prev + 10) % 100)
    }

    animateTasks()
    const interval = setInterval(animateTasks, 5000)
    return () => clearInterval(interval)
  }, [controls])

  return (
    <motion.div 
      className="bg-[#1a1f2e] rounded-lg p-4 text-gray-100 max-w-md mx-auto relative shadow-2xl shadow-blue-900/40"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="flex items-center justify-between mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-xl font-semibold">Marketing Plan Q1</h2>
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
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-200">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>

      <div className="space-y-2">
        {[
          { text: "Review marketing data", completed: true, duration: "40m" },
          { text: "Set SMART goals", completed: true, duration: "35m" },
          { text: "Research competitors", completed: false, duration: "45m" },
          { text: "Define target audience", completed: false, duration: "50m" }
        ].map((task, i) => (
          <motion.div
            key={i}
            custom={i}
            animate={controls}
            initial={{ opacity: 0, x: -20 }}
            className={`flex items-center justify-between p-2 rounded bg-gray-800/50 ${
              task.completed ? 'opacity-50' : ''
            }`}
          >
            <div className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                task.completed ? 'border-green-500 bg-green-500/20' : 'border-gray-500'
              }`}>
                {task.completed && <CheckCircle className="w-3 h-3 text-green-500" />}
              </div>
              <span className="text-sm">{task.text}</span>
            </div>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {task.duration}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function CreateTaskDemo() {
  const [step, setStep] = useState(0)
  const controls = useAnimation()
  const [displayedText, setDisplayedText] = useState("")
  const [showButton, setShowButton] = useState(false)
  const [showTasks, setShowTasks] = useState(false)

  useEffect(() => {
    const animate = async () => {
      const text = "Create Q1 marketing strategy with detailed KPIs"
      setDisplayedText("")
      setShowButton(false)
      setShowTasks(false)
      setStep(0)

      await new Promise(resolve => setTimeout(resolve, 1000))
      setStep(1)

      for (let i = 0; i <= text.length; i++) {
        setDisplayedText(text.slice(0, i))
        await new Promise(resolve => setTimeout(resolve, 30))
      }

      await new Promise(resolve => setTimeout(resolve, 500))
      setStep(2)
      setShowButton(true)

      await new Promise(resolve => setTimeout(resolve, 1000))
      setStep(3)
      setShowButton(false)
      setShowTasks(true)
      
      await new Promise(resolve => setTimeout(resolve, 5000))
      animate()
    }

    animate()
  }, [])

  return (
    <Card className="w-full max-w-sm bg-[#1a1f2e] text-white border-none shadow-2xl shadow-blue-900/30">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Create Task</h2>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-200">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-4">
          <div>
            <Input
              value={displayedText}
              className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
              placeholder="What needs to be done?"
            />
            <div className="h-1 bg-blue-500/20 mt-2 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-500"
                initial={{ width: "0%" }}
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Button className="w-full gap-2">
                <Sparkles className="w-4 h-4" />
                Generate Subtasks
              </Button>
            </motion.div>
          )}

          {showTasks && (
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {[
                "Research market trends",
                "Define target metrics",
                "Create content plan",
                "Set up tracking"
              ].map((task, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-2 rounded bg-gray-800/50"
                >
                  <span className="text-sm">{task}</span>
                  <Clock className="w-4 h-4 text-gray-400" />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Head>
        <title>TaskEase - AI-Powered Task Management</title>
        <meta name="description" content="Transform your workflow with AI-powered task management" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <motion.header 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            TaskEase
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Transform your workflow with AI-powered task management
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </motion.header>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <TaskCard />
          <motion.div 
            className="space-y-6"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              variants={fadeInVariants}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-2">AI-Powered Task Management</h2>
              <p className="text-gray-300">
                Let our AI break down complex projects into manageable tasks,
                estimate durations, and suggest optimal workflows.
              </p>
            </motion.div>
            <motion.div 
              variants={fadeInVariants} 
              className="space-y-4"
              transition={{ duration: 0.5 }}
            >
              {[
                { icon: Sparkles, text: "AI Task Generation" },
                { icon: Clock, text: "Smart Time Estimation" },
                { icon: BadgeCheck, text: "Intelligent Prioritization" }
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="space-y-6 order-2 md:order-1"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              variants={fadeInVariants}
            >
              <h2 className="text-2xl font-bold mb-2">Create Tasks Effortlessly</h2>
              <p className="text-gray-300">
                Simply describe what needs to be done, and watch as TaskEase
                generates a detailed task breakdown with time estimates.
              </p>
            </motion.div>
          </motion.div>
          <div className="order-1 md:order-2">
            <CreateTaskDemo />
          </div>
        </div>
      </div>
    </div>
  )
}

// For Next.js compatibility
export function Home() {
  return <LandingPage />
}