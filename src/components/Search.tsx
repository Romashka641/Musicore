import { useState } from "react"
import "./css/Search.css"
import $ from 'jquery'
/* import { useSearchParams } from "react-router-dom" */

export default function Search() {

   const [FormFocus, setFormFocus] = useState(0)
   const [search, setSearch] = useState("")

   if (FormFocus == 0) {
      $(".hideSearchForm").css("display", "none")
   } else {
      $(".hideSearchForm").css("display", "block")
   }
   /* const [params] = useSearchParams() */

   /* if (params.get("q") != "") {
      setSearch(String(params.get("q")))
   } */

  return (
    <div>
      <button className="hideSearchForm" onClick={() => setFormFocus(0)}></button>
      <div className="searchForm" onClick={() => setFormFocus(1)}>
         <style>
            {`
               .searchForm::before {
                  opacity: ${FormFocus}
               }
            `}
         </style>
         <form className="mainSearch" action="results">
            <input type="text" name="q" className="search" placeholder="Введите текст..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <input type="reset" className="clear" />
            <span className="searchIcon">
               <input type="submit" value="" id="searchSubmit" />
            </span>
         </form>
      </div>
      <div className="queries">
         {
            localStorage.getItem("queries")
         }
      </div>
    </div>
  )
}
