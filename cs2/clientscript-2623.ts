//
function script2623(int0: component, int1: int, int2: int, int3: unknown_int, int4: int, int5: int): void {
    var int6 = int4;
    var int7 = (int1 + 1);
    if ((int7 < 210)) {
        IF_SETONTIMER(callback(script2623, int0, int7, int2, int3, int4, int5), int0);
    };
    if ((IF_FIND(int0) == 1)) {
        if ((int5 > 0)) {
            int6 = MIN(MAX(int4, script12452((int1 - 210), (int2 - 210), int4, int5, int3)), (int4 + int5));
        } else if ((int5 < 0)) {
            int6 = MAX(MIN(int4, script12452((int1 - 210), (int2 - 210), int4, int5, int3)), (int4 + int5));
        };
        IF_SETPOSITION(int6, 0, 2, 1, int0);
        if ((int7 <= int2)) {
            IF_SETONTIMER(callback(script2623, int0, int7, int2, int3, int4, int5), int0);
        } else {
            IF_SETPOSITION(-229, 0, 2, 1, int0);
            script2622(int0, -229, 333, 260, 0);
        };
    };
    return;
}