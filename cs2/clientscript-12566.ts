//
function script12566(int0: int, int1: int, int2: int, int3: component): void {
    var int4 = IF_GETX(int3);
    var int5 = 0;
    if ((int4 < int0)) {
        int5 = script12377((int4 + 1), 0, (int1 - int2));
    } else if ((int4 > int0)) {
        int5 = script12377((int4 - 1), 0, (int1 - int2));
    } else {
        IF_SETONTIMER(callback(), int3);
        return;
    };
    IF_SETPOSITION(int5, 0, 0, 0, int3);
    return;
}