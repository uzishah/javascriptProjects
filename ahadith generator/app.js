function generate(){
var hadiths = {
    "-Sahih Bukhari Reference: Book 10, Hadith 506 " : '"The Prophet Muhammad (peace be upon him) said,The first thing a person will be asked about on the Day of Judgment is prayer. If it is sound, the rest of the deeds will be sound."',


    "-S ahih Bukhari Reference: Book 24, Hadith 537": "The Prophet Muhammad (peace be upon him) said, 'When one of you prays behind something, he should place something in front of him, even if it is an arrow.'",


    "-Sahih Bukhari Reference: Book 24, Hadith 504": '" The Prophet Muhammad (peace be upon him) said, If one of you leads the people in prayer, he should shorten it, for among them are the young, the weak, and the elderly. "',

   "-Sahih Bukhari Reference: Book 23, Hadith 501" : '"The Prophet Muhammad (peace be upon him) said, Seek help in giving charity by the night and the day, secretly and publicly, and keep regular in doing so."',


   "-Sahih Bukhari Reference: Book 24, Hadith 550": '"The Prophet Muhammad (peace be upon him) said, If a person had a stream outside his door and he bathed in it five times a day, do you think any dirt would remain on him? They said, Not a trace of dirt would be left. The Prophet added, That is the example of the five prayers with which Allah blots out evil deeds."',

   "-Sahih Bukhari Reference: Book 24, Hadith 537": '"The Prophet Muhammad (peace be upon him) said, When you hear the call to prayer, repeat what the caller says."',

   "Sahih Bukhari Reference: Book 24, Hadith 514": '"The Prophet Muhammad (peace be upon him) said, When a person stands for prayer, Satan comes and tries to divert his attention by reminding him of worldly matters."',


   "Sahih Bukhari Reference: Book 24, Hadith 546": '"The Prophet Muhammad (peace be upon him) said, Allah does not accept the prayer of a person who does not perform his ablution properly."'


}
var hadithNOs = Object.keys(hadiths)

var hadithNo = hadithNOs[Math.floor(Math.random()*hadithNOs.length)]

var  hadith = hadiths[hadithNo]


document.getElementById("hadith").innerHTML= hadith

document.getElementById("hadithNO").innerHTML= hadithNo


}