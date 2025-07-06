import type { Activity } from '~/types'

const activities: Activity[] = [
  {
    id: 1,
    name: 'Beginner Yoga',
    description: 'Based on traditional Hatha Yoga and incorporating a scientifically structured sequence, this course emphasizes breath control and proper body alignment.',
    long_description: 'Based on traditional Hatha Yoga and incorporating a scientifically structured sequence, this course emphasizes breath control and proper body alignment. Perfect for those new to yoga practice.',
    image_url: '/images/activities/activity-1.png',
    teacher_ids: [1, 2],
    duration: 60,
    location: 'Studio A',
    schedule: { day: 'Monday', time: '9:00 AM' },
    intensity: 'All Levels',
    capacity: 20,
    is_featured: true,
  },
  {
    id: 2,
    name: 'Gentle Flow Yoga',
    description: 'Building upon alignment fundamentals, this course introduces basic vinyasa sequences with modified sun salutations.',
    long_description: 'Building upon alignment fundamentals, this course introduces basic vinyasa sequences with modified sun salutations. A perfect progression from beginner level yoga.',
    image_url: '/images/activities/activity-2.png',
    teacher_ids: [2, 3],
    duration: 60,
    location: 'Studio B',
    schedule: { day: 'Tuesday', time: '6:00 PM' },
    intensity: 'All Levels',
    capacity: 15,
    is_featured: true,
  },
  {
    id: 3,
    name: 'Hatha Yoga',
    description: 'A classic and gentle approach to yoga, focusing on basic poses and breathing exercises to align and calm your body.',
    long_description: 'Hatha yoga is a traditional yoga practice that focuses on foundational poses (asanas) at a comfortable pace. This class is excellent for beginners, as it provides a solid introduction to yoga postures, breathing techniques, and relaxation, enhancing body awareness and flexibility.',
    image_url: '/images/activities/activity-3.png',
    teacher_ids: [1, 4],
    duration: 60,
    location: 'Studio A',
    schedule: { day: 'Wednesday', time: '10:00 AM' },
    intensity: 'Low',
    capacity: 18,
    is_featured: false,
  },
  {
    id: 4,
    name: 'Restorative Yoga',
    description: 'A deeply relaxing practice that uses props to support the body, allowing for gentle stretching and stress relief.',
    long_description: 'Restorative yoga is a gentle, therapeutic style of yoga that uses props like bolsters, blankets, and blocks to fully support the body in each pose. This allows for deep relaxation, stress reduction, and the release of chronic tension. It is a perfect way to nurture your body and mind.',
    image_url: '/images/activities/activity-4.png',
    teacher_ids: [3, 5],
    duration: 75,
    location: 'Studio C',
    schedule: { day: 'Thursday', time: '7:30 PM' },
    intensity: 'Very Low',
    capacity: 12,
    is_featured: true,
  },
  {
    id: 5,
    name: 'Ashtanga Yoga',
    description: 'A challenging and structured practice that follows a specific sequence of poses, designed to build strength and purify the body.',
    long_description: 'Ashtanga yoga is a disciplined and physically demanding practice that follows a set series of postures. It synchronizes breath with movement to produce an internal heat designed to purify the body. This class is ideal for those seeking a rigorous and transformative yoga experience.',
    image_url: '/images/activities/activity-5.png',
    teacher_ids: [4, 5],
    duration: 90,
    location: 'Studio B',
    schedule: { day: 'Friday', time: '7:00 AM' },
    intensity: 'High',
    capacity: 15,
    is_featured: false,
  },
  {
    id: 6,
    name: 'Yin Yoga',
    description: 'A slow-paced, meditative practice that targets deep connective tissues, with poses held for longer periods.',
    long_description: 'Yin Yoga is a quiet, contemplative practice that targets the deep connective tissues of the body—ligaments, joints, bones, and the deep fascia networks. Poses are held for several minutes at a time, promoting flexibility, circulation, and a meditative state of mind.',
    image_url: '/images/activities/activity-6.png',
    teacher_ids: [1, 3],
    duration: 60,
    location: 'Studio C',
    schedule: { day: 'Saturday', time: '11:00 AM' },
    intensity: 'Low',
    capacity: 20,
    is_featured: true,
  },
  {
    id: 7,
    name: 'Prenatal Yoga',
    description: 'Motherhood Preparation',
    long_description: 'Our Prenatal Yoga classes provide a safe and supportive environment for expectant mothers to practice yoga. The classes are designed to alleviate common pregnancy discomforts, improve circulation, and teach breathing techniques that are beneficial for labor and delivery.',
    image_url: '/images/activities/activity-7.png',
    teacher_ids: [2, 4],
    duration: 60,
    location: 'Studio A',
    schedule: { day: 'Sunday', time: '2:00 PM' },
    intensity: 'Intermediate',
    capacity: 10,
    is_featured: true,
  },
  {
    id: 8,
    name: 'Power Yoga',
    description: 'An intense and dynamic workout that combines traditional yoga poses with high-energy, fitness-oriented flows.',
    long_description: 'Power Yoga is a vigorous, fitness-based approach to vinyasa-style yoga. This class will make you sweat, build cardiovascular health, and tone your entire body. It\'s a powerful workout for both the body and mind, perfect for those who enjoy a challenge.',
    image_url: '/images/activities/activity-8.png',
    teacher_ids: [5],
    duration: 60,
    location: 'Studio B',
    schedule: { day: 'Monday', time: '7:00 PM' },
    intensity: 'High',
    capacity: 15,
    is_featured: true,
  },
]

export default defineEventHandler((event) => {
  const idParam = event.context.params?.id
  if (idParam) {
    const id = parseInt(idParam, 10)
    const activity = activities.find(a => a.id === id)

    if (activity) {
      return activity
    }
    else {
      throw createError({
        statusCode: 404,
        statusMessage: 'Activity Not Found',
      })
    }
  }

  return activities
}) 