//
function script7418(int0: unknown_int, int1: component, int2: component, int3: component, int4: component, int5: component, int6: component, int7: component, int8: component): void {
    if (((int0 == 1) && (script7420(int1, int2, int3, int4, int5, int6, int7, int8) == 1))) {
        IF_SETONTIMER(callback(), int1);
        IF_SETHIDE(1, int8);
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