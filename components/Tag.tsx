import { Link } from 'i18n/navigation'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 text-sm font-medium uppercase text-sky-500 hover:text-sky-400"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
