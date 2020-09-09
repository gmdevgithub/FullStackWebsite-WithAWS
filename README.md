# Cplusplusnewb
Starter project for everyone wanting to learn the basics of computer science plus a coding language plus they are a newb

***********************************************************************************************************************************************

# Start here newb!
Here's a fun little menu for all us newbs to follow and remember what we did haha

## Menu
**Start here if you don't know anything about coding**
- What is computer science? [ComputerScience](#ComputerScience)
  - What is coding? [Coding](#Coding)
  - What does coding look like from a computer science students experience at a university? [LearningFromNIU](#LearningFromNIU)

**Start here if you want to learn about the project you're looking at**
- What is this project? [ProjectGoal](#ProjectGoal)

**Start Coding !**
- Immediatley jump into coding, seriously, right now [letsStart](#letsStart)
  - [Part1](#Part1) Basic programm
  - [Part2](#Part2) Add some fancy boxes
  - [Part3](#Part3) Add your own functions and learn pointers/references
  - [Part4](#Part4) Fancy crap
  
- How I integrated github's API into my C++ project [GithubAPI](#GitAPI)

**Want to learn how I made this?!**

 
 
 
 
***********************************************************************************************************************************************
 
# ComputerScience

Computer Science is many things you can find way more information on this on my website [CodingCodeWhileGoofin](https://yupimaperson101.wixsite.com/codingcodeandgoofin) , or all over the internet!

Computer Sciene in general is the study or dicipline of anything related to computers but more so leaning towards the theory and design behind it.

"Computer science is the study of computation and information. Computer science deals with theory of computation, algorithms, computational problems and the design of computer systems hardware, software and applications." From wikipedia https://en.wikipedia.org/wiki/Computer_science

Computer Science includes:
* Coding/Programming/Softwaredevelopment*
* Creating systems, companies, and enhancing everyday life *
* Has to do with movies, video games, almost all electrical technology*
* Banking, business, and many others*

The great thing about computer science is that it is mostly a broad topic and can include tons of different areas in life you never even thought of.

Pretty much everyone and every electronic system or item used by the world today had to do with computer science. The reach of this field is insane.

Right along with Computer Scientists are Computer Engineers who design more of the hardware/software system side of things. 

But there is also subsets of Computer Scientists, such as software engineers who rarley deal with the actual hardware side of things which makes them more of a computer scientist.

There was also a whole field of mathematics (Discrete) that sort of developed due to computers. 

Computers/Computer Scientists also influence world innovation, progression, domination, and destruction all at the same time lol. 

- Confusing?

It still confuses me, to be honest if you really want to learn in depth about the field you really just have to jump into it! 

If you'd like to get started learning about COMPUTER SCIENCE right away I'd say that Micheal Reeves is a fun and interesting way to see whats possible in the field by even an "amateur" 

[![Micheal Reeves videos](http://img.youtube.com/vi/A_BlNA7bBxo/0.jpg)](http://www.youtube.com/watch?v=A_BlNA7bBxo "Micheal Reeves")

Tip: I inserted this video into Markdown language if yall nerds know what that means via [EmbedYoutube](http://embedyoutube.org/)
 
## Coding
yeeee

## LearningFromNIU
boiiiiiiii
 
 
# LetsStart

#### PART1

[BacktoTopofPage](#Menu)

I think we can get started with some very simple coding , completley free with no hassle just by opening an online coding IDE/Compiler for C++. 
Don't worry what the heck that means just open this link in a new tab

- Link to open [CLICK ME](https://www.tutorialspoint.com/compile_cpp_online.php)

^ This is your compiler and makes your program work

Fun fact: This site itself has many compilers and other fun coding things



Now open this site in a new tab too, and save it ya goof

- Slap this boi right here [OPEN ME](https://www.geeksforgeeks.org/c-plus-plus/?ref=leftbar)


That's about all we need to get started on fully learning c++, more complex stuff to come later or in another project :D 


So what is this junk? Well I could sit here for hours like some of my teachers did rambling on about what and IDE is and compilers and blah blah blah. 

Don't get me wrong it is important to know and I included links to resources to learn in depth what these do at a later time here [LearnTheDeets](#ComputerScience)

But since I'm trying to make this fun and easy to learn, just know that basically the first link is an online IDE. IDE's are like a coders main HUB.
* It's really just a tool/app to make ugly coding look pretty and easier to create other apps *
Almost any coding you will do especially as a newb will be in one of these.

Later we might download a more complex one. For basic C++ this will work fine.

Now time to learn the basics:

*NOTE* Everything in this tutorial in case I havn't mentioned it enough is suppose to be fun and easy to learn not super technical 

At the top of almost any good C++ program is the infamous line #include < iostream >. This basically will upload code that someone else already wrote that is super basic and will help you write programs faster.

More on that later [GreatC++technicalwebsite](http://www.cplusplus.com/reference/iostream/)

Then you should see a bunch of other junk, just add it anytime you start a new C++ program for now.

Focus mainly on int main() { ..... }  because this is actually your very first program already written for you. Everything inside the curly brackets is the programm.

Go ahead and click on EXECUTE in the top left. Basically this just "starts" the program. It should say Hello World on the right in the results tab.

All done!

![image info](C:\Users\Yupim\Pictures)

Now instead of boring you with learning header files, primitives, blah blah blah the PoWEr oF C++ iS AMAZing! We will write 3 programs right off the bat.


#### PART2 

[BacktoTopofPage](#Menu)

Lets do some fancy stuff. So now inside of int main() {....} we are going to write our first programm all in one "file". 

Refer to the geeksforgeeks website above if you get lost or are confused. 

Lets make our first CONTAINER or ARRAY as it's also called. Basically this is a "box" which holds things for you in a specific order. 

Write inside your main() function between the brackets

{
    int a[9];

}

Hit EXECUTE again and it should have done basically nothing. That's because our silly goose selves didn't put anything in the box. We only describes or DECLARED how big we want the box. We said YO,  variable a [ ] I want this box thing to be 9 integers (numbers) long. 

Keep our function same as before, but write this additional piece of code:
{
   int a[9];
   
   for(int i = 0; i <= 9; ++i)
   {
       
       a[i] = i;
       
       cout << a[i];
       
       cout << endl;
       
       
       
   }
}

If you get lost look at my example posted here: [Example]( http://tpcg.io/vfEqvQTX )

You'll see that your box got filled with the correct ammount of numbers we said to on the right! The thing that filled the box was the part that says for( ). 
This is a special thing called an iterative loop.

* I like to call these bad boys : Todds 

Basically we say hey, I want to start at some number ( 0 ) and then I want you to go up to 9 numbers okay?

The loop is then confused, he still needs to know how to count. Kinda like a toddler.

So, as you do with toddlers, you teach them that everytime they finish doing what we want to add 1 ( Because we did one thing ).

In code we write ++i or i++ or i-- or i + i.................  this basically just means hey keep adding or subtracting by 1 

This is why I think of them as toddlers. 

So long story short since we are lazy and dont have time to sit around and count all day we hired a toddler to do it for us forever.

* He fills the box, but only how you tell him to.

Now in my code you might also notice that our toddler buddy actually put 10 numbers into our box instead of 9 like a freaking idio.......

He's actually right. Arrays count 0 as a number. In magical coding world , 0 is a counting number. So if we said add 9 numbers to the box , we add 0-9 which is actually 10 numbers. 

Hey man I dont make the rules in magical coding world. 

Also you might see alot of << and >> and  ( COUT ) and other confusing things like (ENDL). Just know for know that this is all just more computer magic to make your screen show what you wrote and make it not look like  * c  r   a   p

If you see a thing that says sizeof() this is actually another mini-function. We are about to write one ourselves. Feel free to mess with the box you just learned about!

Remember how that weird #include thing basically includes other peoples code into ours thats better?

Well we need to now add #include <vector> to get a special container called a VECTOR. 
  
A Vector is basically just a fancy pants version of an ARRAY we just learned about. Remember? The box that the toddler filled?

Well now our toddler just got a super fancy box that allows him to not have to think so much so he can go play at the playground.


Now write this or just copy my code I give you lol ( practice makes perfect though ) keep everything the same but add:
{

   vector<int> b = {0,1,2,3,4,5,6,7,8,9};
   
   cout << b[5];
   
   cout << endl << " " << endl;
   
   cout << b.size() << endl << endl;
   
   b.pop_back(); 
   b.push_back(400);
   
   
   
    if( b.size() == 10)
    {
        cout << b[9];
        
        
    }
    else
    {
        
        cout << "error";
        
    }
  
  cout << endl << endl;
  
  list<int> boringNumberList = { 1, 2, 3 };
  list<int> boringNumberList2 = { 4, 5, 6 };
  list<int> boringNumberList3 = { 1, 2, 3 };
  
  list<list <int>> kindaCoolNumberList =  {boringNumberList , boringNumberList2 , boringNumberList3};
  
  cout << "************** OUR LIST OF LISTS USING A LIST ****************************************************" << endl << endl;
  
  int counter = 0;
  for (list<list<int>>::iterator itr = kindaCoolNumberList.begin(); itr != kindaCoolNumberList.end(); itr++)
    {
        
        for ( list<int>::iterator it = itr->begin(); it != itr->end(); it++)
        {
            cout << *it << "  ";
        } 
        
        counter++;
        
        cout << endl << "- List " << counter << endl << endl;
    }
}

Now you might look at this as a beginner and go ... oh crap what just happend. Don't worry its easier than it looks and you might understand it right away.

#### PART3

[BacktoTopofPage](#Menu)

Part 3 of this " Tutorial " will finish explaining the code I just gave you, as well as a lil more detail!

Just to let you know after PART 3 there is an extra part 4 that is really probably too advanced for a beginner but I would consider it better then most of what you find online because... well my codes just easier to read and makes more sense to me haha. 

As a bonus bonus if you're really feeling like exploring and learning check out my GitAPI section bellow too!





# GitAPI
I thought it would be a great idea to learn how github itself works and include it in my first project! This is just a bonus but great practice.
If you've made it to this point, congrats! You are now as experienced as I am at this point in time!

The first thing I did to incoorperate the github API into my project was to read a bit into their documentation for it found here [APIdoc](https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api)

Its pretty cool! The instructions are a little unclear. Just download git first as you have hopefully already done and then download cURL.
Copy everything but the dollar sign and paste it into git and hit enter. 
From here you can go back to github and set up a token and find your own personal account information through JSON!



[BacktoTopofPage](#Menu)

### Giovanni Moscato 2020
