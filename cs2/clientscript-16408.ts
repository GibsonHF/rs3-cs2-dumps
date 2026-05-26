//
function script16408(): void {
    var int0 = IF_GETTRANS(comp(955, 19));
    if ((int0 == 0)) {
        IF_SETONTIMER(callback(), comp(955, 6));
    } else {
        script16416(MAX((int0 - 10), 0));
    };
    return;
}