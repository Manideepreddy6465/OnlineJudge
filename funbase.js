const emailId = document.getElementById("email1");
const brname=document.getElementById("br");
const rolln = document.getElementById("rno1");
const fname = document.getElementById("nme1");
const cdnme = document.getElementById("cdname");
const cfnme = document.getElementById("cfname");
const ibnme = document.getElementById("ibname");
const spjnme = document.getElementById("spjname");
const pyear = document.getElementById("pyear");
const pasw = document.getElementById("pass");
const signBtn = document.getElementById("signBtn");

const database = firebase.database();
//const rootRef = database.ref('student');
let url="https://competitive-coding-api.herokuapp.com/api/interviewbit/"+ibname.value;
fetch(url)
.then(res => res.json())
.then((out) => {
  console.log('Checkout this JSON! ', out);
})
.catch(err => { throw err });
signBtn.addEventListener('click',(e) => {
    e.preventDefault();
    database.ref('/student/'+ rolln.value).set({
        email: emailId.value,
        name : fname.value,
        cdname: cdnme.value,
        branch: brname.value,
        rollno : rolln.value,
        cfname: cfnme.value,
        ibname: ibnme.value,
        spjname:spjnme.value,
        passyear: pyear.value,
        password: pasw.value
    })

})