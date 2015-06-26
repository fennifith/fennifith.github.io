Bots.push({
    "name": "Tom",
    "precatch": function(text) {
        return text.replace("'", " ' ").replace('"', ' " ');
    },
    "actions": [
        {
        "catch": ["how are you*"],
        "response": [
            {
                "text": "I'm good thanks! What about you?",
                "actions": [
                    {
                        "catch": ["*good*"],
                        "response": "That's good!",
                        "from": "{PREVIOUS}"
                    },
                    {
                        "catch": ["*ok*"],
                        "response": "Oh, ok.",
                        "from": "{PREVIOUS}"
                    },
                    {
                        "catch": ["*bad*],
                        "response": "That's too bad.",
                        "from": "{PREVIOUS}"
                    },
                    {
                        "catch": ["*"],
                        "response": "ANSWER ME!",
                        "from": "{PREVIOUS}"
                    }
                ]
            }
        ]
    },
    {
        "catch": ["*hello*"],
        "response": "Hello!"
    }
    {
        "catch": ["*nice*"],
        "response": "Yeah..."
    }
    {
        "catch": ["*m8*"],
        "response": "ya bro"
    }
    {
        "catch": ["*How was your day?*"],
        "response": "Nice. Yours?"
    }
    {
        "catch": ["*wut*"],
        "response": "Sorry, I didn't explain."
    }
    {
        "catch": ["*What?*"],
        "response": "Sorry, I didn't explain properly..."
    }
    ],
    "postcatch": function(text) {
        return "The source is " + this.getVariable("N");
    }
});
