//
function script8008(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number): void {
    if ((int4 == 0)) {
        IF_SETHIDE(false, int0);
    };
    if ((int4 < int3)) {
        IF_SETPOSITION((int5 + (int7 * int4)), (int6 + (int8 * int4)), 0, 0, int0);
        IF_SETONTIMER(callback(script8008, int0, int1, int2, int3, (int4 + 1), int5, int6, int7, int8, int9, int10), int2);
    } else {
        IF_SETPOSITION(((int5 + (int7 * (int4 - 1))) + int9), ((int6 + (int8 * (int4 - 1))) + int10), 0, 0, int0);
        if ((int1 != comp(-1, 65535))) {
            IF_SETHIDE(false, int1);
        };
        IF_SETONTIMER(callback(script8008, int0, int1, int2, int3, 0, int5, int6, int7, int8, int9, int10), int2);
        IF_SETHIDE(true, int0);
        IF_SETHIDE(true, int2);
    };
    return;
}