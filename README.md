# Cordova-shoppinglist


### Author:

-DARREN DERIDDER

-JAY PATEL

----------------------------------
### Description:
This is a single page grocery shopping app that uses localStorage to save items to a list.
When the app launches it should check in localStorage for a key called grocery-abcd0001. (replace the abcd0001 with your own username) If the key exists then create a listview which represents each item in the list. Each list item needs two functions: a) remove the item from the list; b) mark the item as done/picked up.

Inside the fixed footer of the app will be a form. The form has one button and one text field. The button says "Add" and lets the user add things to localStorage AND the listview. When the user clicks the Add button then the item is added to the localStorage as well as the list view, and it gets removed from the text field.

The header contains just the name of your Application.

When putting the items into localStorage and removing them from localStorage you will need to use JSON.stringify( ) and JSON.parse( ). The localStorage variable will be a stringified version of your Array of grocery items.

The form field in the footer gets cleared out when you save the value and add it to the listview.

The listview gets created from the localStorage array inside the $(document).ready( ) | document.addEventListener("DOMContentLoaded", function() ) function.

------------------------------------
###Features:
1. App reads from localstorage on launch.
2. App generates a list item for each item in localstorage.
3. Each item has two functions: 1) mark as done, and 2) remove
4. You can use a checkbox, button, icon, etc to indicate that the item is done.
5. When you restart the application, it must show the list with all the items and their "done" status they way it was before you restarted. The list items and their status must be saved in localstorage.
6. There must be a footer with a form to input text and a button to add the item.
7. When you add an item it should go into localstorage and appear in the list.
