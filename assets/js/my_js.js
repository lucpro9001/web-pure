'use strict';
var $ = function(component) {
    var first = component.charAt(0);
    var name = component.substring(1);
    return first == '#' ?
        document.getElementById(name) :
        first == '.' ?
        document.getElementsByClassName(name) :
        document.getElementsByTagName(component);
}