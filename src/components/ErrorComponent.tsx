interface Error {
  close?: () => void
  message: string
  className?: string
}
export default function ErrorComponent({ close, message, className }: Error) {
  return (
    <div className={className}>
      <p>{message}</p>
      <button onClick={close}>Fechar</button>
    </div>
  )
}
