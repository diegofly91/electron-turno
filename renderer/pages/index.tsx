import { useEffect } from 'react'
import Layout from '../components/Layout'
import DocumentComponent from '@/components/Document/DocumentComponent';

const IndexPage = () => {
  
  return (
    <Layout title="Home | Next.js + TypeScript + Electron Example">
      <DocumentComponent />
    </Layout>
  )
}

export default IndexPage
