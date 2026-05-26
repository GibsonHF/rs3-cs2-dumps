//
function script13788(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): void {
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