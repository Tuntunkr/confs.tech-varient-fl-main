import { useDarkModeContext } from 'src/contexts/DarkModeContext'

import Link from '../Link'
import Twitter from '../Twitter'
import { TOPICS } from '../config'

import styles from './Footer.module.scss'

const CURRENT_YEAR = new Date().getFullYear()

const Footer = () => {
  const {
    values: { darkModeEnabled },
  } = useDarkModeContext()

  return (
    <footer className={styles.Footer}>
      <HiddenLinks />
      <p className={styles.FooterLinks}>
        <Link url='/conferences/new' routed>
          Add a conference
        </Link>
        <Link url='https://github.com/dotevents/' external>
          Connect on GitHub
        </Link>
        <Link url='https://twitter.com/dotevent1/' external>
          Follow us on Twitter
        </Link>
      </p>
    </footer>
  )
}

const HiddenLinks = () => {
  return (
    <div className='visuallyHidden'>
      {Object.keys(TOPICS).map((topic) => {
        return (
          <p key={topic}>
            <Link routed url={`/${topic}`}>
              {`${topic} conferences in ${CURRENT_YEAR}`}
            </Link>{' '}
            <Link routed url={`/cfp/${topic}`}>
              {`Open call for papers for ${topic} conferences in ${CURRENT_YEAR}`}
            </Link>
          </p>
        )
      })}
    </div>
  )
}

export default Footer
