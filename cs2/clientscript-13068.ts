//
function script13068(int0: int): void {
    var int1 = enum_getvalue(0, 73, 12141 as cs2enum, int0);
    var int2 = enum_getvalue(0, 9, 12142 as cs2enum, int0);
    var int3 = enum_getvalue(0, 9, 12143 as cs2enum, int0);
    var int4 = enum_getvalue(0, 9, 12144 as cs2enum, int0);
    var int5 = 12147 as cs2enum;
    var int6 = enum_getvalue(0, 26, int5, struct_getparam(int1, 6303));
    var int7 = enum_getvalue(0, 23, int6, 0);
    var int8 = enum_getvalue(0, 23, int6, 1);
    var int9 = enum_getvalue(0, 23, int6, 2);
    var int10 = enum_getvalue(0, 23, int6, 3);
    var int11 = enum_getvalue(0, 23, int6, 4);
    var int12 = comp(-1, 65535);
    var int13 = comp(-1, 65535);
    var int14 = 0;
    script13072(int1, int2, -1);
    int14 = script13070(int0);
    [int12, int13] = script13071(int0);
    if ((varbitplayer_35021 == int0)) {
        if ((varbitplayer_35020 != 0)) {
            IF_SETTEXT(inttostring(varbitplayer_35020, 10), int4);
        };
        stack(int9);
        stack(int3);
        IF_SETGRAPHIC();
        IF_SETONMOUSEOVER(callback(), int3);
        IF_SETONMOUSELEAVE(callback(), int3);
        IF_SETHIDE(1, int12);
        IF_SETHIDE(1, int13);
    } else {
        IF_SETTEXT("", int4);
        if ((int14 == 0)) {
            if ((varbitplayer_35021 != 0)) {
                stack(int10);
                stack(int3);
                IF_SETGRAPHIC();
                IF_SETONMOUSEOVER(callback(), int3);
                IF_SETONMOUSELEAVE(callback(script44, int3, int10), int3);
            } else {
                stack(int7);
                stack(int3);
                IF_SETGRAPHIC();
                IF_SETONMOUSEOVER(callback(script44, int3, int8), int3);
                IF_SETONMOUSELEAVE(callback(script44, int3, int7), int3);
            };
            IF_SETHIDE(true, int12);
            IF_SETHIDE(true, int13);
        } else {
            stack(int11);
            stack(int3);
            IF_SETGRAPHIC();
            IF_SETHIDE(0, int12);
            IF_SETHIDE(0, int13);
            IF_SETONMOUSEOVER(callback(), int3);
            IF_SETONMOUSELEAVE(callback(script44, int3, int11), int3);
            script13069(int1, int0);
        };
    };
    return;
}