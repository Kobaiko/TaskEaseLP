'use client'

import Script from 'next/script'

export default function GoogleAnalytics() {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-8TRGK63WET" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-8TRGK63WET');
        `}
      </Script>
    </>
  )
}
