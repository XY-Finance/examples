export default function App() {
  const src = 'https://widget.xy.finance'
  // const src = 'http://localhost:5002'

  return (
    <div>
      <iframe width={480} height={700} src={src} />
    </div>
  )
}
