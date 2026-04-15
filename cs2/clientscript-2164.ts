//
function script2164(int0: component, int1: int): void {
    var int2 = enum_getvalue(0, 73, 169 as cs2enum, int1);
    var int3 = struct_getparam(int2, 61);
    var int4 = script12681(int0);
    var int5 = 0;
    while ((int5 < (varclient_273 + 80))) {
        if ((CC_FIND(int4, int5) == 1)) {
            CC_SETPOSITION(0, 0, 0, 0);
            CC_SETHIDE(true);
        };
        int5 = (int5 + 1);
    };
    return;
}