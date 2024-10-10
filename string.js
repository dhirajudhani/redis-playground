const client = require("./client")


async function init(){
    // await client.set("msg:6","udhani")
    // await client.expire("msg:6",10) // expire function is generally used for ratelimiting 
    const res = await client.get("msg:6")
    console.log(res)
}

init()