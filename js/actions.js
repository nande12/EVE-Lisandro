document.addEventListener("DOMContentLoaded", function(event) {


    // *** getClosestParent ***
    // Use this function to get the closest parent element with a matching selector
    var getClosestParent = function (elem, selector) {

        // Element.matches() polyfill
        if (!Element.prototype.matches) {
            Element.prototype.matches =
                Element.prototype.matchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector ||
                Element.prototype.oMatchesSelector ||
                Element.prototype.webkitMatchesSelector ||
                function (s) {
                    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                        i = matches.length;
                    while (--i >= 0 && matches.item(i) !== this) { }
                    return i > -1;
                };
        }
  
        // Get the closest matching element
        for (; elem && elem !== document; elem = elem.parentNode) {
            if (elem.matches(selector)) return elem;
        }
        return null;
  
    };



    // TOGGLE
    var toggle = document.querySelectorAll('.theToggle');

    for (var i = 0; i < toggle.length; i++) {
        toggle[i].addEventListener('click', function(e){
            if (e.target.checked) {
                e.target.classList.add('checked');
                var toggleParent = getClosestParent(e.target, '.toggle-parent');
                var thisInput = toggleParent.querySelector('.action-input');
                var thisInputLabel = toggleParent.querySelector('.selected-asset-label');
                var isSwitch = toggleParent.querySelector('.switch-button');
                var thisSwitch = toggleParent.querySelector('.switch-button-checkbox');

                thisInput.disabled = false;
                thisInputLabel.classList.remove('disabled');

                if (isSwitch) {
                    thisSwitch.disabled = false;
                    isSwitch.classList.remove('disabled');
                }
            }else {
                e.target.classList.remove('checked')
                var toggleParent = getClosestParent(e.target, '.toggle-parent');
                var thisInput = toggleParent.querySelector('.action-input');
                var thisInputLabel = toggleParent.querySelector('.selected-asset-label');
                var isSwitch = toggleParent.querySelector('.switch-button');
                var thisSwitch = toggleParent.querySelector('.switch-button-checkbox');

                thisInput.disabled = true;
                thisInputLabel.classList.add('disabled');

                if (isSwitch) {
                    thisSwitch.disabled = true;
                    isSwitch.classList.add('disabled');
                }
            }
        });        
    }

    //SWITCH
    var theSwitch = document.querySelectorAll('.switch-button-checkbox');

    for (var j = 0; j < theSwitch.length; j++) {
        theSwitch[j].addEventListener('click', function(e){
            if (e.target.checked) {
                e.target.parentElement.classList.add('checked');

            }else {
                e.target.parentElement.classList.remove('checked')
            }
        });        
    }
});