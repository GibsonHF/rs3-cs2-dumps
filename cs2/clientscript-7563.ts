//
function script7563(int0: component): void {
    var int1 = IF_GETTRANS(int0);
    if ((int1 > 5)) {
        IF_SETTRANS(--int1, int0);
    } else {
        int1 = 0;
        IF_SETTRANS(int1, int0);
        IF_SETONTIMER(callback(script7564, int0), int0);
    };
    return;
}