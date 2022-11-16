const cargarRazas=async ()=>{
    const api=await fetch("https://dog.ceo/api/breeds/list/all");
    const response=await api.json();
    console.log(response.message);
    let comboRazas=document.querySelector("#razas");
    data=response.message;
    Object.keys(data).forEach(key=>{
        comboRazas.innerHTML+=`
        <Option value="${key}">${key}</Option>
        `
    });
}

const changePerritos=async (raza)=>{
    const api=await fetch(`https://dog.ceo/api/breed/${raza}/images/random/5`);
    const response=await api.json();
    console.log(response.message);
    let divPerritos=document.querySelector("#perritos");
    data=response.message;
    divPerritos.innerHTML="";
    data.map(imgPerrito=>{
        divPerritos.innerHTML+=`
        <img src="${imgPerrito}">
        `
    })
}


    