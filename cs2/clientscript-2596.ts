//[proc,graphics_options_rebuild]
function script2596(int0: int, int1: int, int2: int, int3: unknown_int): void {
    if ((script13749() == true)) {
        return;
    };
    script3451(int0, int1, int2, int3);
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = -1;
    var int12 = comp(1513, 123);
    var int13 = comp(1513, 124);
    var int14 = comp(1513, 42);
    var int15 = 99156018;
    var int16 = 99156019;
    var int17 = 99156014;
    var int18 = 99156012;
    var int19 = ENUM_GETOUTPUTCOUNT(10849 as cs2enum);
    var int20 = ((5 + int2) + 24);
    var int21 = 0;
    var int22 = 0;
    var int23 = -1 as struct;
    var int24 = -1 as cs2enum;
    var int25 = 0;
    var int26 = 0;
    var int27 = -1 as struct;
    var int28 = false;
    var int29 = 0;
    CC_DELETEALL(int12);
    CC_DELETEALL(int14);
    script10084("Brightness", int4, int7, int12, 28);
    CC_SETSIZE(CC_GETWIDTH(), 28, 0, 0);
    CC_SETONMOUSEREPEAT(callback(script3876, struct_getparam(41493 as struct, 7528), -2147483645, -2147483643));
    IF_SETPOSITION((CC_GETX() - 4), CC_GETY(), 0, 0, int18);
    IF_SETSIZE((CC_GETWIDTH() + 4), CC_GETHEIGHT(), 0, 0, int18);
    IF_SETSIZE(126, 19, 0, 0, int17);
    IF_SETPOSITION(((CC_GETX() + (CC_GETWIDTH() - IF_GETWIDTH(int17))) + 5), (CC_GETY() + 3), 0, 0, int17);
    script7794(int18, 21361);
    int7 = (int7 + (28 + 3));
    int9 = int7;
    script1185(int15, int16);
    IF_SETDRAGGABLE(int15, -1, int16);
    while ((int22 < int19)) {
        int23 = enum_getvalue(0, 73, 10849 as cs2enum, int22);
        if ((struct_getparam(int23, 7529) != 2)) {
            int24 = struct_getparam(int23, 683);
            int21 = script2581(int23);
            if ((int21 <= -1)) {
                if ((CC_FIND(int12, int11) == 1)) {
                    CC_SETCOLOUR(script10495(3));
                };
                int28 = true;
                if ((struct_getparam(int23, 4201) == true)) {
                    int29 = 1;
                } else {
                    int29 = 0;
                };
                int27 = 2839 as struct;
            } else {
                int28 = false;
                int29 = 0;
                int27 = 2830 as struct;
            };
            if ((int29 == 0)) {
                if ((int4 == 0)) {
                    int4 = 1;
                    int7 = int10;
                } else {
                    int4 = 0;
                    int7 = int9;
                };
                int11 = script10084(struct_getparam(int23, 1344), int4, int7, int12, 28);
                if ((((int3 == 1) || (int3 == 0)) && (CC_FIND(int12, int11) == 1))) {
                    if ((STRING_LENGTH(struct_getparam(int23, 5727)) == 0)) {
                        CC_SETONMOUSEREPEAT(callback(script3876, struct_getparam(int23, 7528), -2147483645, -2147483643));
                    } else {
                        CC_SETONMOUSEREPEAT(callback(script3876, struct_getparam(int23, 5727), -2147483645, -2147483643));
                    };
                };
                int5 = (CC_GETX() - 4);
                int6 = (CC_GETWIDTH() + 4);
                int8 = CC_GETHEIGHT();
                switch (int24) {
                    case 1577:
                    case 421:
                    case 6121: {
                        CC_SETPOSITION(CC_GETX(), CC_GETY(), 0, 0);
                        CC_SETSIZE(((CC_GETWIDTH() - 24) - 4), CC_GETHEIGHT(), 0, 0);
                        break;
                    }
                    default: {
                        CC_SETPOSITION(CC_GETX(), CC_GETY(), 0, 0);
                        CC_SETSIZE(((CC_GETWIDTH() - int20) - 4), CC_GETHEIGHT(), 0, 0);
                        break;
                    }
                };
                script10410(int14, comp(-1, 65535), int27, int5, int7, int6, int8, -1, false, "");
                switch (int24) {
                    case 1577:
                    case 421:
                    case 6121: {
                        [int25, int26] = script10418(int12, int13, (((int5 + int6) - 3) - 18), (int7 + 4), int26, int21, int28);
                        break;
                    }
                    default: {
                        [int25, int26] = script13740(int12, int13, (((int5 + int6) - int20) - 2), (int7 + 2), int20, int26, int24, -1, "", int21, 0, int28);
                        break;
                    }
                };
                int7 = (int7 + (28 + 3));
                if ((int4 == 1)) {
                    int10 = int7;
                } else {
                    int9 = int7;
                };
            };
        };
        int22 = (int22 + 1);
    };
    var int30 = ((IF_GETY(comp(1513, 37)) + IF_GETY(comp(1513, 40))) + MAX(int9, int10));
    switch (int3) {
        case 0:
        case 4: {
            int30 = ((IF_GETY(comp(882, 10)) + int30) + 10);
            IF_SETSIZE(IF_GETWIDTH(comp(882, 3)), int30, 0, 0, comp(882, 3));
            IF_SETPOSITION(0, 0, 1, 1, comp(882, 3));
            break;
        }
    };
    return;
}