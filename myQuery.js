
    //myQuery v.0.0.5 (c) the_nepodarok

Object.prototype.$ = function (query) {
    return this.querySelector(query.toString());
}

Object.prototype.$$ = function (query) {
    return this.querySelectorAll(query.toString());
}
