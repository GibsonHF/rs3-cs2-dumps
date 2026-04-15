//
function script13486(): void {
    var int0 = comp(1879, 2);
    var int1 = comp(1879, 8);
    var int2 = comp(1879, 12);
    var int3 = comp(1879, 13);
    var int4 = IF_GETLAYER(int3);
    var int5 = -1 as npc;
    var int6 = -1 as obj;
    var int7 = -1 as struct;
    var int8 = -1 as seq;
    var string0 = "???";
    var int9 = 0;
    var int10 = 0;
    var int11 = 5;
    var int12 = 5;
    var int13 = 0;
    var int14 = IF_GETWIDTH(int0);
    var int15 = IF_GETHEIGHT(int0);
    var int16 = ENUM_GETOUTPUTCOUNT(12737 as cs2enum);
    var int17 = 0;
    CC_DELETEALL(int0);
    while ((int10 < int16)) {
        int5 = enum_getvalue(0, 32, 12737 as cs2enum, (int10 + 1));
        if ((int5 != -1 as npc)) {
            int17 = script13488(int10);
            int7 = enum_getvalue(32, 73, 12740 as cs2enum, int5);
            if ((int17 == 1)) {
                string0 = struct_getparam(int7, 6600);
            } else {
                string0 = "???";
            };
            int6 = struct_getparam(int7, 6601);
            int8 = struct_getparam(int7, 6604);
            if ((int13 == 0)) {
                [int11, int12] = [5, 5];
            } else {
                int11 = ((5 + (MODULO(int13, 5) * 40)) + (MODULO(int13, 5) * 5));
                int12 = ((5 + ((int13 / 5) * 40)) + ((int13 / 5) * 5));
            };
            int13 = (int13 + 1);
            if ((int17 == 1)) {
                script10764(int0, 21361 as struct, int11, int12, 40, 40, -1);
            } else {
                script10764(int0, 21362 as struct, int11, int12, 40, 40, -1);
            };
            if ((int6 != -1 as obj)) {
                CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
                CC_SETPOSITION((int11 + 4), (int12 + 4), 0, 0);
                CC_SETSIZE(32, 32, 0, 0);
                CC_SETOBJECT(int6, -1);
                if ((int17 == 0)) {
                    CC_SETCOLOUR(65536);
                } else {
                    CC_SETCOLOUR(16777215);
                };
            };
            CC_CREATE(int0, 3, IF_GETNEXTSUBID(int0));
            CC_SETSIZE(40, 40, 0, 0);
            CC_SETPOSITION(int11, int12, 0, 0);
            CC_SETOP(1, "Select");
            CC_SETONOP(callback(script13487, int10, (int13 - 1), int7));
            CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
        } else {
            script10764(int0, 21361 as struct, -50, -50, 1, 1, -1);
            CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
            CC_CREATE(int0, 3, IF_GETNEXTSUBID(int0));
        };
        int10 = (int10 + 1);
    };
    IF_SETSCROLLSIZE(16, (int12 + 45), int0);
    script7791(int1, int0);
    IF_SETDRAGGABLE(int4, -1, int2);
    IF_SETONDRAG(callback(script8479, int2, int3, -1), int2);
    IF_SETONDRAGCOMPLETE(callback(script8480, int2, int3, -1), int2);
    return;
}