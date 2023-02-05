import dynamic from 'next/dynamic'
const Home = dynamic(() => import('../layouts/Home'), {
  loading: () => 'Loading...',
  ssr: true
})

const Page = ({ images }) => {
   return <Home/>
}

export default Page
