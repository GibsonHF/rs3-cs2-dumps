//
function script13788(int0: int, int1: unknown_int, int2: component, int3: unknown_int, int4: unknown_int, int5: component, int6: int, int7: unknown_int): void {
    if ((int0 < int6)) {
        var int0 = (int0 + 1);
        IF_SETONTIMER(callback(script13788, int0, int1, int2, int3, int4, int5, int6, int7), int2);
        return;
    };
    IF_SETMODEL(-1 as model, int5);
    IF_SETMODELANIM(-1 as seq, int5);
    IF_SETMODELANIM(17970 as seq, int2);
    IF_SETONTIMER(callback(script17139, 0, int1, int2, int3, int4, int5, int6, int7), int2);
    return;
}