
    //myQuery v.0.0.2 (c) the_nepodarok

Object.prototype.$ = function (query) {
    if (this.querySelectorAll(query).length > 1) {
        return this.querySelectorAll(query);
    }
    return this.querySelector(query);
}

/* !!!  !!! !!! !!! !!! !!!
   Does not work with selectors by attribute
   (i.e. square brackets) */
