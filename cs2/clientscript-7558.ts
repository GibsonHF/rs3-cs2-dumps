//
function script7558(int0: int, int1: component, int2: component): void {
    var int3 = IF_GETHEIGHT(int1);
    if ((int3 < int0)) {
        IF_SETSIZE(IF_GETWIDTH(int1), (int3 + 1), 0, 0, int1);
    } else {
        IF_SETONTIMER(callback(), int2);
    };
    return;
}