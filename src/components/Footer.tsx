import { site } from '../data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          &copy; {year} {site.name}. Built with React and Vite.
        </p>
      </div>
    </footer>
  )
}
