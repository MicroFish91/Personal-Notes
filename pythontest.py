userInput = input("What phrase would you like to have long vowels? ")

vowels = ["E", "e", "O", "o"]
vowelNumber = 0
lastVowel = ""
output = ""
    
for index, character in enumerate(userInput):

    vowelCheck = False

    for vowel in vowels:

        # Check if character is a vowel
        if character == vowel:
            vowelCheck = True

    # Next Sort the Logic....
    # If we're not seeing a repeat vowel
    if character != lastVowel:

        # If last vowel wasn't repeating, we still need to log it
        if vowelNumber == 1:
            output += lastVowel
            lastVowel = ""
            vowelNumber = 0

        # If just ending repeat vowel, need to log into output
        if vowelNumber >= 2:
            output += lastVowel * 5
            lastVowel = ""
            vowelNumber = 0

        # Check to see if new character is a vowel
        if vowelCheck:
            vowelNumber += 1
            lastVowel = character
        # If not, it must be a consonant
        else:
            lastVowel = ""
            vowelNumber = 0
            output += character

        # If last char is a vowel
        if (vowelCheck and index == (len(userInput) - 1)):
            output += character

    # Else, it must be a repeat of the last vowel
    else: 
        vowelNumber += 1
        lastVowel = character

        # If last char is a vowel
        if(vowelCheck and index == (len(userInput) - 1)):
            if(vowelNumber < 5):
                output += character * 5
            else:
                output += character * vowelNumber
    
print(output)