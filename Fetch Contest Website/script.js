let url= "https://kontests.net/api/v1/all"
let respons= fetch(url)

respons.then((contest)=>{
  return contest.json()
}).then((contest)=>{
  console.log(contest)
  inhtml=""
  for(item in contest){
    console.log(contest[item])
    inhtml+=`
        <div class="card mx-4 my-4" style="width: 18rem;">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTmnD5s4Tu5_aJfp3peUJTjhDrkNzze_SbxQ&usqp=CAU" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${contest[item].name}</h5>
    
    start_time : ${contest[item].start_time}
    </p>
    <p>
      end_time : ${contest[item].end_time}
    </p>

    <p>
      duration : ${contest[item].duration}
    </p>
    <a href="${contest[item].url}" class="btn btn-primary my-4">Visit Contest</a>
  </div>
</div>
      `
  }
  contestlist.innerHTML=inhtml
})