import { useState } from "react"
import "./css/Search.css"

export default function Search() {

   const [FormFocus, setFormFocus] = useState(0)

  return (
    <div>
      <button className="hideSearchForm" onClick={() => setFormFocus(0)}></button>
      <form className="searchForm" onClick={() => setFormFocus(1)}>
         <style>
            {`
               .searchForm::before {
                  opacity: ${FormFocus}
               }

               .advancedSearch {
                  transform: scaleY(${FormFocus})
               }
            `}
         </style>
         <form className="mainSearch">
            <input type="text" name="search" className="search" placeholder="Введите текст..." autoComplete="false" />
            <input type="reset" className="clear" />
         </form>
         <span className="searchIcon">
            <input type="submit" value="" id="searchSubmit" />
         </span>
         <div className="advancedSearch">
            <div className="from-author">
               <label htmlFor="author" id="authorLabel">От автора</label>
               <input type="text" name="author" id="author" autoComplete="false" />
            </div>
            <div className="types">
               <input type="radio" name="type" id="1" className="radio" checked />
               <label htmlFor="1" className="type">Трэк</label>
               <input type="radio" name="type" id="2" className="radio" />
               <label htmlFor="2" className="type">Альбом</label>
               <input type="radio" name="type" id="3" className="radio" />
               <label htmlFor="3" className="type">Исполнитель</label>
            </div>
         </div>
      </form>
      <div className="queries">
         {
            localStorage.getItem("queries")
         }
      </div>
    </div>
  )
}
