Answer to q. no: 1
Dffrence beetween getElementById, getElementsByClassName, and querySelector / querySelectorAll
getElementById: With this we can get a spcific id ,by this we can select ONE element.
getElementsByClassName: With this we can get specific class,by this we can select all elements with specific class.
querySelector: With this we can get ONE element that match first.
querySelectorAll: With this we can get all matching elements.(ex.class/id/tag).

Answer to q. no: 2
To create and insert a new element into the DOM JavaScript built-in DOM manipulation mathods.
The process mainly work in three steps:
1.Create the element
2.Modify the element
3.Insert the element into the DOM

Answer to q. no: 3
Event bubbling is a process where an event starts from the target element and propagets upword
through its parent element in the DOM. When a event occours on a child element, it first executes
on that element and then moves up to its parents. So, mainly its starts from target element ,then moves 
up to parent and keep continueing this until reaches the root.
For stop bubbling we can use event.stopPropagation()

Answer to q. no: 4
Event delegation is a tecnique where a single event listener is attached to a parent
element to handle events for its child eliments. It works using event bubbling and the 
(event.target)property.
It is useful because it improves performance, reduce memory uses, and works for dynamically added elements.

Answer to q. no: 5
preventDefault() and stopPropagation() Both are event methods in JavaScript, but they serve diffrent purposes. 
Difference between preventDefault() and stopPropagation() methods
PreventDefault:
It prevent the browsers defult behavior for an event.
It does not stop the event from bubbling.
It use for form,links and pravent page refresh etc.
StopPropagation:
It stops the event from bubbling up the DOM tree.
It does not stop the defult browser action.
It use for controlling parent event.



