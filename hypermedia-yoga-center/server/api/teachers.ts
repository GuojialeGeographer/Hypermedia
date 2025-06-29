import type { Teacher } from '~/types'

const teachers: Teacher[] = [
  {
    id: 1,
    name: 'Ashley Lorenzo',
    image_url: '/images/team/ashley-lorenzo.png',
    specialization: 'Gentle Flow Yoga',
    short_bio: "Ashley Lorenzo is an experienced yoga instructor who started practicing yoga in 2009. She holds a 500-hour Yoga Alliance certification and specializes in Hatha Yoga, Vinyasa Yoga, and meditation techniques.",
  },
  {
    id: 2,
    name: "Liam O'Connell",
    image_url: '/images/team/teacher-2.png',
    specialization: 'Ashtanga Yoga',
    short_bio: "Liam brings a disciplined yet gentle approach to his Ashtanga yoga sessions. His background in martial arts informs his focus on alignment and mental clarity, making his classes both challenging and rewarding.",
  },
  {
    id: 3,
    name: 'Seraphina Rossi',
    image_url: '/images/team/teacher-3.png',
    specialization: 'Restorative Yoga',
    short_bio: "Seraphina's restorative yoga classes are a journey into deep relaxation. With a focus on healing and self-care, she creates a nurturing space for students to release tension and find inner peace.",
  },
  {
    id: 4,
    name: 'Kenji Tanaka',
    image_url: '/images/team/teacher-4.png',
    specialization: 'Zen Meditation',
    short_bio: 'A master of Zen meditation and yoga, Kenji infuses his classes with mindfulness and philosophical insights. His teachings encourage students to connect with their inner wisdom and cultivate a peaceful mind.',
  },
  {
    id: 5,
    name: 'Isabella Costa',
    image_url: '/images/team/teacher-5.png',
    specialization: 'Power Yoga',
    short_bio: "Isabella's classes are a vibrant celebration of movement and life. Specializing in Power Yoga and creative Vinyasa sequences, she empowers students to build strength, confidence, and a joyful connection to their bodies.",
  },
  {
    id: 6,
    name: 'Sophia Chen',
    image_url: '/images/team/teacher-6.png',
    specialization: 'Hatha Yoga',
    short_bio: "Sophia combines traditional Hatha yoga with modern therapeutic techniques. Her gentle yet effective approach helps students build flexibility, reduce stress, and develop a deeper understanding of their bodies.",
  },
]

export default defineEventHandler((event) => {
  const idParam = event.context.params?.id
  if (idParam) {
    const id = parseInt(idParam, 10)
    const teacher = teachers.find(t => t.id === id)

    if (teacher) {
      return teacher
    }
    else {
      throw createError({
        statusCode: 404,
        statusMessage: 'Teacher Not Found',
      })
    }
  }

  return teachers
}) 