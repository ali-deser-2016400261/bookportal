const api = "http://localhost:8080/BookPortalProject"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}



    export const getAuthor = (name,surname) =>
  fetch(`${api}/authors/?name=${name}&surname=${surname}`, { headers })
    .then(res => res.json())

    export const addAuthor = (id,name,surname) =>
    fetch(`${api}/authors/`,{
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({authorid:id,name:name,surname:surname}),
      
    }).then(res => res.json())

    export const deleteAuthor = (id) =>
    fetch(`${api}/authors/${id}`,{
      method: 'DELETE',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      }
      
    })



    export const getBook = (name) =>
    fetch(`${api}/books/?name=${name}`, { headers })
      .then(res => res.json())
  
      export const addBook = (id,name) =>
      fetch(`${api}/books/`,{
        method: 'POST',
        headers: {
          ...headers,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({bookid:id,name:name}),
        
      }).then(res => res.json())
  
      export const deleteBook = (id) =>
      fetch(`${api}/books/${id}`,{
        method: 'DELETE',
        headers: {
          ...headers,
          'Content-Type': 'application/json'
        }
        
      })



      
    export const getUser = (username) =>
    fetch(`${api}/user/?username=${username}`, { headers })
      .then(res => res.json())
  
      export const addUser = (name,surname,email,username,password,iduserrole) =>
      fetch(`${api}/user/`,{
        method: 'POST',
        headers: {
          ...headers,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name:name,surname:surname,email:email,username:username,password:password,iduserrole:iduserrole}),
        
      }).then(res => res.json())

      

      export const addWishlistt = (userid,bookid) =>
      fetch(`${api}/wishlist`,{
        method: 'POST',
        headers: {
          ...headers,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({userid:userid,bookid:bookid}),
        
      }).then(res => res.json())
  

      export const deleteUser = (id) =>
      fetch(`${api}/user/${id}`,{
        method: 'DELETE',
        headers: {
          ...headers,
          'Content-Type': 'application/json'
        }
        
      })

