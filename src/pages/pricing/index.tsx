import { MainLayout } from "../../components/layouts/MainLayout"
import Link from "next/link"


export default function pircingPage() {
  return (
    <MainLayout>
    <div className="center">
      <h1>PRICING</h1>
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
