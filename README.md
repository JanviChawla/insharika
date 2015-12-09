# insharika
Fixed form poetry writing tool/editor

##For Developers
Insharika is a static HTML web application which uses Bootstrap, JQuery and Javascript to function.

This project does not require any special compiler.

###Setting up Dependencies
####Bootstrap
Get Bootstrap here: http://getbootstrap.com
Choose the "Download Bootstrap" option, save to your desired location.    
This method will not require further set up; everything you need to get   
started will be in the zip file.

To access the Bootstrap plugins:
  Include the CSS link for every Bootstrap plugin you want to use:   
```<link href= "css/<desired plugin>.css" rel="style-sheet">```    
  Include the javascript file:  
```<script src="js/<desired plugin.js"></script> ```

####JQuery
*Note: JQuery is required to work with Bootstrap's javascript plugins

Include this JQuery API call in your file header as a script:
   
   ``` <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    ```

###Compatibility
To use this application with IE8, the following should be included somewhere in the file header
``` <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      ```
