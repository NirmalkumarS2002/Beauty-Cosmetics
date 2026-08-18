let cname = document.querySelector("#cname")
let cnum = document.querySelector("#cnum")
let cmail = document.querySelector("#cmail")
let csub = document.querySelector("#csub")
let cmsg = document.querySelector("#cmsg")
let conbtn = document.querySelector(".ctc-form-btn")
let cerr = document.querySelectorAll(".cerror")


cname.addEventListener("input", () => {
    cname.value = cname.value.replace(/[^A-Za-z\s]/g, "")
})

cnum.addEventListener("input", () => {
    cnum.value = cnum.value.replace(/[^0-9]/g, "").slice(0, 10)
})


conbtn.addEventListener("click", () => {


    cerr.forEach((err) => {
        err.textContent = ""
    })



    let conregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    let isvalid = true;

    if (cname.value.trim() == "") {
        cerr[0].textContent = "Please Enter Your Name"
        isvalid = false;
    }

    if (cnum.value.trim() == "") {
        cerr[1].textContent = "Please Enter Your Number"
        isvalid = false;
    }

    if (cmail.value.trim() == "") {
        cerr[2].textContent = "Please Enter Your Email"
        isvalid = false;
    }

    else if (!conregex.test(cmail.value.trim())) {
        cerr[2].textContent = "Please Enter Your Email Correctly"
        isvalid = false;
    }

    if (csub.value.trim() == "") {
        cerr[3].textContent = "Please Enter The Subject"
        isvalid = false;
    }

    if (cmsg.value.trim() == "") {
        cerr[4].textContent = "Please Enter The Message"
        isvalid = false;
    }

    if (isvalid) {
        cname.value = ""
        cnum.value = ""
        cmail.value = ""
        csub.value = ""
        cmsg.value = ""

        cerr[5].textContent = "Submited Successfully"

        setTimeout(() => {
            cerr[5].textContent = ""
        }, 3000);
    }
})
