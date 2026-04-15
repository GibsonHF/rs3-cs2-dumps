//
function script3627(int0: component, int1: int, int2: int, int3: int, int4: int, int5: obj, int6: unknown_int, int7: int, int8: int): void {
    if ((++int7 == int8)) {
        IF_SETOBJECT(int5, -1, int0);
        IF_SETPOSITION(int1, int2, 0, 0, int0);
        IF_SETONTIMER(callback(), int0);
        return;
    };
    IF_SETPOSITION((int1 + ((int3 * int7) / int8)), (int2 + ((int4 * int7) / int8)), 0, 0, int0);
    IF_SETONTIMER(callback(script3627, int0, int1, int2, int3, int4, int5, int6, int7, int8), int0);
    return;
}