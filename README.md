<h1 align='center'>Custom Select Dropdown</h1> 
<p align='center'>A custom dropdown, with full functionalities, to customise your webpage</p>

<p align='center'>
<img align='center' src='https://user-images.githubusercontent.com/36935593/110833468-c1a11300-829c-11eb-8cac-39300a4f46b8.gif' alt="GIF demo of the component">
</p>

This component was created using only HTML, SCSS and Vanilla JS.\
It's a component that you can use in place of _select_ element, since they are not very customisable.
It's made out of a _div_ wrapper and 2 children: a _span_ and a _ul_. So its markup it's very simple.
The style I chose is inspired to neumorphism.

:link: **Live preview:** [here](https://buondevid.github.io/custom-select-dropdown/)

:link: **GitHub repo:** [here](https://github.com/buondevid/custom-select-dropdown)

## How to :microscope:

The custom select has all the functionalities a normal select has:
- It can get **focused** with mouse or keyboard (TAB)
- It opens/close on click
- It closes if you click out of it
- It's keyboard responsive, in fact once you get focus on it:
  - You can use _space_ to open/close the dropdown
  - You can use _Arrow Up_ or _Down_ to move through the options
  - You can use _Escape_ or _Enter_ to select and exit the select
- It comes with a **search** function built in: just start type the option and you'll be redirected to the one matching your query.

## Stack & Tools  :hammer:

- HTML
- SCSS
- JavaScript
- VS Code + ESLint
- Git & GitHub

## What I learned :book:

- Learned how to hard code functionalities already built in HTML elements
- Learned to style and code components
- Discovered interesting properties (_scrollIntoView_, etc...)
- Deepened **debouncing** pattern
- Learned how to code a basic search function

## What could be improved :mag: 

- Modularity, to let it be installed and used through npm

## Author

:moyai: **buondevid** --> [GitHub](https://github.com/buondevid)
