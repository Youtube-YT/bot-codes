module.exports = {
name: "work",
  code: `$If[$getGlobalUserVar[work]==1]
 $title[You Worked As A YouTuber]
 $description[You post a video and got $numberSeparator[$random[1000;500000]] views, and you earn $$random[1000;30000]!]
 $color[RANDOM]
 $setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;30000]]]
 $else
 $if[$getGlobalUserVar[work]==2]
 $title[You Worked As A Developer]
 $description[Someone ask you to $randomText[make a bot;make a webhook notification;make a bot dashboard website] and they rate $random[1;10] stars!\nYou earn $$random[1000;500000]]
 $color[RANDOM]
  $setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;500000]]]
 $endif
 $endif
 $globalCooldown[30s;Hey take a rest! Wait %time%.]
 	$onlyIf[$getGlobalUserVar[work]>0;{title:Apply For Job!}{description:Hello! Looks like you haven't apply your jobs yet!}{footer:Just do YOURPREFIXapply youtuber}{color:RANDOM}]`
}
