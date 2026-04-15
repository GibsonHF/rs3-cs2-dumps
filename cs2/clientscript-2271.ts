//
function script2271(int0: component, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: int, int5: unknown_int, int6: unknown_int, int7: unknown_int, int8: unknown_int, int9: unknown_int, int10: unknown_int, int11: unknown_int, int12: unknown_int, int13: unknown_int, string0: string, string1: unknown_string): void {
    IF_SETOPBASE(`<col=00ff00>${string0}`, int0);
    script2273(int0, int2, int3, int4, int5, int6, int7, int8, int9, int10, int11, int12, int13);
    IF_SETONMOUSEREPEAT(callback(script2274, int0, int1, int4, string0, string1, int6, int7, int8, int9, int10, int11, int12, int13), int0);
    IF_SETONMOUSELEAVE(callback(script11, int1), int0);
    if ((IF_GETTARGETMASK(int0) != 0)) {
        stack(17);
        stack(int0);
        stack("i");
        stack(int0);
        IF_SETONTARGETENTER();
        IF_SETONTARGETLEAVE(callback(script18, int0), int0);
    };
    IF_SETONINVTRANSMIT(callback(script2272, int0, int2, int3, int4, int5, int6, int7, int8, int9, int10, int11, int12, int13, 93, 1), int0);
    IF_SETONSTATTRANSMIT(callback(script2272, int0, int2, int3, int4, int5, int6, int7, int8, int9, int10, int11, int12, int13, 6, 1), int0);
    return;
}