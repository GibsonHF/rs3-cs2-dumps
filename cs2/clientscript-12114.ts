//
function script12114(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    IF_SETMODELANIM(int0, int1);
    IF_SETMODEL(int2, int4);
    IF_SETMODELANIM(int3, int4);
    var int5 = SEQLENGTH(int0);
    var int6 = SEQLENGTH(int3);
    IF_SETONTIMER(callback(script13788, 0, int0, int1, int2, int3, int4, int5, (int5 - int6)), int1);
    return;
}