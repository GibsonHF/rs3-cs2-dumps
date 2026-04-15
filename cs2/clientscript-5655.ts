//
function script5655(int0: component, int1: component, int2: int, int3: int): void {
    var int3 = (int3 + 1);
    IF_SETONTIMER(callback(script5655, int0, int1, int2, int3), int0);
    if ((MODULO(int3, 5) > 0)) {
        return;
    };
    if ((int2 <= 50)) {
        IF_SETSIZE(IF_GETWIDTH(int1), 0, 0, 0, int1);
        if ((IF_GETHEIGHT(int0) > MAX(1, SCALE(int2, 50, 45)))) {
            IF_SETSIZE(IF_GETWIDTH(int0), 0, 0, 0, int0);
        };
        if ((IF_GETHEIGHT(int0) == MAX(1, SCALE(int2, 50, 45)))) {
            IF_SETONTIMER(callback(), int0);
        } else {
            IF_SETSIZE(IF_GETWIDTH(int0), (IF_GETHEIGHT(int0) + 1), 0, 0, int0);
        };
    } else if ((IF_GETHEIGHT(int0) < 45)) {
        IF_SETSIZE(IF_GETWIDTH(int0), (IF_GETHEIGHT(int0) + 1), 0, 0, int0);
    } else {
        var int2 = (int2 - 50);
        if ((IF_GETHEIGHT(int1) > MAX(1, SCALE(int2, 50, 45)))) {
            IF_SETSIZE(IF_GETWIDTH(int1), 0, 0, 0, int1);
        };
        if ((IF_GETHEIGHT(int1) == MAX(1, SCALE(int2, 50, 45)))) {
            IF_SETONTIMER(callback(), int0);
        } else {
            IF_SETSIZE(IF_GETWIDTH(int1), (IF_GETHEIGHT(int1) + 1), 0, 0, int1);
        };
    };
    return;
}