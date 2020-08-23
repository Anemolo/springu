A tiny-spring utility that **returns the change** of the value.

I'm tired of installing popmotion just to get the spring.

This is the younger brother of [Lerpy](https://github.com/Anemolo/lerpy).

# Usage 
```javascript
import springu from 'springu';

let change = springu(obj, key, target, settings);
obj[key] += change;
```
With actual code:
```javascript
import springu from 'springu';

let obj = { x: 0 };
let settings = { spring: 0.8, damping: 0.2,friction: 0.98, snapThreshold: 0.001 };

let changeX = springu(obj, 'x', 1., settings);
obj.x += changeX;
```
1. Call sringu
2. Add the velocity to the value
# A note on API design.

### **No callbacks for when updating or completing.**
 While this makes it so you have to do that manually. It makes checking when multiple springs are done easier to think about and do. Without the need for a super complex API.
  
#### **IMAGINARY API**: callbacks + automatic setting the value
```javascript
// THIS ISN'T THE ACTUAL API. JUST TO ILUSTRATE
import springu from 'springu';

let obj = { x: 0, y: 0 };
let settings = { spring: 0.8, damping: 0.2,friction: 0.98, snapThreshold: 0.001 };
let isXdone = false;
let isYdone = false;

// THIS ISN'T THE ACTUAL API. JUST TO ILUSTRATE
springu(obj, 'x', 1., {...settings, onComplete: () =>{ isXdone = true;  });
springu(obj, 'y', 1., {...settings, onComplete: () =>{ isYdone = true;  });

// THIS ISN'T THE ACTUAL API. JUST TO ILUSTRATE
if(isXdone && isYDone){
	// do something
}
// THIS ISN'T THE ACTUAL API. JUST TO ILUSTRATE
```
This feels like I have to go back and forward to understand what's even happening here.

---
#### **Happy API** : Returning the velocity to allow manual checking


```javascript
import springu from 'springu';

let obj = { x: 0, y: 0 };
let settings = { spring: 0.8, damping: 0.2,friction: 0.98, snapThreshold: 0.001 };

let speedX = springu(obj, 'x', 1., settings);
let speedY = springu(obj, 'y', 1., settings);

obj.x += speedX;
obj.y += speedY;


// Do something if they aren't done
if(speedX || speedY){}
// Do something when both are done
if(!speedX && !speedY){}
```
The code is pretty linear and I can understand/wrap my head around it pretty easily.

### **No automatic adding to the object**

While having to do this is more mental overhead:
```javascript
	obj.x += speedX;
	obj.y += speedY;
```
I have two reasons for doing this.
1. Keep the API the same as my [Lerpy](https://github.com/Anemolo/lerpy) package.
    - Meaning you can swap them with only one line. And you don't need to remember to remove/add that line of code
    - I honeslty forgot about the second one. But yeah, the 1st is more than enough for me 

On that note...

### **Why springu needs the object, while [lerpy](https://github.com/Anemolo/lerpy) doesn't.**
Unlike [lerpy](https://github.com/Anemolo/lerpy), springu needs to hold the current velocity of the spring somewhere. And it also needs to somehow know which is the velocity for certain value. 

The only way of doing that with the [lerpy](https://github.com/Anemolo/lerpy) API, is to rely on call order. Which is not the best of ideas since that's out of the scope of springu.