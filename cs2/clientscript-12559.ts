//
function script12559(int0: number): void {
    var int1 = IF_GETWIDTH(115867654);
    if ((int1 < int0)) {
        IF_SETSIZE((int1 + 1), 13, 0, 0, 115867654);
    } else if ((int1 > int0)) {
        IF_SETSIZE((int1 - 1), 13, 0, 0, 115867654);
    };
    if ((int1 == int0)) {
        IF_SETONTIMER(callback(), 115867654);
        return;
    };
    IF_SETONTIMER(callback(script12559, int0), 115867654);
    return;
}