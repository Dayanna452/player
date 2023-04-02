import { HomeView } from '@/view/HomeView'
import { Navbar } from '@/components/Navbar'
import { LayoutMain } from '@/layouts/LayoutMain'

export default function Home () {
  return (
    <LayoutMain>
      <Navbar user={''} />
      <div style={{ margin: 30 }}>
        <HomeView />
      </div>
    </LayoutMain>
  )
}
