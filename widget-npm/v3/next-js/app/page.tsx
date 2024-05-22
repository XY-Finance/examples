'use client' // Tell Next.js this page is a client component 👈🏽

import dynamic from 'next/dynamic'
import { type Theme, type Config } from '@xyfinance/widget'

const config: Config = {
  disabledChains: [],
  fromInput: '0.123456789909099999999999999976576',
  fromToken: {
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    chainId: '1'
  },
  toToken: {
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    chainId: '56'
  },
  featuredTokens: [
    {
      address: '0x666666661f9B6D8c581602AAa2f76cbead06C401',
      chainId: '56'
    }
  ]
}

const theme: Theme = {
  mode: 'light',
  fontFamily: 'proxima-nova',
  borderRadius: {
    container: '12px',
    inner: '8px',
    button: '32px'
  },
  colors: {
    primary: '#277EEC',
    gradient: ['#277EEC', '#1499E4']
  },
  components: {
    button: {
      variant: 'gradient'
    }
  }
}

const Widget = dynamic(
  () => import('@xyfinance/widget').then((module) => module.Widget),
  {
    ssr: false
  }
)

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        margin: '0px auto'
      }}
    >
      <div
        style={{
          width: '480px'
        }}
      >
        <Widget config={config} theme={theme} />
      </div>
    </div>
  )
}
