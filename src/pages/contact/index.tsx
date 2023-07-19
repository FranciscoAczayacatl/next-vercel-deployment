import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function index() {
  return (
    <MainLayout>
      <div className="center">
        <h1>CONTACT</h1>
      </div>
      <div className="grid">
        <Link href="/" className="card">
          <h2>
            Home <span>-&gt;</span>
          </h2>
          <p>
            Ir a Home&nbsp;.
          </p>
        </Link>
      </div>
    </MainLayout>
  )
}

