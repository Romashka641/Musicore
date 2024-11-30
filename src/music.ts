import axios from "axios"

export class Music {
   uri = "https://music.youtube.com"

   search(query: string | null) {
      axios({
         method: "get",
         url: this.uri+"/search",
         params: {
            q: query
         },
         headers: {
            "Access-Control-Allow-Origin": this.uri+"/search"+query,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type'
         }
      }).then(res => {
         return res.data
      })
   }
}