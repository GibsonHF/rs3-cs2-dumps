//
function script17139(int0: int, int1: seq, int2: component, int3: model, int4: seq, int5: component, int6: unknown_int, int7: int): void {
    if ((int0 < int7)) {
        var int0 = (int0 + 1);
        IF_SETONTIMER(callback(script17139, int0, int1, int2, int3, int4, int5, int6, int7), int2);
        return;
    };
    IF_SETMODEL(int3, int5);
    IF_SETMODELANIM(int4, int5);
    IF_SETMODELANIM(int1, int2);
    IF_SETONTIMER(callback(script13788, 0, int1, int2, int3, int4, int5, int6, int7), int2);
    return;
}