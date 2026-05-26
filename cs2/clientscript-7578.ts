//
function script7578(): void {
    var int0 = IF_GETTRANS(10682369);
    if ((int0 >= 205)) {
        IF_SETTRANS(225, 10682369);
        IF_SETONTIMER(callback(), 10682370);
    } else {
        IF_SETTRANS(++int0, 10682369);
    };
    return;
}