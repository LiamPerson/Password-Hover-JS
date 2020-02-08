# Password Hover JS
 Allow users to see their typed password on hovering a button in the input box. For web.

<a href="https://github.com/YeloPartyHat/Password-Hover-JS/edit/master/passwordHover.js" download>Password Hover.js </a><- Right click <strong>"Save link as..."</strong>

<p>Not Hovering:</p>
<img src="https://raw.githubusercontent.com/YeloPartyHat/Password-Hover-JS/master/exampleImages/notHovering.PNG" alt="Password input field">

<p>Hovering:</p>
<img src="https://raw.githubusercontent.com/YeloPartyHat/Password-Hover-JS/master/exampleImages/hovering.PNG" alt="Hovering on password input field">

Just add the class ```showPasswordOnHover``` to your password inputs to add functionality. Load in after jQuery.

<hr>

Load in example:
```
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="/js/passwordHover.js"></script>
```

Example use:
```<input type="password" class="showPasswordOnHover">```


<hr>

You can un-comment the marked section in the code if you're using Font-Awesome 4 to use that icon.
Also if you want to change the icon just change the ```const VISION_ICON```though you will also need to change the ``top: 25.5%;right: 15px;`` values to get the icon to sit right.
