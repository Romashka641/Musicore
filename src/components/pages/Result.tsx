import Search from "../Search";
import { Music } from "../../music"

export default function Result() {

  const music = new Music()

  const params = new URLSearchParams(window.location.search);
  const search = params.get('q');

  const res = music.search(search)

  console.log(res)

  return (
    <>
      <Search />
      <main>
        results
      </main>
    </>
  )
}
