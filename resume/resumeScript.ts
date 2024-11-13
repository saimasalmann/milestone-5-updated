let myName = localStorage.getItem("name");
window.addEventListener("load", () => {
  let desig = localStorage.getItem("desig");
  let phone = localStorage.getItem("phone");
  let email = localStorage.getItem("email");
  let add = localStorage.getItem("add");
  let pass1 = localStorage.getItem("pass1");
  let deg1 = localStorage.getItem("deg1");
  let uni1 = localStorage.getItem("uni1");
  let pass2 = localStorage.getItem("pass2");
  let deg2 = localStorage.getItem("deg2");
  let uni2 = localStorage.getItem("uni2");
  let skill1 = localStorage.getItem("skill1");
  let skill2 = localStorage.getItem("skill2");
  let skill3 = localStorage.getItem("skill3");
  let skill4 = localStorage.getItem("skill4");
  let lang1 = localStorage.getItem("lang1");
  let lang2 = localStorage.getItem("lang2");
  let styear = localStorage.getItem("styear");
  let endyear = localStorage.getItem("endyear");
  let company = localStorage.getItem("company");
  let jobtitle = localStorage.getItem("jobtitle");
  let achiv1 = localStorage.getItem("achiv1");
  let achiv2 = localStorage.getItem("achiv2");
  let achiv3 = localStorage.getItem("achiv3");
  let pic = localStorage.getItem('pic');

  let resName: any = document.getElementById("resName");
  resName.textContent = myName;

  let resDesig: any = document.getElementById("resDesig");
  resDesig.textContent = desig;

  let resPhone: any = document.getElementById("resPhone");
  resPhone.textContent = phone;

 
  let resEmail: any = document.getElementById("resEmail");
  resEmail.textContent = email;

  let resAdd: any = document.getElementById("resAdd");
  resAdd.textContent = add;

  let resPass1: any = document.getElementById("resPass1");
  resPass1.textContent = pass1;

  let resDeg1: any = document.getElementById("resDeg1");
  resDeg1.textContent = deg1;

  let resUni1: any = document.getElementById("resUni1");
  resUni1.textContent = uni1;

  let resPass2: any = document.getElementById("resPass2");
  resPass2.textContent = pass2;

  let resDeg2: any = document.getElementById("resDeg2");
  resDeg2.textContent = deg2;

  let resUni2: any = document.getElementById("resUni2");
  resUni2.textContent = uni2;

  let resSkill1: any = document.getElementById("resSkill1");
  resSkill1.textContent = skill1;

  let resSkill2: any = document.getElementById("resSkill2");
  resSkill2.textContent = skill2;

  let resSkill3: any = document.getElementById("resSkill3");
  resSkill3.textContent = skill3;

  let resSkill4: any = document.getElementById("resSkill4");
  resSkill4.textContent = skill4;

  let resLang1: any = document.getElementById("resLang1");
  resLang1.textContent = lang1;

  let resLang2: any = document.getElementById("resLang2");
  resLang2.textContent = lang2;

  let resStyear: any = document.getElementById("resStyear");
  resStyear.textContent = styear;
 
  let resEndyear: any = document.getElementById("resEndyear");
  resEndyear.textContent = endyear;

  let resCompany: any = document.getElementById("resCompany");
  resCompany.textContent = company;
 

  let resJobtitle: any = document.getElementById("resJobtitle");
  resJobtitle.textContent = jobtitle;

  let resAchiv1: any = document.getElementById("resAchiv1");
  resAchiv1.textContent = achiv1;
 
  let resAchiv2: any = document.getElementById("resAchiv2");
  resAchiv2.textContent = achiv2;

  let resAchiv3: any = document.getElementById("resAchiv3");
  resAchiv3.textContent = achiv3;

  let resPic: any = document.getElementById("resPic");
  resPic.src = pic;


  

});





//*******print button ********

let print_btn = document.getElementById("print_btn");
print_btn?.addEventListener("click", () => {
  window.print();
});


//*******  edit button ********

let edit_btn = document.getElementById("edit_btn");
edit_btn?.addEventListener("click", () => {
  window.history.back()
});

//*******  shareable link button ********

let share_btn= document.getElementById("share_btn");
let anchor=document.getElementById("anchor")
let userName;
if(myName){
  userName=myName.toLowerCase().replace(/\s+/g , "-")
}
else{
  userName="user"

}

let baseUrl="http://127.0.0.1:5500/resume/resume.html";
let uniqueUrl=`${baseUrl}?/${myName}`
share_btn?.addEventListener("click", () => {
anchor?.setAttribute('href',uniqueUrl)
window.history.pushState({}, "", uniqueUrl);

});

// ******* copy link button *************
let copy_button =document.getElementById('copy_btn')
copy_button?.addEventListener('click',()=>{
  navigator.clipboard.writeText(uniqueUrl).then(()=>{
    alert('Link Copied Successfully');

  })

})