const client = require("./client")

async function init (){
    // await client.lpush("messages",10);
    // await client.lpush("messages",10);
    // await client.lpush("messages",10);
    // await client.lpush("messages",10);
    // const res = await client.rpop("messages")
    const res = await client.blpop("messages",20)
    console.log(res)
}

init()