# Homogram   
## Every person its pictures..   
  
Hello and welcome to Homogram!   
	   
Homogram is a light and simple software on premise to share your images. And it can be used as a private repository (screenshots, private shots, etc).   
	   
Homogram is released under GPLv3 license, it is supplied AS-IS and we do not take any responsibility for its misusage.   
	   
The name *Homogram* comes from a prank on the name 'instagram', in fact differently from the latter Homogram gives priorities to homines. However Homogram doesn't birth as its replacement but just like its alter ego.     
     
First step, use the left side panel password and salt fields to create the hash to insert in the config file. Remember to manually set there also the salt value.   
	   
As you are going to run Homogram in the PHP process context, using a limited web server or phpfpm user, you must follow some simple directives for an optimal first setup:   
 
- Check the write permissions of your "HGRepo" folder in your web app public path; and set its path in the config file.   
- Check the write permissions of your "data" folder in your web app private path; and set its path in the config file.
- Set the default Locale.   
- Set the default Context to PUBLIC or PRIVATE (for a private repository).  
- Every picture folder may contain a "thumbs" folder - that you should create - to not lack in performance.   
     
Hope you can enjoy it and let us know about any feedback: <a href="mailto:info@homogram.org" style="color:#e6d236;">info@homogram.org</a>   
   
### Voyeur: the on demand hosting service for Homogram   
  
Optionally you can request us to host Homogram for you, for 5$ a month each 2GB of space.  
For more info please write to <a href="mailto:info@homogram.org" style="color:#e6d236;">info@homogram.org</a>

### Screenshot:

 ![Homogram in action](/Public/static/res/screenshot1.jpg)
  
