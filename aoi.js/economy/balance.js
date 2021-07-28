//Variables Require: cash: "0" | bank: "500"


//Command Handle
module.exports = {
name: "balance",
aliases: ["bal"],
code: `$title[$username[$mentioned[1;yes]]'s Balance]
$description[Money: $getGlobalUserVar[cash;$mentioned[1]]
Bank: $getGlobalUserVar[bank;$mentioned[1]]]
$color[RANDOM]`}

//None Command Handle
bot.command({
name: "balance",
aliases: ["bal"],
code: `$title[$username[$mentioned[1;yes]]'s Balance]
$description[Money: $getGlobalUserVar[cash;$mentioned[1]]
Bank: $getGlobalUserVar[bank;$mentioned[1]]]
$color[RANDOM]`})
