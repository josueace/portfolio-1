class APIHandler {
  constructor (baseUrl) {
    this.api = axios.create({
    baseURL: baseUrl
    });
  }
  
  getCat () {
    this.api.get('category')
    .then(responseFromAPI => {
	    let data=responseFromAPI.data;
		fillCat(data);
     })
    .catch(err => {
       alert( 'Error: '+err);
     })
  }
  
 getUsers () {
    this.api.get('users')
    .then(responseFromAPI => {
	    let data=responseFromAPI.data;
		fillUsers(data);
     })
    .catch(err => {
       alert( 'Error: '+err);
     })
  }
  
  getLatest () {
    this.api.get('latest')
    .then(responseFromAPI => {
	    let data=responseFromAPI.data;
		fillLatest(data);
     })
    .catch(err => {
       alert( 'Error: '+err);
     })
  }
  
  getFullList () {
    this.api.get('characters')
    .then(responseFromAPI => {
	    let data=responseFromAPI.data;
		fill(data);
     })
    .catch(err => {
       alert( 'Error: '+err);
     })
  }

  
  
  getOneRegister (id) {
      this.api.get('characters/'+id)
    .then(responseFromAPI => {
	   
		fillOne(responseFromAPI.data);
     })
    .catch(err => {
       alert( 'Error: '+err);
     })
  }

  createOneRegister (data) {
	 console.log(JSON.stringify(data));
	 this.api.post('characters',data)
    .then(response => {
        
    })
    .catch(error => {
        alert( 'Error: '+error);
    })
	  
  }

  updateOneRegister (id,data) {
   this.api.patch('characters/'+id,data)
    .then(response => {
        alert(JSON.stringify(response));
    })
    .catch(error => {
        alert( 'Error: '+error);
    })
  }

  deleteOneRegister (id) {
	  
   this.api.delete('characters/'+id)
    .then(responseFromAPI => {
		
     })
    .catch(err => {
       alert( 'Error: '+err);
     })
  }
  
  
  
  
  
}
