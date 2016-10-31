
$(document).ready(function(){

var randomQ = ["What contribution have you provided for your company?",
"What accomplishment are you most proud of?",
"What would your colleagues and friends say are your strengths and weaknesses?",
"How would your friends and colleagues describe you?",
"What type of projects do you prefer, short or long, and why?",
"Tell us about a challenging work experience and how you handled it.",
"Tell us about how you engaged with a community or an Organization.",
"Tell us about your leadership style.",
"Tell us about a difficult decision and how you handled it.",
"Tell us about a creative solution you designed.",
"Please describe a creative solution that you have come up with for a problem.",
"Talk about a time when you received difficult feedback.",
"If you have a conflict with your classmates, how will you resolve it?",
"What is your biggest concern for the Admission Committee in evaluating your application?",
"If you could teach a class on any topic. What would it be and why?",
"If you were given a chance to meet anyone, current or historical, who would you meet and why?",
"If you had an extra hour every day, what would you do with it?",
"If money was not a concern. what would you do?",
"if you could live anywhere in the world, where would it be and why?",
"If you could travel across the United States in a car with anyone, whom would you choose to travel with and why?",
"If you could change one thing about your professional life, what would it be and why?",
"What would you do if a team member wasn't pulling his own weight?",
"What piece of technology could you not live without and why?",
"What word describes you best and why?",
"Tell us about the first job you ever had?",
"What's the best book you have ever read and why?",
"When you have a problem, whom do you approach for advice and why?",
"What accomplishment are you really proud of?",
"What's the best piece of advice you have ever received?",
"What one interesting or fun fact would you want your future kellogg classmates to know about you?",
"What was the most interesting class you took at University?",
"Tell us about an organization or activity in which you have dedicated significant time. Why was it meaningful to you?",
"What have anyone done good for you and how did you felt about it?",
"Tell us about the most interesting place you&rsquo;ve traveled to. What did you enjoy most about it.",
"What invention during your lifetime has had the biggest impact on you and why?",
"Why did you choose your college major?",
"What is the most meaningful thing anyone has done for you in your life? X 2",
"What food do you like? Will you be able to eat that food everyday?",
"How have you changed in the last 5 years?",
"Whom do you respect most, and why?",
"What is your favorite motto or quote, and why",
"What risk have you taken and what did you learn?",
"What impact do you have on your co-workers?",
"What inspires you?",
"What do you do for fun?",
"What are your passions, interests, and hobbies?",
"What would you do on a rainy Sunday afternoon?",
"How have you handled a difficult interaction? What did you learn from it?",
"Describe a difficult professional decision you had to make. What were the consequences, and what, if anything, did you learn?",
"Why are you interested in this school/program?",
"Why should we admit you?",
"What are your strengths and weaknesses?",
"What do you like most about your current work?",
"What are your short- and long-term goals?",
"What do you do to relieve stress?",
"Describe a situation where you brought an idea forward, and it failed.",
"How do you define success?",
"Why did you choose your undergraduate major?",
"Name three words or phrases to describe yourself to others.",
"What is most frustrating at work?",
"How would co-workers describe you?",
"Describe a typical work day.",
"Have you worked in a team environment? What were your contributions to the effort?",
"Discuss any experience you have had abroad.",
"How did you choose your job after college?",
"Describe a time when you helped someone at work.",
"Describe a mistake you've made within the past three years.",
"Describe your greatest accomplishment.",
"How would you describe your style for teaching peers?",
"Tell me about a time you failed.",
"What inspires you?",
"What book are you currently reading?",
"Name a leader that you admire.",
"What do you expect to gain from an MBA at Harvard?",
"Where will you be five to seven years post-MBA?",
"What excites you most about your career plans?",
"How will you continue learning in your next position?",
"What are the difficulties you face in achieving your goals?",
"What will you do if you do not get into business school this year?",
"What do you think of the Foster admissions process?",
"Superhero power",
"Best Movie or Book this past year",
"What would you cook for your friends for a dinner party",
"Who is your role model and why?",
"Describe a stressful situation at work and how you handled it.",
"If you receive a large sum of money, how would you spend it and why?",
"Three adjectives that describe you and why",
"Describe a time you had to give difficult feedback",
"Tell us about an important piece of advice you have received and how it has helped you.",
"Tell us about the last time you led a project. What was the outcome?",
"What is your ideal work environment?",
"Tell me about a time that you encountered a stressful situation. What did you do to handle it and why?",
"What project did you take on without being asked to?",
"Tell us about an experience when you faced a boring project? how did you motivate yourself and your team to work on it?",
"What is the most important thing you learned in college?",
"What is a step you've taken in the last year to advance your career?",
"Tell me about a time when you had to work with a difficult colleague..",
"Tell me about a time that you worked in a team setting",
"Tell us about a work that you read recently and how did it impact you?",
"What is the biggest challenge that you are facing in your current position?",
"If you were to start a new venture that was focused on solving a major problem, which problem would you tackle and why?",
"Greatest achievement outside work",
"Creative solution at work"
];

	$("#random-button").on("click", function(){
		var question = randomQ[Math.floor(Math.random()*randomQ.length)];
		$("#game h1").text(question);
		this.disabled = true;
		document.getElementById("talk-timer").innerHTML=""; 

		var prepcount = 30;
		var talkcount = 90;
		document.getElementById("prep-timer").innerHTML="Prep time left: " + prepcount + " secs"; 
		var prepcounter = setInterval(preptimer, 1000); //1000 will  run it every 1 second
		function preptimer()
		{
		  prepcount = prepcount - 1 ;
		  if (prepcount <= 0)
		  {
		     clearInterval(prepcounter);
		     PlaySound();
		     document.getElementById("prep-timer").innerHTML=""; 
		     document.getElementById("talk-timer").innerHTML= "Talk time left: " + talkcount + " secs"; 
					var talkcounter = setInterval(talktimer, 1000); //1000 will  run it every 1 second
					function talktimer()
					{
					  talkcount = talkcount - 1 ;
					  if (talkcount <= 0)
					  {
					     clearInterval(talkcounter);
					     PlaySound();
					     document.getElementById('random-button').disabled = false;
					     return;
					  }

					 document.getElementById("talk-timer").innerHTML= "Talk time left: " + talkcount + " secs"; 
					}
		     return;
		  }

		 document.getElementById("prep-timer").innerHTML="Prep time left: " + prepcount + " secs"; 
		}
		
	});
	function PlaySound() {
    var sound = document.getElementById("audio");
    sound.play();
  }
	
});



