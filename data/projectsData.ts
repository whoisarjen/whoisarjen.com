type Project = {
  title: string
  description: string
  href: string
  imgSrc: string
  status: 'Sold' | 'Abandoned' | null
}

const projectsData: Project[] = [
  {
    title: 'Juicify',
    description: `Juicify.app is not just an ordinary calorie calculator; it’s a AI trainer that teaches you how to independently achieve a body transformation without forcing yourself into restrictive diets.`,
    imgSrc: '/static/images/projects/project-juicify.png',
    href: 'https://github.com/whoisarjen/juicify-open',
    status: 'Abandoned',
  },
  {
    title: 'Personal Blog',
    description: `A stylish and engaging personal blog platform designed to share insights, stories, and experiences with a wide audience.`,
    imgSrc: '/static/images/projects/project-arjenworld.png',
    href: 'https://arjenworld.pl',
    status: 'Sold',
  },
  {
    title: 'Game Boosting Service',
    description: `A professional game boosting service platform designed to help gamers enhance their gaming experience and achieve their in-game goals.`,
    imgSrc: '/static/images/projects/project-boosteria.jpg',
    href: '/static/images/projects/project-boosteria.jpg',
    status: 'Abandoned',
  },
  {
    title: 'Personal Trainer',
    description: `A dynamic and user-centric personal trainer platform designed to help clients achieve their fitness goals.`,
    imgSrc: '/static/images/projects/project-personal-trainer.jpg',
    href: '/static/images/projects/project-personal-trainer.jpg',
    status: 'Abandoned',
  },
  {
    title: 'Football Club News',
    description: `A comprehensive football club news platform designed to keep fans informed and engaged.`,
    imgSrc: '/static/images/projects/project-liverpool.png',
    href: '/static/images/projects/project-liverpool.png',
    status: 'Abandoned',
  },
  {
    title: 'Virtual Private Network',
    description: `A secure and user-friendly VPN service platform designed to protect users' online privacy and enhance their internet experience.`,
    imgSrc: '/static/images/projects/project-vpn.png',
    href: '/static/images/projects/project-vpn.png',
    status: 'Abandoned',
  },
]

export default projectsData
