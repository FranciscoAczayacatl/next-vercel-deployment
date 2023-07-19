import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'
import { DarkLayout } from '../components/layouts/DarkLayout'

export default function AboutPage() {
  return (
    <> 
        <div className="center">
          <h1>ABOUT</h1>
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
    </>
  )
}

AboutPage.getLayout = function getLayout(page: JSX.Element){
  return (
    <MainLayout> 
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}