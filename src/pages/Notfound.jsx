import { useNavigate } from "react-router"

export default function Notfound() {
  const navigate = useNavigate()

  return (
    <main className="not-found">
      <div className="container">
        <div className="wraps">
          <h1 className="text-preset-1">Not found</h1>
          <button onClick={() => navigate("/")}>Back to home</button>
        </div>
      </div>     
    </main>
  )
};