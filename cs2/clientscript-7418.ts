//
function script7418(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number): void {
    if (((int0 == 1) && (script7420(int1, int2, int3, int4, int5, int6, int7, int8) == 1))) {
        IF_SETONTIMER(callback(), int1);
        IF_SETHIDE(true, int8);
        varclient_4722 = 0;
        return;
    };
    if ((WORLDLIST_FETCH() == 0)) {
        IF_SETHIDE(false, int8);
        var int0 = 0;
    } else {
        int0 = 1;
    };
    IF_SETONTIMER(callback(script7418, int0, int1, int2, int3, int4, int5, int6, int7, int8), int1);
    return;
}