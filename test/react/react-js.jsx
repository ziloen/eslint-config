const a = `${[]}`
const b = name

export default function App() {
  const num = [].length
  const bool = !!num
  const str = String(num)
  
  return (
    <div>
      {num && <div></div>}
      {str && <div></div>}
      {bool && <div></div>}
      <button></button>
    </div>
  )
}