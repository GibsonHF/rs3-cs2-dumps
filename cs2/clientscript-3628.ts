//
function script3628(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number): void {
    var int7 = (int7 + 1);
    if ((int7 == 1)) {
        IF_SETOBJECT(int5, -1, int0);
        IF_SETPOSITION((int1 + int3), (int2 + int4), 0, 0, int0);
    } else {
        IF_SETPOSITION((int1 + ((int3 * (int8 - int7)) / int8)), (int2 + ((int4 * (int8 - int7)) / int8)), 0, 0, int0);
    };
    if ((int7 == int8)) {
        IF_SETONTIMER(callback(), int0);
    } else {
        IF_SETONTIMER(callback(script3628, int0, int1, int2, int3, int4, int5, int6, int7, int8), int0);
    };
    return;
}