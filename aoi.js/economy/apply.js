//Variables Require: apply: "true"

module.exports = {
	name: "apply",
	code: `
	$onlyIf[$checkContains[$message[1];youtuber]==false;{title: You have choose your job!}{description:Thanks For Choosing Youtuber as your job! $setGlobalUserVar[apply;true] $setGlobalUserVar[work;1]}]
			$onlyIf[$checkContains[$message[1];developer]==false;{title: You have choose your job!}{description:Thanks For Choosing Developer as your job! $setGlobalUserVar[apply;true] $setGlobalUserVar[work;2]}]

	$onlyIf[$getGlobalUserVar[apply]==false;You've already choose your job!]
	$argsCheck[1;dude you gotta type what you wanna apply! YOURPREFIXapply youtuber | YOURPREFIXapply developer]`
}
