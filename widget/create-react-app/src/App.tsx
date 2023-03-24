import { XSwapWidget } from '@xyfinance/widget'
import '@xyfinance/widget/dist/style.css'

const widgetConfig = {
  defaultChain: '1',
  disabledChains: ['1'],
  slippage: '5.1',
  fromInput: '12.345',
  referrer: '0xFD19727868A8197F42e7a52d024374598F62953B',
  fromToken: {
    address: '0x444444443b0fcb2733b93f23c910580fba52fffa',
    chainId: '250'
  },
  toToken: {
    address: '0x55555555a687343c6ce28c8e1f6641dc71659fad',
    chainId: '137'
  },
  featuredTokens: [
    {
      address: '0x666666661f9B6D8c581602AAa2f76cbead06C401',
      chainId: '56'
    }
    // {
    //   address: '0x55555555a687343c6ce28c8e1f6641dc71659fad',
    //   chainId: '137'
    // },
    // {
    //   address: '0x444444443b0fcb2733b93f23c910580fba52fffa',
    //   chainId: '250'
    // }
  ]
}

function App() {
  return (
    <div style={{ width: '480px', margin: '0 auto' }}>
      <XSwapWidget config={widgetConfig} />
    </div>
  )
}

export default App
