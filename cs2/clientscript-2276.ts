//
function script2276(int0: int, int1: int, int2: component): void {
    var string0 = enum_getvalue(0, 36, 2857 as cs2enum, int1);
    var int3 = enum_getvalue(0, 0, 2858 as cs2enum, int1);
    var string1 = enum_getvalue(0, 36, 2859 as cs2enum, int1);
    if ((int0 == 1)) {
        IF_SETTEXT(string0, int2);
        if ((int3 == 2)) {
            IF_SETCOLOUR(40960, int2);
        } else if ((int3 == 1)) {
            IF_SETCOLOUR(9474048, int2);
        } else if ((int3 == 0)) {
            IF_SETCOLOUR(10485760, int2);
        };
        IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), int2);
    } else {
        IF_SETTEXT("", int2);
    };
    return;
}