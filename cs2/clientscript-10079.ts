//
function script10079(int0: unknown_int, int1: unknown_int, int2: component, int3: component, int4: component, int5: component, int6: int, string0: string): void {
    if ((int6 == -1)) {
        var int6 = IF_GETWIDTH(int2);
    };
    IF_SETSIZE(int6, IF_GETHEIGHT(int2), 0, 0, int2);
    IF_SETTEXT(string0, int5);
    script10078(int3, int1);
    if ((int4 != comp(-1, 65535))) {
        if ((int0 == 0)) {
            IF_SETONCLICK(callback(script3388, int1, int0), int4);
            IF_SETOP(1, "null", int4);
            IF_SETONOP(callback(), int4);
        } else {
            IF_SETONCLICK(callback(), int4);
            IF_SETOP(1, string0, int4);
            IF_SETONOP(callback(script3388, int1, int0), int4);
        };
    };
    return;
}