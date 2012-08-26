function MemoryVerseModel(book, ref, text) {
	var self = this;
	self.book = book;
	self.reference = ref;
	self.htmlText = text;
}
MemoryVerseModel.prototype.modalId = function () {
	var self = this;
	var bookSlug = self.book.toLowerCase();
	bookSlug = bookSlug.replace(' ', '_');
	return bookSlug + self.reference;
}

var memoryVerses = [
	{
		book: 'Romans',
		reference: '1:16-17',
		text: 'For I am not <span class="w">ashamed</span> of the gospel of Christ, for it is the power of God to salvation for everyone who believes, for the Jew first and also for the <span class="w">Greek</span>. For in it the righteousness of God is revealed from <span class="w">faith</span> to <span class="w">faith</span>; as it is written, "The just shall live by faith."'
	},
	{
		book: '1 Corinthians',
		reference: '6:19-20',
		text: 'Or do you not know that your body is the <span class="w">temple</span> of the Holy Spirit who is in you, whom you have from God, and you are not your <span class="w">own</span>? For you were <span class="w">bought</span> at a <span class="w">price</span>; therefore glorify God in your <span class="w">body</span> and in your spirit, which are God\'s.'
	},
	{
		book: '2 Corinthians',
		reference: '5:17',
		text: 'Therefore, if anyone is in Christ, he is a new <span class="w">creation</span>; the <span class="w">old</span> has gone, the new has come.'
	},
	{
		book: 'Galatians',
		reference: '2:16',
		text: '...a man is not justified by the works of the <span class="w">law</span> but by <span class="w">faith</span> in Jesus Christ, even we have believed in Christ Jesus, that we might be <span class="w">justified</span> by <span class="w">faith</span> in Christ and not by the works of the <span class="w">law</span>; for by the works of the law no flesh shall be justified.'
	},
	{
		book: 'Ephesians',
		reference: '4:4-6',
		text: 'There is one body and one Sprit, just as you were called in one <span class="w">hope</span> of your calling; one <span class="w">Lord</span>, one <span class="w">faith</span>, one <span class="w">baptism</span>; one God and Father of all, who is above all, and through all, and in you all.'
	},
	{
		book: 'Philippians',
		reference: '3:8',
		text: 'What is more, I consier everything a <span class="w">loss</span> compared to the surpassing greatness of <span class="w">knowing</span> Christ Jesus my Lord, for whose sake I have lost all things. I consider them <span class="w">rubbish</span> that I may <span class="w">gain</span> Christ.'
	},
	{
		book: 'Colossians',
		reference: '2:6-7',
		text: 'As you therefore have received Christ Jesus the Lord, so <span class="w">walk</span> in Him, <span class="w">rooted</span> and <span class="w">built</span> up in Him and <span class="w">established</span> in the faith, as you have been taught, abounding in it with thanksgiving.'
	},
	{
		book: '1 Thessalonians',
		reference: '5:23',
		text: 'Now may the God of peace Himself <span class="w">sanctify</span> you completely; and may your whole spirit, soul and body be preserved <span class="w">blameless</span> at the <span class="w">coming</span> of our Lord Jesus Christ.'
	},
	{
		book: '2 Thessalonians',
		reference: '1:11',
		text: 'We constantly <span class="w">pray</span> for you, that our God may count you <span class="w">worthy</span> of His calling, and that by His power He may fulfill every good <span class="w">purpose</span> of yours and every act prompted by your faith.'
	},
	{
		book: '1 Timothy',
		reference: '4:12',
		text: 'Let no one despise your <span class="w">youth</span>, but be an example to the believers in word, <span class="w">conduct</span>, in <span class="w">love</span>, in spirit, in faith, and in <span class="w">purity</span>.'
	},
	{
		book: '2 Timothy',
		reference: '2:22',
		text: '<span class="w">Flee</span> also from youthful lusts; but pursue <span class="w">righteousness</span>, faith, love, and <span class="w">peace</span> with those who <span class="w">call</span> on the Lord out of a <span class="w">pure</span> heart.'
	},
	{
		book: 'Titus',
		reference: '3:8',
		text: 'This is a faithful saying, and these things I want you to affirm constantly, that those who have believed in God should be careful to maintain <span class="w">good</span> <span class="w">works</span>. These things are good and <span class="w">profitable</span> to men.'
	}
];

// convert to objects
memoryVerses = _.map(memoryVerses, function (obj) {
	return new MemoryVerseModel(obj.book, obj.reference, obj.text);
});

// letters
var JOURNEY = "journey",
	PRISON = "prison",
	PASTORAL = "pastoral";
var letterToGroupMap = {
	"Romans": JOURNEY,
	"1 Corinthians": JOURNEY,
	"2 Corinthians": JOURNEY,
	"Galatians": JOURNEY,
	"Ephesians": PRISON,
	"Philippians": PRISON,
	"Colossians": PRISON,
	"1 Thessalonians": JOURNEY,
	"2 Thessalonians": JOURNEY,
	"1 Timothy": PASTORAL,
	"2 Timothy": PASTORAL,
	"Titus": PASTORAL,
	"Philemon": PRISON
};

var lettersBibleOrder = [
	"Romans",
	"1 Corinthians",
	"2 Corinthians",
	"Galatians",
	"Ephesians",
	"Philippians",
	"Colossians",
	"1 Thessalonians",
	"2 Thessalonians",
	"1 Timothy",
	"2 Timothy",
	"Titus",
	"Philemon"
];
var lettersChronoOrder = [
	"Galatians",
	"1 Thessalonians",
	"2 Thessalonians",
	"1 Corinthians",
	"2 Corinthians",
	"Romans",
	"Ephesians",
	"Colossians",
	"Philemon",
	"Philippians",
	"1 Timothy",
	"Titus",
	"2 Timothy"
];

