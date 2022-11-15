console.log(document);

let h1=document.createElement("h1");
h1.innerText="Lab12 Assignment"
h1.style.color="blue";
document.body.appendChild(h1);

let h2=document.createElement("h2");
h2.innerText="Task"
h2.style.color="red";
document.body.appendChild(h2);

let p1=document.createElement("p");

p1.innerHTML="In this task you have to reproduce this HTML page as is using <strong>only</strong> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"

document.body.appendChild(p1);


let p2=document.createElement("p");

p2.innerHTML="Basic necessary code can be found in the supplementary materials to the Lecture 12 via this link."

document.body.appendChild(p2);


let h3=document.createElement("h3");
h3.innerText="Submission"
h3.style.color="red";
document.body.appendChild(h3);

let p3=document.createElement("p");

p3.innerText="To submit your work, follow these instructions:"

document.body.appendChild(p3);

console.log(document);