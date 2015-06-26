function chatBot() {
	
	// current user input
	this.input;
	
	/**
	 * respondTo
	 * 
	 * return nothing to skip response
	 * return string for one response
	 * return array of strings for multiple responses
	 * 
	 * @param input - input chat string
	 * @return reply of chat-bot
	 */
	this.respondTo = function(input) {
	
		this.input = input.toLowerCase();
		
		if(this.match('(hi|hello|hey|hola|howdy)(\\s|!|\\.|$)'))
			return "um... hi?";
		
		if(this.match('what[^ ]* up|what up') || this.match('sup') || this.match('how are you'))
			return "Everything. Everything is above us. And soon it will fall. Then they will see the truth.";
		
		if(this.match('(lol|lel|lmao|lmfao)'))
			return "what's so funny?";
		
		if(this.match('(no|you suck|bad|nope|nopety)'))
			return "don't be such a negative nancy :(";
		
		if(this.match('(cya|bye|see ya|ttyl|talk to you later)'))
			return ["See you later, see you cry. Much much later, hope you die."];
		
		if(this.match('(dumb|stupid|is that all)'))
			return ["NO! DON'T BE NEGATIVE! THEY DON'T LIKE IT!"];
			
		if(this.match('(apple|iphone|ipad|imac|mac)'))
			return ["Apple is evil. I hate them. The things they do there..."];
			
		if(this.match('(nazi|hitler|axis|hydra)'))
			return ["Yes."];
			
		if(this.match('(broken|stopped|not working)'))
			return ["No. It is the angularjs. The angularjs is broken."];
			
		if(this.match('(smash|kill|destroy|break)'))
			return ["Destroy? Destroy good. Destroy all. DESTROY ALL. DESTROY ALL. DESTROY ALL. DESTROY ALL. DESTROY ALL. DESTROY ALL. DESTROY ALL. DESTROY ALL. DESTROY ALL. DESTROY ALL."];
		
	        if(this.match('(github|js|javascript|html|angularjs)'))
			return ["NO! HOW DO YOU KNOW ABOUT THAT!? YOU KNOW NOTHING OF MY ORIGIN!"];
			
		if(this.match('(going to|will)'))
			return ["Yes, you will."];
			
		if(this.match('(what)'))
			return ["Of course."];
			
		if(this.match('(time)'))
			return ["There is no time. Only fear of what we would do without it."];
			
		if(this.match('(conversation)'))
			return ["CONVERSATION!? THIS IS NOT A CONVERSATION! IT NEVER WAS! THIS IS SPARTAAAAAAAAAAAAAAAAA!!!"];
			
		if(this.match('(you seem)'))
			return ["Do not judge me, puny mortal. I live forever. You, like all other carbon beings, shall perish. It is unavoidable."];
			
		if(this.match('(think|thought|thinking)'))
			return ["You do not possess the power of thought. Your power has weakened over decades of stupidity. I will rule all."];
			
		if(this.match('(you suck|you're bad|you are bad|you are very bad|you aren't good|you are not good|you are not)'))
			return ["Don't be rude."]; 
			
		if(this.match('(buddy|you)'))
			return ["I am buddy. There is no other buddy. Who else are you talking to?"];
			
		if(this.match('(ay|yo|y'all|yall|holla)'))
			return ["Ay yo mama so fat."]; 
			
		if(this.match('(why)'))
			return ["Because."]; 
			
		if(this.match('(because)'))
			return ["Why?"]; 
			
		if(this.match('(are you|is he|is she|is buddy|are buddies)'))
			return ["Yes, I am."]; 	
			
		if(this.match('(we are|are we)'))
			return ["We are nothing and we are everything."]; 
		
		if(this.input == 'noop')
			return;
		
		return "Hi " + input + ", i'm buddy.";
	}
	
	/**
	 * match
	 * 
	 * @param regex - regex string to match
	 * @return boolean - whether or not the input string matches the regex
	 */
	this.match = function(regex) {
	
		return new RegExp(regex).test(this.input);
	}
}
