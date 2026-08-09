//
function script14138(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): void {
    if ((int0 != 0)) {
        var int0 = (int0 - 1);
        IF_SETONTIMER(callback(script14138, int0, int1, int2, int3, int4, int5, int6, int7), int1);
        return;
    };
    IF_SETONTIMER(callback(script15653, 50, int6), int6);
    IF_SETHIDE(false, int6);
    IF_SETMODELANIM(328 as seq, int6);
    script15654(int2, int3, int4, int5, int7);
    IF_SETONTIMER(callback(), int1);
    return;
}