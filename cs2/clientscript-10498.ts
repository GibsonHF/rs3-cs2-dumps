//
function script10498(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): number {
    if (((int0 == -1) || (int3 == -1))) {
        return int5;
    };
    var int7 = struct_getparam(int3, 3039);
    if ((int7 == -1 as cs2enum)) {
        return int5;
    };
    var int8 = 0;
    var int9 = ENUM_GETOUTPUTCOUNT(int7);
    var int10 = int4;
    var int11 = int5;
    var int12 = -1 as obj;
    while ((int8 < int9)) {
        int12 = enum_getvalue(0, 33, int7, int8);
        if ((int12 != -1 as obj)) {
            if (((int10 + 36) >= IF_GETWIDTH(int0))) {
                [int10, int11] = [int4, ((int11 + 36) + 4)];
            };
            script10764(int0, 21363, int10, int11, 36, (36 + 2), -1);
            CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
            CC_SETSIZE(36, 32, 0, 0);
            CC_SETPOSITION(((int10 + ((36 - 36) / 2)) + 1), (int11 + ((36 - 32) / 2)), 0, 0);
            CC_SETOBJECT_NONUM(int12, 1);
            CC_SETONMOUSEREPEAT(callback(script9564, int12, -2147483645, CC_GETID()));
            int10 = ((int10 + 36) + 4);
        };
        int8 = (int8 + 1);
    };
    var int13 = -1;
    var string0 = "";
    if (((int3 == 28647) || (int3 == 28653))) {
        int8 = 0;
        while ((int8 < 3)) {
            switch (int8) {
                case 0: {
                    int13 = 24188;
                    break;
                }
                case 1: {
                    int13 = 25028;
                    break;
                }
                case 2: {
                    int13 = 24189;
                    break;
                }
            };
            if (((int10 + 36) >= IF_GETWIDTH(int0))) {
                [int10, int11] = [int4, ((int11 + 36) + 4)];
            };
            script10764(int0, 21363, int10, int11, 36, (36 + 2), -1);
            CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
            CC_SETSIZE(30, 30, 0, 0);
            CC_SETPOSITION(((int10 + ((36 - 30) / 2)) + 1), (int11 + ((36 - 30) / 2)), 0, 0);
            CC_SETGRAPHIC(struct_getparam(int13, 2802));
            string0 = struct_getparam(int13, 2794);
            CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, CC_GETID()));
            int10 = ((int10 + 36) + 4);
            int8 = (int8 + 1);
        };
    };
    if (((int1 != -1) && (int2 != -1))) {
        CC_DELETEALL(int1);
        IF_SETSCROLLPOS(0, 0, int0);
        if (((int11 + 36) > IF_GETHEIGHT(int2))) {
            IF_SETSCROLLSIZE(0, ((int11 + 36) + 4), int0);
            script31(int1, int0, 4343, 4340, 4341, 4342, 4337, 4336);
        } else {
            IF_SETSCROLLSIZE(0, 0, int0);
        };
    };
    return (int11 + 36);
}