import { useState } from "react"

export default function App() {
    const [reaction, setReaction] = useState(null)

    function like() {
        setReaction(prev => prev === "like" ? null : "like")
    }

    function dislike() {
        setReaction(prev => prev === "dislike" ? null : "dislike")
    }
    
  return (
      <>
          <button
              onClick={like}
              className={reaction === "like" ? "like" : undefined}
          >
              ▲
          </button>
          <button
              onClick={dislike}
              className={reaction === "dislike" ? "dislike" : undefined}
          >
              ▼
          </button>
      </>
  )
}
