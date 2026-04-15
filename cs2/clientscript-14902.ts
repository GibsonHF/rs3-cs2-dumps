//
function script14902(): void {
    var int0 = comp(-1, 65535);
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = ENUM_GETOUTPUTCOUNT(14095 as cs2enum);
    var int5 = -1 as cs2enum;
    var int6 = 0;
    var int7 = -1 as dbrow;
    var int8 = 1;
    var int9 = 2;
    var int10 = int8;
    var int11 = int9;
    var int12 = 0;
    var int13 = -1;
    var int14 = -1;
    while ((++int13 < int4)) {
        int5 = enum_getvalue(0, 26, 14095 as cs2enum, int13);
        int6 = ENUM_GETOUTPUTCOUNT(int5);
        switch (int5) {
            case 14496: {
                int1 = comp(693, 128);
                int2 = comp(693, 134);
                int3 = comp(693, 168);
                break;
            }
            case 14497: {
                int1 = comp(693, 139);
                int2 = comp(693, 145);
                int3 = comp(693, 169);
                break;
            }
            case 14498: {
                int1 = comp(693, 150);
                int2 = comp(693, 156);
                int3 = comp(693, 170);
                break;
            }
            case 14499: {
                int1 = comp(693, 161);
                int2 = comp(693, 167);
                int3 = comp(693, 171);
                break;
            }
            case 14500: {
                int1 = comp(693, 176);
                int2 = comp(693, 182);
                int3 = comp(693, 183);
                break;
            }
        };
        CC_DELETEALL(int2);
        CC_DELETEALL(int3);
        int0 = IF_GETPARENTLAYER(IF_GETPARENTLAYER(int2));
        int10 = int8;
        int11 = int9;
        int14 = -1;
        while ((++int14 < int6)) {
            int7 = enum_getvalue(0, 74, int5, int14);
            if (((((int10 - int8) + 60) + 8) > IF_GETWIDTH(int2))) {
                [int10, int11] = [int8, ((int11 + 90) + 2)];
            };
            if (((int5 == varplayer_9288) && (int14 == varplayer_9289))) {
                int12 = 1;
            } else {
                int12 = 0;
            };
            script14903(int2, int3, int5, int7, int10, int11, int14, int12);
            int10 = (int10 + ((60 + 8) + 2));
        };
        int11 = (int11 + (90 + int9));
        if ((IF_FIND(int0) == 1)) {
            if (((cc_getparam(4052) == -1) && (cc_getparam(4053) == -1))) {
                script9582(int0, int11, int11);
            };
            if ((int5 == varplayer_9288)) {
                script341(int1, 0);
            };
        };
    };
    script9581(comp(693, 86));
    return;
}