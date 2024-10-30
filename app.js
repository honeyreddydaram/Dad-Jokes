let h1 = document.querySelector('h1');
let btn = document.querySelector('button');
let para = document.querySelector('#result');
let url = "https://icanhazdadjoke.com/";

btn.addEventListener("click",async()=>{
    let joke = await getJokes();
    para.innerHTML = joke;
})

async function getJokes(){
    try{
        const config = { headers: {Accept: "application/json"}};
        let response = await axios.get(url, config);
        return response.data.joke;
    }
    catch(error) {
        console.log("ERROR - ", error);
        return "No Fact Found";
    }
}
