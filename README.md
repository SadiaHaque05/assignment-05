pQuestion-01: What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans: getElementById selects one element from HTML using the given id, it works fast because it directly connects to id ;
getElementsByClassName selects all element that have the same class name, it returns an HTML collection
querySelector selects the first selector that matches any CSS selector, it returns a single DOM element and it only returns the first match whether  querySelectorAll selects all elements that matche the CSS selector and it returns a list of nodes.

Question-02:  How do you **create and insert a new element into the DOM**?
Ans: I can create and insert a new element into the DOM by creating a new element using document.createElement('tag'); then setting an attribute such as innerText, innerHTML, classList etc and then lastly by inserting it into the DOM using appendChild.

Question-03: What is **Event Bubbling** and how does it work?
Ans: Event bubbling is the process where the event starts at the core element and then moves up through it's parents in the DOM tree.
The event occurs first on the element I interacted with, then the event moves up to the parent of that element, then it continues to go upward through each ancestor and this process keeps happening until it reaches the top of the tree.

Question-04:  What is **Event Delegation** in JavaScript? Why is it useful?
Ans: Event delegation is a technique where you just have to attach a single event listener to a parent instead of adding separate listeners to each chikd element.
It is useful in a lot of ways. By using event delegation it takes less space so it needs less memory usage, the code become more cleaner and there is less chance of happening an error, it can handle even newly added child without adding any listener to the new child.

Question-05:  What is the difference between **preventDefault() and stopPropagation()** methods?
Ans: 1. preventDefault stops default action of an element from happening while stopPropagation stops the event from bubbling to parent elements.
     2. preventDefault affects the behaviour of the element itself and stopPropagation affects the path of the event through the DOM.
     3. preventDefault does not stops event bubbling while stopPropagation does stop it and stopPropagation does not stops the default action which preventDefault stops.