/* background info data */
var letterBackgrounds = [
	{
		book: "Galatians",
		info: "Paul writes this letter to a young, predominately gentile church. The believ- ers in this church had accepted the faith fervently, but were swayed by Jewish teachers who preached the importance of law and circumcision. Paul uses this letter to refute the bondage of the law and urges the believers to live as freed men under Christ—freed men who fight their sinful nature and bear the fruit of the spirit in their daily lives."
	},
	{
		book: "1 Thessalonians",
		info: "This was the first letter to the church that had many questions about resurrec- tion. It clarifies the resurrection process and what will happen to Christians who die before the Lord’s coming."
	},
	{
		book: "2 Thessalonians",
		info: "Some people believed that since the Lord Jesus was about to come soon, they no longer needed to work. They were sitting around all day, waiting for the Lord and living off the labor of others. Paul addresses the problem in this letter and reiterates the truth about resurrection."
	},
	{
		book: "1 Corinthians",
		info: "Paul wrote this letter to a church with many gifts and many problems. Members were blessed with the gift of prophesying in tongue, but service was disorderly. People didn’t partake of the Holy Communion with rever- ence and women had their heads uncovered. The church couldn’t func- tion as one body and even tolerated acts of incest."
	},
	{
		book: "2 Corinthians",
		info: "In this letter, Paul defends his apostleship so his ministry may not be shamed. He counters accusations by false apostles and explains why he works for his own living. He “boasts” of his weaknesses while stating his qualifications as an apostle. He also encourages the believers to com- plete their pledge to help less fortunate brethren in Jerusalem."
	},
	{
		book: "Romans",
		info: "This letter contains Paul’s most complete explanation about the gospel of salvation. It talks about how we are justified by faith and sanctified by the blood of Christ in baptism."
	},
	{
		book: "Ephesians",
		info: "Although written in prison, this letter is dubbed the “gospel of love” because love is mentioned so many times. Paul describes the loving rela- tionships between husband and wife, parents and children, slaves and masters and encourages believers to put on the full armor of God."
	},
	{
		book: "Philippians",
		info: "This is a prison epistle in which Paul talks about joy in suffering. He thanks the church for their love and participation in the ministry and encourages them to imitate Christ and prioritize Him in their lives."
	},
	{
		book: "Colossians",
		info: "This church was confused by a mix of worldly philosophies and heresies. Church members pursued spiritual knowledge in the same way they pur- sued worldly knowledge and had problems with asceticism and angel worship. Paul writes this letter from prison to help the believers re-focus on Christ and “put on the new man.”"
	},
	{
		book: "Philemon",
		info: "This letter was written to the master of a runaway slave who became a believer in Christ. Its main message is forgiveness and acceptance."
	},
	{
		book: "1 Timothy",
		info: "This letter was written as an encouragement to a young minister. It is full of practical advice about how to safeguard God’s truth, how the church should function and how to develop godly leadership."
	},
	{
		book: "Titus",
		info: "This letter was written to a young minister who was put in charge of the churches in Crete. In the letter, Paul instructs the minister on how to choose elders (bishops) to assist in church affairs and how to encourage each demographic within the church to walk according to the word of God."
	},
	{
		book: "2 Timothy",
		info: "This was Paul’s last letter before his execution. In it, Paul encourages a young minister to be steadfast in the truth and preach the good news. The two themes in this letter are Paul’s love for his “son” and Paul’s love for Christ."
	}

];

/* key phrases */
var keyphrases = [
	{
		book: "Romans",
		phrases: [
			"Justified through faith (4:24-5:1)",
			"Living sacrifice (12:1)"
		]
	},
	{
		book: "1 Corinthians",
		phrases: [
			"Your body is a temple of the Holy Spirit (6:19)",
			"The Lord's Supper (11:20)"
		]
	},
	{
		book: "2 Corinthians",
		phrases: [
			"Sow generously (9:6)",
			"Super-apostles (11:5)"
		]
	},
	{
		book: "Galatians",
		phrases: [
			"Slave woman and free woman (4:30)",
			"Fruit of the Spirit (5:22)"
		]
	},
	{
		book: "Ephesians",
		phrases: [
			"Children of Light (5:8)",
			"Sword of the spirit, which is the word of God (6:17)"
		]
	},
	{
		book: "Philippians",
		phrases: [
			"Rejoice in the Lord always (4:4)",
			"Citizenship in Heaven (3:2)"
		]
	},
	{
		book: "Colossians",
		phrases: [
			"Rooted and built up in Christ (2:6)",
			"Set your heart on things above (3:2)"
		]
	},
	{
		book: "1 Thessalonians",
		phrases: [
			"Trumpet call of God (4:16)",
			"The Lord will come as a theif in the night (5:2)"
		]
	},
	{
		book: "2 Thessalonians",
		phrases: [
			"Man of sin (lawlessness)(2:3)",
			"Idle brother (Chapter 3)"
		]
	},
	{
		book: "1 Timothy",
		phrases: [
			"Lift up holy hands in prayer (2:8)",
			"Love of money is a root of all kinds of evil (6:10)"
		]
	},
	{
		book: "2 Timothy",
		phrases: [
			"Workman approved by God (2:15)",
			"All Scripture is God-breathed (3:16)"
		]
	}
	// {
	// 	book: "Titus and Philemon",
	// 	phrases: [
	// 		"Sound in faith (Titus 1:13)",
	// 		"No longer a slave (Philemon 1:16)"
	// 	]
	// }
];