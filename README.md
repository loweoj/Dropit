## Dropit 2.0

Dropit is a stupidly simple jQuery dropdown plugin. It was modified to version 2.0 by Oliver Lowe.

## Changelog
* Convert classes to BEM syntax:
    ```
    .dropdown__menu
    .dropdown__toggle


##Example Usage

    <script type="text/javascript">
    $(document).ready(function() {
        $('.dropdown').dropit();
    });
    </script>

##Settings

The following list outlines the settings and their defualt values:

    $('.dropdown').dropit({
        action: 'click', // The open action for the trigger
        submenuEl: 'ul', // The submenu element
        triggerEl: 'a', // The trigger element
        triggerParentEl: 'li', // The trigger parent element
        openClass: 'dropdown--open', // The class added when dropdown open
        afterLoad: function(){}, // Triggers when plugin has loaded
        beforeShow: function(){}, // Triggers before submenu is shown
        afterShow: function(){}, // Triggers after submenu is shown
        beforeHide: function(){}, // Triggers before submenu is hidden
        afterHide: function(){} // Triggers before submenu is hidden
    });


```
<div class="dropdown">
    <a href="#">Dropdown</a>
    <ul>
        <li><a href="#">A New Link</a></li>
        <li><a href="#">A New Link</a></li>
        <li><a href="#">A New Link</a></li>
    </div>
</div>
```