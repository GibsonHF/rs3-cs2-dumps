//
function script15650(int0: int, int1: int, int2: component): void {
    var int3 = IF_GETTRANS(int2);
    if ((int3 < int1)) {
        int3 = script12452(int0, 10, 0, int1, 2);
        var int0 = (int0 + 1);
        IF_SETTRANS(MIN(int3, int1), int2);
        IF_SETONTIMER(callback(script15650, int0, int1, int2), int2);
    } else {
        IF_SETONTIMER(callback(), int2);
    };
    return;
}