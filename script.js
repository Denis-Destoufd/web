//const
const getPersonInfo = document.querySelector(".person")
const getPersonJob = document.querySelector(".job")
const getPersonDepartment = document.querySelector(".department")
const getPersonEmail = document.querySelector(".email")
const getPersonPhone = document.querySelector(".phone")
const getPersonChild = document.querySelector(".child")
const getPersonCalend = document.querySelector(".calend")


const buttonAddEventListener = document.querySelector (".button")

buttonAddEventListener.onclick=()=> {
    const data = []

    let getAllInfo ={
        name: getPersonInfo.value,
        job: getPersonJob.value,
        department: getPersonDepartment.value,
        email: getPersonEmail.value,
        phone: getPersonPhone.value,
        child: Number(getPersonChild.value),
        calend: getPersonCalend.value
    }

    if (Number(getPersonChild.value) > 1){
        for (let i = 0; i < Number(getPersonChild.value); i++) {
            data.push(getAllInfo)
            console.log(data);
        }
    } else {
        data.push(getAllInfo)
    }

    console.log("data", data)
}