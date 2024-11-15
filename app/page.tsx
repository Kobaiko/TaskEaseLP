import { LandingPageComponent } from "@/components/landing-page"
import Head from "next/head"

export default function Page() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPageComponent />
    </>
  )
}