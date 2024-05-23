import { Post } from "./Post";
import { Header } from "./componets/Header";

export function App() {
  
  return (
    <div>
      <Header/>
      <Post
        author="Wender Clayton"
        content="Primeiro post!"
      />
      <Post
        author="Zanelli Russeley"
        content="Segundo post!"
      />
    </div>
  )
}


