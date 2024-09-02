const btn = document.querySelector(".btn");
const sec_btn2 = document.querySelector(".secbtn2");
const round_circle1 = document.querySelector("#circle1");
const round_circle2 = document.querySelector("#circle2");
const round_circle3 = document.querySelector("#circle3");
const round_circle4 = document.querySelector("#circle4");

let user_data = [];

btn.onclick = () =>{
    const form = document.querySelector("form");
    if (form.names.value === "") {
        alert("Name field is empty, pls fill in your Full names");
    } else if (form.email.value === "") {
        alert("No Email Address, pls fill in your email address");
    } else if (form.phone.value === "") {
        alert("No Phone Number, pls fill in your phone number");
    } else {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            console.log(e);
            console.log(form.names.value, form.email.value, form.phone.value);
            form.reset();
        });
        document.querySelector(".thirddiv").style.display = "none";
        document.querySelector(".forthdiv").style.display = "block";
        document.querySelector(".forththird").style.display = "none";
        round_circle1.style.backgroundColor = "transparent";
        round_circle1.style.border = "2px solid rgba(255, 255, 255, 0.39)";
        round_circle1.style.color = "white";
        round_circle2.style.backgroundColor = "rgb(182, 217, 248)";
        round_circle2.style.color = "black";
        sec_btn2.style.display = "none"
        let name = [ form.names.value]
            let email = [form.email.value]
            let phone = [form.phone.value]
            user_data.push(name)
            user_data.push(email)
            user_data.push(phone)
        console.log(user_data);
    }

}

const sec_btn = document.querySelector(".secbtn1");

sec_btn.onclick = () => {
    document.querySelector(".forthdiv").style.display = "none";
    document.querySelector(".thirddiv").style.display = "block";
}

const forth_small = document.querySelector(".forthsmalldiv");
const forth_small1 = document.querySelector(".forthsmalldiv1");
const forth_small2 = document.querySelector(".forthsmalldiv2");
const forththird1 = document.querySelector(".forththird1");
const forththird2 = document.querySelector(".forththird2");
const center1 = document.querySelector(".center1");
const center2 = document.querySelector(".center2");

forth_small.onclick = () => {
    console.log("arcade");
    document.querySelector(".forththird").style.display = "flex";
    let plan = ["arcade"];
    let planamount = ["90"];
    user_data.push(plan);
    user_data.push(planamount);
    console.log(plan);
    // sec_btn2.style.display = "block"
}

forth_small1.onclick = () => {
    console.log("advanced");
    document.querySelector(".forththird").style.display = "flex";
    let plan = ["advanced"];
    let planamount = ["120"];
    user_data.push(plan);
    user_data.push(planamount);
    console.log(plan);
    // sec_btn2.style.display = "block"
}

forth_small2.onclick = () => {
    console.log("pro");
    document.querySelector(".forththird").style.display = "flex";
    let plan = ["pro"];
    let planamount = ["150"];
    user_data.push(plan);
    user_data.push(planamount);
    console.log(plan);
    // sec_btn2.style.display = "block"
}

forththird1.onclick = () => {
    console.log("monthly");
    forththird1.style.fontWeight = "bold"
    forththird2.style.fontWeight = "lighter"
    center1.style.backgroundColor = "white";
    center2.style.display = "flex";
    center2.style.backgroundColor = "black";
    sec_btn2.style.display = "block"
    let duration = ["monthly"];
    user_data.push(duration);
    console.log(duration);
}

center1.onclick = () => {
    console.log("monthly");
    forththird1.style.fontWeight = "bold"
    forththird2.style.fontWeight = "lighter"
    center1.style.backgroundColor = "white";
    center2.style.display = "flex";
    center2.style.backgroundColor = "black";
    let duration = ["monthly"];
    user_data.push(duration);
    console.log(duration);
    sec_btn2.style.display = "block"
}

forththird2.onclick = () => {
    console.log("yearly");
    forththird1.style.fontWeight = "lighter"
    forththird2.style.fontWeight = "bold"
    center1.style.backgroundColor = "black";
    center2.style.display = "flex";
    center2.style.backgroundColor = "white";
    sec_btn2.style.display = "block"
    let duration = ["yearly"];
    user_data.push(duration);
};

center2.onclick = () => {
    console.log("yearly");
    forththird1.style.fontWeight = "lighter"
    forththird2.style.fontWeight = "bold"
    center1.style.backgroundColor = "black";
    center2.style.display = "flex";
    center2.style.backgroundColor = "white";
    let duration = ["yearly"];
    user_data.push(duration);
    console.log(duration);
    sec_btn2.style.display = "block"
};

const fifbtn2 = document.querySelector(".fifbtn2");

sec_btn2.onclick = () => {
    document.querySelector(".forthdiv").style.display = "none";
    document.querySelector(".fifthdiv").style.display = "block";
    fifbtn2.style.display = "none";
    round_circle2.style.backgroundColor = "transparent";
    round_circle2.style.border = "2px solid rgba(255, 255, 255, 0.39)";
    round_circle2.style.color = "white";
    round_circle3.style.backgroundColor = "rgb(182, 217, 248)";
    round_circle3.style.color = "black";
    console.log(user_data);
};


const opens = document.querySelector(".botton");
opens.onclick = () => {
    console.log("online service");
    fifbtn2.style.display = "block"
    let z = 1;
    let services = ["online service"];
    let serviceamount = [z]
    user_data.push(services);
    user_data.push(serviceamount);
}

const opens1 = document.querySelector(".botton1");
opens1.onclick = () => {
    console.log("large storage");
    fifbtn2.style.display = "block"
    let x = 2;
    let services = ["large storage"];
    let serviceamount = [x]
    user_data.push(services);
    user_data.push(serviceamount);
}

const opens2 = document.querySelector(".botton2");
opens2.onclick = () => {
    console.log("custom profile");
    fifbtn2.style.display = "block"
    let y = 2;
    let services = ["custom profile"];
    let serviceamount = [y]
    user_data.push(services);
    user_data.push(serviceamount);
}

const deeps = document.getElementById("deeper");
const deeps2 = document.getElementById("deeper2");
const deeps3 = document.getElementById("deeper3");
const figgi = document.getElementById("figgi");
function result_plan() {
    
}
console.log(user_data.plan);
fifbtn2.onclick = () => {
    document.querySelector(".fifthdiv").style.display = "none";
    document.querySelector(".sixdiv").style.display = "block";
    deeps.innerHTML = `${user_data[3]}(${(user_data[5])})`;
    figgi.innerHTML = `${user_data[4]}`;
    deeps2.innerHTML = `${user_data[6]}`;
    fifbtn2.style.display = "none";
    round_circle3.style.backgroundColor = "transparent";
    round_circle3.style.border = "2px solid rgba(255, 255, 255, 0.39)";
    round_circle3.style.color = "white";
    round_circle4.style.backgroundColor = "rgb(182, 217, 248)";
    round_circle4.style.color = "black";
    console.log(deeps);
};

const thirdbtn2 = document.querySelector(".thirdbtn2")
thirdbtn2.onclick = () => {
    document.querySelector(".sixdiv").style.display = "none";
    document.querySelector(".sevendiv").style.display = "block";
    round_circle3.style.backgroundColor = "transparent";
    round_circle3.style.border = "2px solid rgba(255, 255, 255, 0.39)";
    round_circle3.style.color = "white";
    round_circle4.style.backgroundColor = "rgb(182, 217, 248)";
    round_circle4.style.color = "black";
    console.log(deeps);
};