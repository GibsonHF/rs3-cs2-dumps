//
function script14138(int0: int, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: unknown_int, int5: unknown_int, int6: component, int7: unknown_int): void {
    if ((int0 != 0)) {
        var int0 = (int0 - 1);
        IF_SETONTIMER(callback(script14138, int0, int1, int2, int3, int4, int5, int6, int7), int1);
        return;
    };
    IF_SETONTIMER(callback(script15653, 50, int6), int6);
    IF_SETHIDE(0, int6);
    IF_SETMODELANIM(328, int6);
    script15654(int2, int3, int4, int5, int7);
    IF_SETONTIMER(callback(), int1);
    return;
}