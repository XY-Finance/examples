import queryString from 'query-string'

export default function Home() {
  const config = {
    fromTokenAddress: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    sourceChainId: '1',
    toTokenAddress: '0x77777777772cf0455fB38eE0e75f38034dFa50DE',
    targetChainId: '1',
    amount: 1,
    slippage: '1',
    orientation: 'portrait',
    theme: 'dark',
    lockmode: 'none',
    pagecolor: null,
    referrer: null
  }
  const url = queryString.stringify(config)
  // amount=1&fromTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&lockmode=none&orientation=portrait&pagecolor&referrer&slippage=1&sourceChainId=1&targetChainId=1&theme=dark&toTokenAddress=0x77777777772cf0455fB38eE0e75f38034dFa50DE

  const src = `https://widget.xy.finance/?${url}`
  // "You can change the iframe size. Recommended settings: width 480, height 700."
  const width = 480
  const height = 700

  return (
    <div>
      <iframe width={width} height={height} src={src} />
    </div>
  )
}
