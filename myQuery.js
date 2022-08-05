
    //myQuery v.0.0.1 (c) the_nepodarok

Object.prototype.$ = function (query) {
    if (this.querySelectorAll(query).length <= 1) {
        return this.querySelectorAll(query)[0];
    } else return this.querySelectorAll(query);
}
