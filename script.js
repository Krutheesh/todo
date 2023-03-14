const container = document.querySelector(".container")
const task = document.querySelector(".tasks");
 const ip = document.querySelector(".ip")
 
const addTask= document.querySelector(".add-task")
addTask.addEventListener("click", () => {

  if (ip.value != ""){
  const div = document.createElement("div");
  div.classList.add('para-flex')
  
  const para = document.createElement("input");
  para.classList.add("para")
  para.value = ip.value;
  para.setAttribute("readonly", "readonly")

  const div2 = document.createElement("div2");
  div2.classList.add("icon-flex")
  const trash = document.createElement("i");
  trash.classList.add( "fa","fa-circle-check")
  const trash2 = document.createElement("i");
  trash2.classList.add("fa","fa-pen")
  const trash3 = document.createElement("i");
  trash3.classList.add("fa","fa-trash")
  div2.appendChild(trash);
  div2.appendChild(trash2);
  div2.appendChild(trash3);
  div.appendChild(para)
  div.appendChild(div2)
  task.appendChild(div)
  ip.value = "";

  trash.addEventListener("click", () => {
   trash.classList.toggle("circle")
   
   para.classList.toggle("deco")
   trash2.classList.toggle("hide")
  })
 //deleting a task

 trash3.addEventListener("click", () => {
div.remove();
 })

 // updating

 trash2.addEventListener('click', () => {
  para.toggleAttribute("readonly")
  trash2.classList.toggle("gre")
  para.classList.toggle("gre")
 })

  }
  else{
    alert("no task entered")
  }

})

