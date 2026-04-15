//
function script11515(int0: component, int1: component, int2: int, int3: struct, int4: int, int5: int, int6: int, int7: int): int {
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    var int8 = IF_GETWIDTH(int0);
    var int9 = (int8 / int5);
    var int10 = (MODULO(int8, int5) / 2);
    var int11 = ((int10 + int6) + (int5 * MODULO(int2, int9)));
    var int12 = (10 + (int4 * (int2 / int9)));
    CC_SETPOSITION(int11, int12, 0, 0);
    CC_SETSIZE(20, 20, 0, 0);
    var int13 = IF_GETNEXTSUBID(int1);
    var int14 = struct_getparam(int3, 5101);
    if ((int14 == 0)) {
        int14 = CC_GETID();
    };
    var int15 = 0;
    var int16 = 21363;
    var string0 = "";
    if (((int3 != -1 as struct) && (struct_getparam(int3, 3840) == 0))) {
        CC_SETOP(1, "Select");
        if ((int14 == varclient_4888)) {
            int15 = 1;
            int16 = 28303;
        } else {
            CC_SETONMOUSEREPEAT(callback(script11516, int1, int13, int14, 29006));
            CC_SETONMOUSELEAVE(callback(script11516, int1, int13, int14, 21363));
        };
        CC_SETONVARCTRANSMIT(callback(script11518, int0, CC_GETID(), int1, int13, int14, int15, 0, 4888, 1));
        var int2 = (int2 + 1);
        script10764(int1, int16, (int11 - 4), (int12 - 4), 28, 28, -1);
        int13 = IF_GETNEXTSUBID(int1);
        if ((struct_getparam(int3, 9046) == 1)) {
            CC_CREATE(int1, 5, int13);
            CC_SETGRAPHIC(struct_getparam(int3, 9045));
            CC_SETPOSITION(int11, int12, 0, 0);
            CC_SETSIZE(20, 20, 0, 0);
        } else {
            CC_CREATE(int1, 3, int13);
            CC_SETPOSITION(int11, int12, 0, 0);
            CC_SETSIZE(20, 20, 0, 0);
            CC_SETCOLOUR(struct_getparam(int3, 2502));
            CC_SETFILL(1);
        };
        string0 = struct_getparam(int3, 2548);
        if ((STRING_LENGTH(string0) > 0)) {
            script14990(0, string0);
        };
        int13 = (int13 + 1);
        if ((int7 >= 0)) {
            CC_CREATE(int1, 4, int13);
            CC_SETTEXT(inttostring(int7, 10));
            script2731(int1, int13, 16777215);
            CC_SETPOSITION((int11 - 5), (int12 + 25), 0, 0);
            CC_SETSIZE(30, 15, 0, 0);
            CC_SETTEXTFONT(27 as fontmetrics);
            CC_SETTEXTALIGN(1, 1, 12);
            int13 = (int13 + 1);
        };
    } else {
        CC_SETHIDE(true);
    };
    return int2;
}