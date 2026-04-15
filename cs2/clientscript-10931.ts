//
function script10931(int0: int, int1: unknown_int, int2: int, int3: int, int4: unknown_int, string0: string, string1: string, string2: unknown_string, string3: string): void {
    var int5 = comp(-1, 65535);
    var int6 = comp(-1, 65535);
    var string4 = "";
    var string5 = "";
    var int7 = 0;
    var string6 = "Sticky post";
    var int8 = 0;
    IF_SETHIDE(true, comp(907, 186));
    IF_SETHIDE(false, comp(907, 147));
    var int9 = 167 as fontmetrics;
    var int10 = 206 as fontmetrics;
    var int11 = 15;
    var int12 = 12;
    var int13 = 92;
    if ((script13749() == true)) {
        int9 = 170 as fontmetrics;
        int10 = 208 as fontmetrics;
        int12 = 14;
        int13 = 102;
    };
    if (((int2 != -1) || (int3 != -1))) {
        int6 = enum_getvalue(0, 9, 9622 as cs2enum, int0);
        IF_SETSIZE(0, int13, 1, 0, IF_GETPARENTLAYER(int6));
        CC_DELETEALL(int6);
        if ((int2 != -1)) {
            string4 = enum_getvalue(0, 36, 9621 as cs2enum, int2);
        } else if ((int3 != -1)) {
            string4 = enum_getvalue(0, 36, 9621 as cs2enum, int3);
        };
        int5 = enum_getvalue(0, 9, 9623 as cs2enum, int0);
        script10934(int5, int0);
        if ((int4 == 1)) {
            int8 = 26;
        } else {
            int8 = 10;
        };
        script6200(int6, int8, 30, 4, 4, int9, string0, 1);
        CC_SETTEXTALIGN(0, 0, int11);
        CC_SETMAXLINES(2);
        script2681(int6, 10, 40, 4, 36, int10, string1, 1);
        CC_SETTEXTALIGN(0, 0, int12);
        CC_SETMAXLINES(3);
        script6203(int6, 150, 16, 4, 5, int10, string4, 5);
        CC_SETTEXTALIGN(0, 2, int12);
        CC_SETPOSITION(4, 4, 0, 2);
        CC_SETPARAM_INT(4789, int2);
        CC_SETPARAM_INT(4790, int3);
        script6203(int6, 150, 16, 4, 4, int10, string3, 5);
        CC_SETTEXTALIGN(2, 2, int12);
        CC_SETPOSITION(4, 4, 2, 2);
        IF_SETONOP(callback(script10932, string2), int5);
        if ((int4 == 1)) {
            CC_CREATE(int6, 5, IF_GETNEXTSUBID(int6));
            CC_SETGRAPHIC(25021 as graphic);
            CC_SETSIZE(16, 16, 0, 0);
            CC_SETPOSITION(4, 4, 2, 0);
        };
    };
    return;
}