//
function script993(int0: struct, int1: struct, int2: int): void {
    if ((int1 == -1 as struct)) {
        return;
    };
    var int3 = comp(204, 85);
    var int4 = -1;
    var int5 = 0;
    var int6 = 0;
    var int7 = struct_getparam(int0, 7427);
    var int8 = struct_getparam(int1, 7437);
    var int9 = struct_getparam(int1, 7438);
    var int10 = -1 as cs2enum;
    var int11 = -1 as struct;
    var int12 = struct_getparam(int1, 8364);
    var int13 = 0;
    var int14 = 0;
    var int15 = script16029(int2);
    if ((script16030(int2) == 0)) {
        if ((int9 != -1 as cs2enum)) {
            if ((int12 == 1)) {
                int11 = enum_getvalue(0, 73, int9, script16032(int2));
                int14 = 1;
            } else {
                int10 = enum_getvalue(0, 26, int9, script16032(int2));
                int14 = ENUM_GETOUTPUTCOUNT(int10);
            };
        } else {
            int14 = 1;
        };
    };
    CC_DELETEALL(int3);
    while ((++int4 < 24)) {
        if ((int4 < int14)) {
            if ((int10 == -1 as cs2enum)) {
                if (((int12 == 1) && (int11 != -1 as struct))) {
                    int13 = struct_getparam(int11, 7439);
                    int8 = struct_getparam(int11, 7437);
                } else if ((int12 == 0)) {
                    int13 = struct_getparam(int1, 7439);
                };
            } else {
                [int8, int13] = [enum_getvalue(0, 33, int10, int4), 1];
            };
        } else if (((int4 < (int14 + int15)) && ((int4 - int14) < int15))) {
            [int8, int13] = [int7, 1];
        } else {
            int8 = -1 as obj;
        };
        if (((int5 + 40) > IF_GETWIDTH(int3))) {
            [int5, int6] = [0, ((int6 + 36) + 2)];
        };
        CC_CREATE(int3, 5, IF_GETNEXTSUBID(int3));
        CC_SETSIZE(40, 36, 0, 0);
        CC_SETPOSITION(int5, int6, 0, 0);
        CC_SETGRAPHIC(18266 as graphic);
        if ((int8 != -1 as obj)) {
            CC_CREATE(int3, 5, IF_GETNEXTSUBID(int3));
            CC_SETSIZE(36, 32, 0, 0);
            CC_SETPOSITION(((int5 + ((40 - 36) / 2)) + 1), (int6 + ((36 - 32) / 2)), 0, 0);
            if ((int13 > 0)) {
                CC_SETOBJECT(int8, int13);
            } else {
                CC_SETOBJECT_NONUM(int8, 1);
            };
            CC_SETONMOUSEREPEAT(callback(script9564, int8, -2147483645, CC_GETID()));
        };
        int5 = (int5 + (40 + 2));
    };
    return;
}