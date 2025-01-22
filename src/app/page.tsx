import { Home } from '@/templates/home'

async function getStaticData() {
  return {
    heading: 'olha eu aqui'
  }
}

export default async function Page() {
  const staticData = await getStaticData()
  return <Home {...staticData} />
}
