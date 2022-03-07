import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { PDFViewer } from '@react-pdf/renderer';
import dynamic from 'next/dynamic'
// import Pdf from '../components/Pdf'

export default function Home() {

  const Pdf = dynamic(import('../components/Pdf'), { ssr: false });
  return (
  //   <PDFViewer>
  //   <MyDocument />
  // </PDFViewer>
  <>
  <Pdf />

  </>
  )
}
