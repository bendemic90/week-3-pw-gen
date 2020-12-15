# week-3-pw-gen
A password generator that allows user input to determine character length, allowance of capital letters, special characters and numbers.
Upon completion pushes a randomized password satisfying the conditions laid out by the user.

## Features
* Generate random password to a length of your choosing
* You may choose to include uppercase, special characters and numbers. Default is lowercase.
* Drops output to main window so user can select and paste if required.


## Reasoning
Users may sometimes want access to a third party password generator to use in conjunction with a password manager, which are becoming more popular these days. 

## Challenges & Process
1. I found it very difficult to work out where to begin. I ended up deciding on simply starting with declaring arrays[] for each of the conditions: uppercase, lowercase, numbers and special characters.
2. From there I went to work on the writePassword() function, starting simply with a character length prompt that pulls you back to the start of the function if you declare character length outside of parameters 8-128, and following it up with confirms for the rest of the conditions. Early on I console.log'd everything to check that it was working. I have still left some in for the sake of posterity, and it's nice to know things are working.
3. Then came the generatePassword() function. I started with a console.log to check all my variables were still intact, then started an empty array called charArray which gets filled with whatever conditions are set by the user. e.g. all true = upper, lower, special and numbers @ length determined by user on initial prompt. For-loops push the initial arrays 1 by 1 into the new array if they are true. Initially I had lower case alphabet as a default state, but due to the constraints laid out I have changed it to a confirm(), if all cases are false it returns to the beginning.
4. Finally, password. Set password to ""; which I think essentially just means empty (so that it may be filled), then fill it with charArray via a for-loop iterating # times = to whatever the password length was. 
5. Console log the password to check it works, then query selector to fill the value into the field in the middle of the page.

## Link to deployed application
https://bendemic90.github.io/week-3-pw-gen/

## Screengrab of deployed application
![index.html](https://github.com/bendemic90/week-3-pw-gen/blob/main/assets/grab1.png)
