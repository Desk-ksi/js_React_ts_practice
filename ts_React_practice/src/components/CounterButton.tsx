type Props = {
  onClick(): void,
  label: string,
}

export default function CounterButton({onClick, label}: Props) {
  return(
    <button onClick={onClick} className="btn-sticky">{label}</button>
  )
}