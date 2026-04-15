//
function script7578(): void {
    var int0 = IF_GETTRANS(comp(163, 1));
    if ((int0 >= 205)) {
        IF_SETTRANS(225, comp(163, 1));
        IF_SETONTIMER(callback(), comp(163, 2));
    } else {
        IF_SETTRANS(++int0, comp(163, 1));
    };
    return;
}