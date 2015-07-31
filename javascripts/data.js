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



/* jeopardy questions */
/* j2 y1b3 review
var memoryVerses = [
	{
		book: 'Psalm',
		reference: '139:17-18',
		text: 'How precious also are your <span class="w">thoughts</span> to me, O God! How great is the <span class="w">sum</span> of them! If I should <span class="w">count</span> them, they would be more in number than the sand.'
	},
	{
		book: 'Colossians',
		reference: '1:10',
		text: 'That you may walk worthy of the Lord, <span class="w">fulling</span> <span class="w">pleasing</span> Him, being fruitful in every <span class="w">good</span> <span class="w">work</span> and increasing in the <span class="w">knowledge</span> of God.'
	},
	{
		book: 'Luke',
		reference: '13:33',
		text: 'Nevertheless I must <span class="w">journey</span> today, <span class="w">tomorrow</span>, and the <span class="w">day</span> <span class="w">following</span>; for it cannot be that a prophet should perish outside of Jerusalem.'
	},
	{
		book: 'Romans',
		reference: '12:2',
		text: 'And do not be <span class="w">conformed</span> to this <span class="w">world</span>, but be <span class="w">transformed</span> by the <span class="w">renewing</span> of your mind, that you may prove what is that good and acceptable and <span class="w">perfect</span> will of God.'
	},
	{
		book: 'Matthew',
		reference: '16:26',
		text: 'For what <span class="w">profit</span> is it to a man if he <span class="w">gains</span> the whole world, and loses his own <span class="w">soul</span>? Or what will a man give in <span class="w">exchange</span> for his soul?'
	},
	{
		book: 'Matthew',
		reference: '6:19, 21',
		text: 'Do not <span class="w">lay</span> up for yourselves <span class="w">treasures</span> on <span class="w">earth</span>...for where your treasure is, there your <span class="w">heart</span> will be also.'
	},
	{
		book: 'Psalm',
		reference: '23:4',
		text: 'Yea, though I <span class="w">walk</span> through the <span class="w">valley</span> of the shadow of <span class="w">death</span>, I will <span class="w">fear</span> no evil; for You are with me.'
	},
	{
		book: 'Proverbs',
		reference: '15:1',
		text: 'A <span class="w">soft</span> answer turns away wrath, but a <span class="w">harsh</span> word stirs up anger.'
	},
	{
		book: 'Colossians',
		reference: '3:13',
		text: '<span class="w">Bearing</span> with one another, and forgiving one another, if anyone has a <span class="w">complaint</span> against another, even as Christ <span class="w">forgave</span> you, so you also must do.'
	},
	{
		book: 'James',
		reference: '1:14-15',
		text: 'But each one is tempted when he is drawn away by his own <span class="w">desires</span> and <span class="w">enticed</span>. Then, when desire has <span class="w">conceived</span>, it gives birth to sin; and sin, when it is <span class="w">full-grown</span>, brings forth <span class="w">death</span>.'
	},
	{
		book: 'Ephesians',
		reference: '4:29',
		text: 'Let no <span class="w">corrupt</span> word proceed out of your <span class="w">mouth</span>, but what is good for necessary <span class="w">edification</span>, that it may impart <span class="w">grace</span> to the hearers.'
	},
	{
		book: 'Matthew',
		reference: '12:36-37',
		text: 'But I say to you that for every <span class="w">idle</span> word men may <span class="w">speak</span>, they will give <span class="w">account</span> of it in the day of judgment. For by your words you will be <span class="w">justified</span> and by your words you will be <span class="w">condemned</span>.'
	}
];

// convert to objects
memoryVerses = _.map(memoryVerses, function (obj) {
	return new MemoryVerseModel(obj.book, obj.reference, obj.text);
});
var categories = ["Life's Challenges", "Stewardship", "Speech", "Personal Life"];
var questions = {
	"Life's Challenges": [
		{
			text: "What are some biblical attitudes (not speech) to remember if we become involved in a conflict (besides praying)?",
			answers: [
				"Don’t take things personally – Paul and Barnabas",
				"Share burdens with God and close trustworthy friends",
				"Hear both sides of the story – be open minded and give the benefit of the doubt"
			]
		},
		{
			text: "Compare/contrast how Gideon and Jephthah handled conflict with the Ephraimites and what resulted in each case",
			answers: [
				"Gideon was humble and gave credit to the Ephraimites - he was not defensive and brought about peace.",
				"Jephthah became defensive and, although spoke the truth, caused violence and a great slaughter of the Ephraimites"
			]
		},
		{
			text: "What were the three temptations Satan tried on the Lord Jesus and how did Jesus reply in each case?",
			answers: [
				"Turning stone into bread - 'man does not live by bread alone, but by the word of God'",
				"Jumping off the top of the temple - 'you shall not tempt the Lord your God'",
				"Bowing down to Satan in exchange for the glory and kingdoms of the world - 'you shall worship the Lord your God and Him only you shall serve'"
			]
		},
		{
			text: "'Do not be afraid, for am I in the place of God? But as for you, you meant evil against me; but God meant it for good...' Who said these words? And to whom and on what occasion?",
			answers: [
				"Joseph spoke these words",
				"He spoke them to his brothers",
				"This was when he revealed himself and assured them that he forgave them and would not harm them"
			]
		}
	],
	"Stewardship": [
		{
			text: "Why is wealth management important for a Christian? Refer to at least one Bible passage to support your answer.",
			answers: [
				"It's related to faithfulness",
				"It affects the wellbeing of others and the church",
				"Luke 16:10-11 - he who is faithful in little will be faithful in much",
				"Parable of the talents"
			]
		},
		{
			text: "What is the practical purpose of tithe during the OT and today?",
			answers: [
				"To support the Levites and priests who served in the temple full time and did not have an inheritance.",
				"To support the work of the church including full time workers like pastors."
			]
		},
		{
			text: "Name two types of attitudes we should have towards wealth/possessions on earth, and how you can apply them to your life",
			answers: [
				"Contentment",
				"Willingness to share",
				"Working hard",
				"Planning ahead",
				"Less important than God"
			]
		},
		{
			text: "How did Abram demonstrate he valued his relationships with God and people more than possessions?",
			answers: [
				"He resolved conflict with Lot by letting him choose the best land first",
				"He refused the gifts and riches from the king of Sodom, and offered a tithe to the king of Salem"
			]
		},
	],
	"Speech": [
		{
			text: "What are some biblical guidelines for our SPEECH if we are in a conflict?",
			answers: [
				"How we say things matters (not just what we say)",
				"Strive to speack/act in a way that keeps the peace - this may require us to bear other people's opinions and attacks",
				"A soft answer turns away wrath"
			]
		},
		{
			text: "Describe two examples of bearing false witness against your neighbor: one from the Bible and one from modern day life.",
			answers: [
				"Jezebel framing Naboth to get his vineyard",
				"Jesus accused of blasphemy"
			]
		},
		{
			text: "What is gossip? (two key parts)",
			answers: [
				"Unconstrained/casual speech, or idle words",
				"Unconfirmed or potentially harmful details about someone"
			]
		},
		{
			text: "In James 3 the Bible compares the tongue to many things. Explain two of these metaphors.",
			answers: [
				"Little spark",
				"Rudder of a ship",
				"Bits in a horse's mouth"
			]
		}
	],
	"Personal Life": [
		{
			text: "Describe one passage/story we talked about that demonstrated God cares, and explain how it shows that God cares.",
			answers: [
				"Matthew 6:30-33 - why do you worry?",
				"Jesus walks on water",
				"Exodus - God saw the oppresion of His people",
				"The poor widow's offering was noticed by Jesus",
				"Zaccheous was accepted and welcomed by Jesus"
			]
		},
		{
			text: "What is a SMART goal? Give an example.",
			answers: [
				"Specific, measurable, attainable, relevant, time-bound"			]
		},
		{
			text: "What happened to Jacob when he rested at Bethel while he was fleeing from his brother? What did he do or say as a thanksgiving to God?",
			answers: [
				"He had a dream about angels going up/down a ladder leading to heaven",
				"He realized God was with him",
				"He set up an altar and poured oil on the rock he slept on",
				"He vowed to worship God and give a tenth of all he had"
			]
		},
		{
			text: "Why is it important to set spiritual goals?",
			answers: [
				"We have worldly goals and those are important – how much more important are spiritual/church-related goals?",
				"Without spiritual goals, we will not make progress in our faith; our cultivation and church attendance becomes meaningless"
			]
		}
	]
}*/
var memoryVerses = [
	{
		book: 'Ecclesiastes',
		reference: '12:13-14',
		text: 'Fear God and keep His <span class="w">commandments</span>, for this is man\’s <span class="w">all</span>. For God will bring every work into <span class="w">judgment</span>, including every <span class="w">secret</span> thing, whether <span class="w">good</span> or <span class="w">evil</span>.'
	},
];
memoryVerses = _.map(memoryVerses, function (obj) {
	return new MemoryVerseModel(obj.book, obj.reference, obj.text);
});
var categories = ["Solomon", "Rehoboam", "Jeroboam", "Ahab"];
var questions = {
	"Solomon": [
		{
			text: "How long did Solomon take to build the temple?",
			answers: [
				"7 years"
			]
		},
		{
			text: "What bad choices lead to Solomon's downfall according to 1 Kings 11:1? Why were they bad choices?",
			answers: [
				"He loved and married foreign women",
				"His wives lead his heart away from God and towards idols"
			]
		},
		{
			text: "What did God say He was going to do as a result of Solomon's sins?",
			answers: [
				"Tear away the kingdom from his son",
				"For the sake of His covenant with David, He would not tear it away completely"
			]
		}
	],
	"Rehoboam": [
		{
			text: "Who is Rehoboam? Which part of Israel did he rule over? Was it northern or southern kingdom?",
			answers: [
				"Solomon's son",
				"King of Judah, the southern kingdom"
			]
		},
		{
			text: "Who did Rehoboam consult when the people asked him to lighten their load? What did each advise?",
			answers: [
				"Elders of Israel and young men he grew up with",
				"Elders advised to lighten people's load, the young men advised the opposite"
			]
		},
		{
			text: "How many days did Rehoboam tell Jeroboam and the Israelites to wait for his answer?",
			answers: [
				"3 days"
			]
		},
		{
			text: "What bad choice did Rehoboam make? What was the consequence?",
			answers: [
				"He listened to the young men instead of the elders",
				"The kingdom of Israel was split into north and south kingdoms"
			]
		},
	],
	"Jeroboam": [
		{
			text: "Who is Jeroboam? Which part of Israel did he rule over? Was it northern or southern kingdom?",
			answers: [
				"Solomon's servant, officer over the labor force",
				"King of Israel, the northern kingdom"
			]
		},
		{
			text: "Where did Jeroboam flee to during Solomon's reign? Why did he flee and when did he return?",
			answers: [
				"Fled to Egypt because Solomon sought to kill him after the prophet told him that he would also become king",
				"He returned after Solomon died to ask Rehoboam to lighten the people's load"
			]
		},
		{
			text: "What bad choice did Jeroboam make? What was the consequence?",
			answers: [
				"To keep the kingdoms split, he prevented the Israelites from worshiping in Jerusalem by telling them to worship idols in other places",
				"15 kings after him were described as following in the way of Jeroboam"
			]
		},
		{
			text: "What did Jeroboam do to prevent the Israelites from going to Jerusalem?",
			answers: [
				"Made two golden calves",
				"Appointed priests of all kinds of people",
				"Set up a separate feast like the one in Judah",
				"He vowed to worship God and give a tenth of all he had"
			]
		}
	],
	"Ahab": [
		{
			text: "How does the Bible describe king Ahab? (1 Kings 16:30-33)",
			answers: [
				"He was more evil than all who were before him",
				"It was a trivial thing for him to walk in the sins of Jeroboam",
			]
		},
		{
			text: "What bad choice did Ahab make?",
			answers: [
				"Married Jezebel who caused him and Israel to sin (1 Kings 21:25)",
				"He went and served and worshiped Baal"
			]
		},
		{
			text: "What was God's punishment?",
			answers: [
				"3 year drought"
			]
		},
		{
			text: "Who did God send as a prophet to warn Ahab?",
			answers: [
				"Elijah"
			]
		}
	]
}