
# LinkedIn Extension.




## Description

This is a LinkedIn Extension made as a task for internship.

This automates your linkedIn to accept , connect and withdraw all requests on the page.


## Run Locally

Clone the project

```bash
  git clone git@github.com:ManasJadhav/LinkedIn-Extension.git
```

Go to chrome Extension Tab and enable developer mode.

Click on Load unpacked and upload the cloned folder.

## Authors  

- [Manas Jadhav](https://github.com/ManasJadhav)




## Documentation

[Documentation](https://linktodocumentation)

This Extension is written in HTML , CSS , JS.

We need to inject the script in the active tab for which we use "Chrome.scripting.excuteScript" on the current Tab 

This takes 2 parameters that is 
    
    1. Target = tab on which we inject script.

    2. Files = file that we inject.

whenever we click on the button that script is injected and the fuctions written in the files run.

We have used setTimeout functions to delay the functions till UI changes are complete.
