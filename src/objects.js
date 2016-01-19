(function() {
  'use strict';

  window.objects = {};

//Today we're going to get in a bunch of practice with objects.
//As you start your JS journey, there's a ton of value in just building out the muscle memory for the fundamentals.
//To get these fundamentals as deeply embedded as possible, type them out new each time. Avoid copying code, as you're just ignoring a chance to get in more useful practice.


  objects.mysticalAnimal = function(){
  	// 1. To start, let's create a variable, mysticalAnimal
  	// and set it equal to an object literal.
  	var mysticalAnimal = {};
  	// 2. Place your mystical animal after the return statement
  	return mysticalAnimal;
  };
  // don't touch this line
  
  var mysticalAnimal = objects.mysticalAnimal();

// Dot Notation:
// Recall that dot notation takes whatever is to the right of the dot, turns it into a string, and looks up that string as a property name in the object to the left of the dot.
// Let's use dot notation to add some properties to mysticalAnimal.


  objects.addFirstProperty = function(){
  	// 1. Using Dot notation, add a 'type' property to mysticalAnimal and set it equal to 'dragon'.
  	// 2. place your new mysticalAnimal after return statement
  	return 
  };

  objects.addSecondProperty = function(){
  	// 1. Add a name property, and set it equal to 'Leslie'.
  	// 2. place your new mystical animal after the return statement
  	return
  };
  
  objects.addThirdProperty = function(){
  	// 1. Add a 'cool' property, and set it equal to true.
  	// 2. place your new mystical animal after the return statement
  	return 
  };


  objects.addFourthProperty = function(){
  	//1. Add a 'likes' property to your mysticalAnimal, and set it equal to an empty array.
  	//2. Place your mysticalAnimal after the return statement.
  	return 
  };

  objects.addFifthProperty = function(){
 	//1. Add a property called 'bestFriend', and set it equal to your Kanye West.
  	//2. Place your mysticalAnimal after the return statement.
  	return 
  };

// ACCESS USING DOT NOTATION

  objects.accessFirstProperty = function(){
  	//1. use dot notation to return the value 'dragon' saved in your 
  	// mystical animal.

  	return
  }

  objects.accessSecondProperty = function(){
  	//1. use dot notation to return the value 'Leslie' saved in your 
  	// mystical animal.

  	return 
  }

   objects.accessThirdProperty = function(){
  	//1. use dot notation to return the boolean true saved in your 
  	// mystical animal.

  	return 
  }

  objects.accessFourthProperty = function(){
  	//1. use dot notation to return the empty array saved in your 
  	// mystical animal.

  	return 
  }

  objects.accessFifthProperty = function(){
  	//1. use dot notation to return the value 'Kanye West' saved in your 
  	// mystical animal.

  	return 
  }

// Hopefully this starts to feel somewhat repetitive- that's awesome! That means that you're learing this super well so far. 
// If it doesn't, try going back and doing it again on your own time.

// Bracket notation:
// Recall that we can do two different things with bracket notation:
  // A. Evaluate a variable or expression, and look up what that variable evalutates to as a property name in the object.
  // B. Pass in a string (as noted by the quotes surrounding it) and look up that string as a property name in the object.
// Remember that bracket notation is the ONLY way to look up variables or expressions when using them with objects.

  objects.addSixthProperty = function(){
  	// 1. on the line ABOVE this function, create a variable called newPropertyToAdd, and set it equal to 'food'.
    // 2. Now, using bracket notation and newPropertyToAdd, create a food property on our mysticalAnimal object, and set it equal to 'BBQ'. NOTE: you should not be typing the word food to accomplish this task!
  	return
  };

  // Before moving on, What do you expect to happen when we type in the following line?
  // mysticalAnimal[newPropertyToAdd] = true;
  // Think through this with your pair. Then uncomment that line and console.log mysticalAnimal afterwards!
  // Now let's talk through what just happened:
    // The JS interpreter reads the line of code from left to right, just as we do.
    // The first thing it does is encounter the variable mysticalAnimal. It looks up what this variable points to, and finds that it evaluates to an object.
    // That object is now what the computer holds, as a result of evaluating the variable mysticalAnimal.
    // Next, it recognizes the brackets. It knows to evaluate whatever comes inside the brackets, and then look up the results of that as a property name on the object.
    // Next, it encounters the thing inside the brackets. In this case, that thing is a variable. So, it goes off and looks up what that variable is. It finds that variable is equal to the string 'canFly'.
    // Now, it looks up the string 'canFly' as a property name on our mysticalAnimal object, and returns the value that is stored at that property name, which is the boolean value true in this case.
  // That's pretty cool that we can pretend to be the machine and explain exactly what it's doing with each character of code that we've written! See, no black magic here. It just follows a set of rules that we've agreed on beforehand.



// At this point, you've gotten great practice setting properties of objects using both dot and bracket notation. Now let's get in some practice accessing those properties and when to use each form of access.
// HINT: When looking up a string, use dot notation. When looking up a variable, use bracket notation! This is all you need to know 98% of the time.

// 1. right below this line Create a variable called thisIsAVariable. Set it equal to the string 'superPower'.


  objects.variablePracticeOne = function(){
  // 1. What do you expect to happen when we try the following line? Talk this through with your partner for a minute.
  // 2. Set the correctAnswer variable to the value you think mysticalAnimal.thisIsAVariable is going to evaluate to.
  // NOTE: do not set 'correctAnswer' to mysticalAnimal.thisIsAVariable, rather to the value you think it will evaluate to..
  var correctAnswer;
  // return correctAnswer.toString();
    return 
  };

//Answer Explanation: The dot notation means that JS is going to try to look for a property name that is exactly the string after the dot- in this case, it's looking for a property called thisIsAVariable in our mysticalAnimal object. And clearly we don't have a property named that, so it will return undefined!

  objects.variablePracticeTwo = function(){
  // 1. Now try using thisIsAVariable using the proper form of access for variables. What do you get this time?
  // 2. return the value you think mysticalAnimal.thisIsAVariable is going to evaluate to.
  // NOTE: do not sect 'correctAnswer' to the value, but to the value you think it's going to evaluate to.
  var correctAnswer;
  //return correctAnswer
    return
  };

  // Object Literals:
	// One last practice! So far we've been going through and creating different properties one by one. Let's use object literal notation to do a bunch at once!
	// We can create an object and give it properties all at the same time using object literal notation. An example:
	/*
  var goalsForTheYear = {
    cycling: '5000 miles',
    climbing: '100 days',
    giving: 'selflessly'
  };
	*/
  objects.literalObject = function(){

  	// Create a new variable called mysticalAnimal2, and set it equal to an object literal with the following properties:
  	// type
  	// name
  	// likes
  	// bestFriend
  	// superPower
  	// food
  	// canFly
    // collects


    // return mysticalAnimal2
  	return
  }
 
// Awesome, by now you should have a pretty good familiarity with objects, bracket and dot notation, object literals, and accessing properties of objects. Feel free to keep exploring more on your own; objects are important things to understand!

}());


