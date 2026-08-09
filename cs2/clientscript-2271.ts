//
function script2271(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number, int12: number, int13: number, string0: string, string1: string): void {
    IF_SETOPBASE(`<col=00ff00>${string0}`, int0);
    script2273(int0, int2, int3, int4, int5, int6, int7, int8, int9, int10, int11, int12, int13);
    IF_SETONMOUSEREPEAT(callback(script2274, int0, int1, int4, string0, string1, int6, int7, int8, int9, int10, int11, int12, int13), int0);
    IF_SETONMOUSELEAVE(callback(script11, int1), int0);
    if ((IF_GETTARGETMASK(int0) != 0)) {
        stack(callback(script17, int0));
        stack(int0);
        IF_SETONTARGETENTER();
        IF_SETONTARGETLEAVE(callback(script18, int0), int0);
    };
    IF_SETONINVTRANSMIT(callback(script2272, int0, int2, int3, int4, int5, int6, int7, int8, int9, int10, int11, int12, int13, 93, 1), int0);
    IF_SETONSTATTRANSMIT(callback(script2272, int0, int2, int3, int4, int5, int6, int7, int8, int9, int10, int11, int12, int13, 6, 1), int0);
    return;
}