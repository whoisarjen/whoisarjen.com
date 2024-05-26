type Project = {
  title: string
  description: string
  href: string
  imgSrc: string
}

const projectsData: Project[] = [
  {
    title: 'Juicify',
    description: `Juicify.app is not just an ordinary calorie calculator; it’s a AI trainer that teaches you how to independently achieve a body transformation without forcing yourself into restrictive diets.`,
    imgSrc: '/static/images/projects/project-juicify.png',
    href: 'https://juicify.app/Arjen/consumed/2024-05-26',
  },
  {
    title: 'Personal Blog',
    description: `A stylish and engaging personal blog platform designed to share insights, stories, and experiences with a wide audience.`,
    imgSrc: '/static/images/projects/project-arjenworld.png',
    href: 'https://arjenworld.pl',
  },
  {
    title: 'Game Boosting Service',
    description: `A professional game boosting service platform designed to help gamers enhance their gaming experience and achieve their in-game goals.`,
    imgSrc: '/static/images/projects/project-boostera.jpg',
    href: '/static/images/projects/project-boostera.jpg',
  },
  {
    title: 'Personal Trainer',
    description: `A dynamic and user-centric personal trainer platform designed to help clients achieve their fitness goals.`,
    imgSrc: '/static/images/projects/project-personal-trainer.jpg',
    href: '/static/images/projects/project-personal-trainer.jpg',
  },
  {
    title: 'Football Club News',
    description: `A comprehensive football club news platform designed to keep fans informed and engaged.`,
    imgSrc: '/static/images/projects/project-liverpool.png',
    href: '/static/images/projects/project-liverpool.png',
  },
  {
    title: 'Virtual Private Network',
    description: `A secure and user-friendly VPN service platform designed to protect users' online privacy and enhance their internet experience.`,
    imgSrc: '/static/images/projects/project-vpn.png',
    href: '/static/images/projects/project-vpn.png',
  },
]

export default projectsData
