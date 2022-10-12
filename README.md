1.  #Where Do You Want To Eat?
 is our University of WI Software Development Bootcamp Final Project inspired by Joel Aguirre with collaborators Ellie Diaz and Deb Koch.  Joel and his wife were discussing, again, where to go for dinner with the age-old "I don't know.  Where do you want to eat?" back and forth dialogue.  Joel decided that there should be an app to settle the debate and this project is the result.   

2. This project was created/designed to answer the often asked question on where to eat.  When you open the webpage, you are asked to set your location.  You have the option to sign-up or log-in, however, you can skip that and simply enter the type of cuisine you're leaning towards then click "Find It Now".  The app will generate a list of the restaurants within a 5-6 mile radius of your current location that match the cuisine type you entered.  Next, click on "Pick a Restaurant For Me" and a randomly chosen restaurant from the list will be displayed.  That's where you're going to dinner!   If the chosen place is a No-Go, then "Pick Again" for another choice (although this is not currently functional) or at the top click on "I Changed My Mind" and enter a new cuisine choice for a new list of restaurants. 
    a. In satisfying the application requirements, Express-Node.js was used for the backend, React was used for the frontend and we used Mongodb for our database.  It also required a secure sign-up and log-in option.  The app is deployed on Netlify at https://wheredoyouwanttoeat.netlify.app/

    b. As coding newbies, some of our biggest challenges were:
        -getting the chosen restaurant to display on the browser;
        -adding the user authenticator.
    
    c. Features we would still like to implement are:
        -making the "Pick Again" button actually bring up a different randomly selected restaurant; 
        -having a user's favorites list to select from;
        -ability to comment on a restaurant;
        -exclude a restaurant choice that has already been chosen;
        -limit restaurants provided based on reviewer rating.

3. How to Use the Project:  When you just can't decide where to eat, let the app choose for you!

4. Credits:
    Collaborators:  Joel    github.com/jaguirre815  linkedin.com/in/joel-aguirre
                    Ellie   github.com/Elliediazz   linkedin.com/in/elliediaz
                    Deb     github.com/DebraMK      linkedin.com/in/debra-koch
                    
    Instructors:    Chris Mendoza
                    Ava Wingfield
