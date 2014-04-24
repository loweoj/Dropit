/*
 * Dropit v2.0
 * http://dev7studios.com/dropit
 *
 * Modified to v2.0 by Oliver Lowe
 *
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

;(function($) {

    $.fn.dropit = function(method) {

        var methods = {

            init : function(options) {
                self = methods;
                this.dropit.settings = $.extend({}, this.dropit.defaults, options);
                return this.each(function() {
                    var $el = $(this),
                         el = this,
                         settings = $.fn.dropit.settings;

                    // Check we don't have a . at beginning of openClass
                    if( settings.openClass.charAt(0) == '.' ) settings.openClass = settings.openClass.substring(1);

                    // Hide initial submenus
                    $el.addClass('dropdown')
                        .find('>'+settings.triggerEl).addClass('dropdown__toggle').end()
                        .find(settings.submenuEl).addClass('dropdown__menu').hide();

                    // Open on click
                    $el.on(settings.action, ' > '+ settings.triggerEl +'', function(e) {
                        if($(this).parents(settings.triggerParentEl).hasClass(settings.openClass)) {
                            self.hideDropdowns(this, settings);
                            return false
                        }
                        self.hideDropdowns(this, settings);

                        settings.beforeShow.call(this);
                        $(this).parents(settings.triggerParentEl)
                                .addClass(settings.openClass)
                                .find(settings.submenuEl).show();
                        settings.afterShow.call(this);
                        return false;
                    });

                    // Close if outside click
                    $(document).on('click', function(){
                        settings.beforeHide.call(this);
                        $('.' + settings.openClass).removeClass(settings.openClass).find('.dropdown__menu').hide();
                        settings.afterHide.call(this);
                    });

                    settings.afterLoad.call(this);
                });
            },

            hideDropdowns: function(el, settings) {
                settings.beforeHide.call(el);
                $('.'+settings.openClass)
                    .removeClass(settings.openClass)
                    .find('.dropdown-__menu').hide();
                settings.afterHide.call(el);
            }
        }

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error( 'Method "' +  method + '" does not exist in dropdown plugin!');
        }

        return this;

    }

    $.fn.dropit.defaults = {
        action: 'click', // The open action for the trigger
        submenuEl: 'ul', // The submenu element
        triggerEl: 'a', // The trigger element
        triggerParentEl: 'li', // The trigger parent element
        openClass: 'dropdown-open',
        afterLoad: function(){}, // Triggers when plugin has loaded
        beforeShow: function(){}, // Triggers before submenu is shown
        afterShow: function(){}, // Triggers after submenu is shown
        beforeHide: function(){}, // Triggers before submenu is hidden
        afterHide: function(){} // Triggers before submenu is hidden
    }

    $.fn.dropit.settings = {}

})(jQuery);