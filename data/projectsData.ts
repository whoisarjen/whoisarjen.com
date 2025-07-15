type Project = {
  title: string
  description: string
  href: string
  imgSrc: string
  status: 'Sold' | 'Abandoned' | 'Cooperation' | null
  isHiddenOnHomepage?: boolean
}

const projectsData: Project[] = [
  {
    title: 'Digital Nomad',
    description: `Helps digital nomads find their ideal destination to live and work remotely. Explore the best locations, experience new cultures, and discover your perfect spot to work from anywhere.`,
    imgSrc: '/static/images/projects/project-nomad.png',
    href: 'https://nomad.whoisarjen.com',
    status: null,
  },
  {
    title: 'Deante',
    description: `A collaborative project developed with Deante, a leading Polish manufacturer of kitchen and bathroom fittings.`,
    imgSrc: '/static/images/projects/project-deante.png',
    href: 'https://deante.pl',
    status: 'Cooperation',
  },
  {
    title: 'Juicify',
    description: `Juicify is not just an ordinary calorie calculator; it’s a AI trainer that teaches you how to independently achieve a body transformation without forcing yourself into restrictive diets.`,
    imgSrc: '/static/images/projects/project-juicify.png',
    href: 'https://juicify.whoisarjen.com',
    status: null,
  },
  {
    title: 'Arjenworld',
    description:
      'My blog documenting my life journey and being my SEO strategies experiment place, which was successfully sold.',
    imgSrc: '/static/images/projects/project-arjenworld.png',
    href: 'https://arjenworld.pl',
    status: 'Sold',
    isHiddenOnHomepage: true,
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
