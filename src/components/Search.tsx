
export default function Search() {
  return (
    <div>
      <input type="search" name="search" className="search" placeholder="Введите текст..." />
      <div className="advancedSearch">
         <label>
            <input type="text" name="author" id="author" />
            От автора
         </label>
         <div className="type">
            <input type="radio" name="" id="1" />
            <label htmlFor="1"></label>
            <input type="radio" name="" id="2" />
            <label htmlFor="2"></label>
            <input type="radio" name="" id="3" />
            <label htmlFor="3"></label>
         </div>
      </div>
      <div className="queries">
         {
            localStorage.getItem("queries")
         }
      </div>
    </div>
  )
}
