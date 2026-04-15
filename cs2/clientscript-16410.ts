//
function script16410(): void {
    var int0 = IF_GETTRANS(comp(955, 19));
    if ((int0 == 255)) {
        IF_SETONTIMER(callback(), comp(955, 6));
    } else {
        script16416(MIN((int0 + 10), 255));
    };
    return;
}