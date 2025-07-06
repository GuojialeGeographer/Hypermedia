import type { Teacher } from '~/types'

export const teachers: Teacher[] = [
  {
    id: 1,
    name: 'Ashley Lorenzo',
    slug: 'ashley-lorenzo',
    image: '/images/team/ashley-lorenzo.png',
    bio: 'Ashley Lorenzo is an experienced yoga instructor who started practicing yoga in 2009. In 2012, she obtained her yoga teacher certification in the United States and has since deepened her expertise through studies in India and Southeast Asia. She holds a 500-hour Yoga Alliance certification and specializes in Hatha Yoga, Vinyasa Yoga, and meditation techniques. Her teaching integrates yoga postures, meditation, and breathwork, guiding students to achieve balance in body, mind, and spirit. She is currently a full-time instructor at Georgia Yoga Academy and excels in teaching Gentle Flow, Yoga for Athletes, and Meditation.',
    teachingStyle: 'Gentle, athletic, and mindful, focusing on the connection between breath and movement.',
    yogaPhilosophy: 'Yoga is a path to self-discovery and inner peace. My goal is to help students find their own strength and balance on and off the mat.',
    courses: ['Gentle Flow', 'Yoga for Athletes', 'Meditation Basics'],
  },
  {
    id: 2,
    name: 'Elena Cheung',
    slug: 'elena-cheung',
    image: '/images/team/teacher-2.png',
    bio: 'Elena Cheung is a movement specialist from Seattle with a Yoga Medicine certification and an extensive background in anatomy and biomechanics. She is dedicated to helping students understand their bodies and prevent injuries through precise alignment and mindful practice. Her classes are both challenging and educational, empowering students to move with greater awareness and confidence.',
    teachingStyle: 'Her classes integrate precise anatomical knowledge with yoga philosophy, making them especially suitable for beginners and those looking to deepen their practice safely.',
    yogaPhilosophy: 'Yoga is a journey of self-exploration, and everyone can find a practice that suits them. Through my teaching, I aim to help students build a sustainable and intelligent practice that lasts a lifetime.',
    courses: ['Beginner Yoga Course Introduction'],
  },
  {
    id: 3,
    name: 'Georgia Weibel',
    slug: 'georgia-weibel',
    image: '/images/team/teacher-3.png',
    bio: 'Georgia Weibel has been practicing yoga for over 15 years and is a certified instructor in both Hatha and Vinyasa styles. She is known for her warm and encouraging teaching style, creating a welcoming environment for students of all levels. Her classes emphasize finding joy in movement and cultivating a positive relationship with one\'s body.',
    teachingStyle: 'Creative, flowing, and uplifting, with a focus on alignment and breath synchronization.',
    yogaPhilosophy: 'Yoga is a celebration of life. I believe in creating a space where students can explore their potential, embrace their imperfections, and connect with their inner joy.',
    courses: ['Vinyasa Flow', 'Hatha for All Levels', 'Joyful Movement Workshop'],
  },
  {
    id: 4,
    name: 'Jivana Heyman',
    slug: 'jivana-heyman',
    image: '/images/team/teacher-4.png',
    bio: 'Jivana Heyman is the founder of Accessible Yoga and an expert in making yoga inclusive for all body types and abilities. With decades of experience, he specializes in gentle and restorative practices that promote healing and well-being. He has trained countless teachers and is a leading voice in the movement for accessible yoga worldwide.',
    teachingStyle: 'Accessible, compassionate, and adaptive, using props and modifications to support every student.',
    yogaPhilosophy: 'Yoga is for every body. My mission is to make the healing benefits of yoga accessible to anyone who seeks them, regardless of physical ability or background.',
    courses: ['Accessible Yoga', 'Restorative Yoga & Healing', 'Chair Yoga'],
  },
  {
    id: 5,
    name: 'Tamika Caston-Miller',
    slug: 'tamika-caston-miller',
    image: '/images/team/teacher-5.png',
    bio: 'Tamika Caston-Miller is a prenatal and postnatal yoga specialist who provides nurturing and empowering support for mothers on their journey. Her classes are designed to help women connect with their bodies, prepare for childbirth, and recover with strength and grace. She creates a safe and supportive community for expectant and new mothers.',
    teachingStyle: 'Nurturing, empowering, and community-focused, with a specialization in prenatal and postnatal care.',
    yogaPhilosophy: 'Yoga is a powerful tool for navigating the transformations of motherhood. I am here to support and empower women through every stage of this beautiful journey.',
    courses: ['Prenatal Yoga', 'Postnatal Recovery', 'Mom & Baby Yoga'],
  },
  {
    id: 6,
    name: 'Vytas Baskauskas',
    slug: 'vytas-baskauskas',
    image: '/images/team/teacher-6.png',
    bio: 'Vytas Baskauskas is a highly respected yoga and movement instructor known for his challenging and athletic teaching style. With a background in mathematics and professional sports, he brings a unique analytical and disciplined approach to his classes. He encourages students to push their limits while maintaining mindfulness and proper form.',
    teachingStyle: 'Athletic, disciplined, and challenging, with a focus on building strength and mental endurance.',
    yogaPhilosophy: 'The body is capable of amazing things. Through disciplined practice, we can unlock our physical and mental potential, transforming our lives in the process.',
    courses: ['Power Yoga', 'Advanced Vinyasa', 'Handstand Workshop'],
  },
]

export default defineEventHandler((event) => {
  const slug = event.context.params?.slug

  if (slug) {
    const teacher = teachers.find(t => t.slug === slug)

    if (teacher) {
      return teacher
    }
    else {
      throw createError({
        statusCode: 404,
        statusMessage: 'Teacher not found',
      })
    }
  }

  return teachers
}) 