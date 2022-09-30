async function getList(){
    return await fetch('/api/list');
}

async function createList(postdata){
    const options = {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(postdata)
      }

      return await fetch('/api/list',options)
}
export default{
    getList,
    createList
}