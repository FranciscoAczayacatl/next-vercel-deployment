import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function HomePage() {
  return (
    <MainLayout>
        <div className="center">
          <h1>HOME</h1>
        </div>
        <div className="grid">
          <Link className="card" href='/about'>
            <h2>
              About <span>-&gt;</span>
            </h2>
            <p>
              Ir a about&nbsp;.
            </p>
          </Link>
          <Link   href="/contact" className="card">
            <h2>
              Contact <span>-&gt;</span>
            </h2>
            <p>
              Ir a Contact&nbsp;.
            </p>
          </Link>
        </div>
    </MainLayout>

  )
}
