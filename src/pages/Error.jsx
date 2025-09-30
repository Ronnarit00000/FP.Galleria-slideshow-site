export default function Error({message}) {
  return (
    <main className="not-found">
      <div className="container">
        <div className="wraps">
          <h1 className="text-preset-1">Error 500</h1>
          <p>{message}</p>
        </div>
      </div>     
    </main>
  )
}
