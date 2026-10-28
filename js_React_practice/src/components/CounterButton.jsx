export default function CounterButton({onClick, label}) {
  return(
    <button onClick={onClick} className="btn-sticky">{label}</button>
  )
}