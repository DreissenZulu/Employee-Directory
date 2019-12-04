# Employee-Directory
An employee directory created using React JS, including filter and sorting options. The list of employees is generated using a seed and the Random User API at https://randomuser.me/

## Approach
Unlike using just HTML, CSS, and JavaScript, using React required me to put more consideration into the structure of my web page. I needed to consider the elements I needed, and how to compartmentalize the necessary parts such that they can be updated as necessary. Thus, my approach contained a greater focus on the design of the Employee Directory.
1. Create a list of employees using the Random User API
2. Allow the user to sort the list by changing the page's state
3. Allow the user to search the list by passing in a search as a state

## Challenges
For the main employee table, I decided to use a class compoment since I wasn't familiar with functional components. I wanted to put the search bar component outside of the employee list component, which resulted in my first problem. My search bar is designed to update the state of App.js with every key press, and I needed a way to pass in the prop to the employee list component. The methods I tried to use to update the EmployeeList.js state would result in an infinite loop of updates, until I used the getDerivedStateFromProps method, this solved the infinite loop issue, while allowing me to pass every search to the EmployeeList component for rendering.

My second major issue was in sorting the list. My idea is to allow the user to select the table headings to sort in ascending or descending order. Initially, I placed the sorting function inside the EmployeeList component, which would be called immediately after the button click event method is called. This function worked with one glaring issue: the list would finish sorting _after_ the the component was rerendered! I found the issue was easily solved by passing in the sorting parameters into the EmployeeInfo component and using my sorting method in the same place, ensuring that the list is always sorted before returning the component.