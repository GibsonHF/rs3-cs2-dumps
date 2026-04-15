//
function script14778(int0: component, int1: unknown_int, int2: dbrow, int3: int, int4: int, int5: int, int6: int): int {
    var int7 = script9984(11969 as struct, 1);
    var int8 = struct_getparam(int7, 3808);
    var int9 = int3;
    var int10 = int4;
    script11624(int0, comp(-1, 65535), 11969 as struct, int9, (int10 + 3), 0, 1);
    script11624(int0, comp(-1, 65535), 11971 as struct, (int8 + int9), (int10 + 3), 0, 1);
    CC_CREATE(int0, 6, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(((int9 + 3) + 55), ((int10 + 3) + 57), 0, 0);
    CC_SETSIZE(32, 32, 0, 0);
    CC_SETMODELANGLE(0, 0, 40, 1882, 0, 2150);
    CC_SETNPCHEAD(dbrow_getfield(int2, 335904, 0));
    CC_SETMODELANIM(dbrow_getfield(int2, 335920, 0));
    int9 = (int9 + ((2 * 3) + (2 * int8)));
    int10 = (int10 + 14);
    script152(int0, (int5 - int9), 30, int9, int10, 26 as fontmetrics, dbrow_getfield(int2, 335888, 0), 16777215);
    CC_SETTEXTALIGN(0, 1, 0);
    script152(int0, (int5 - int9), 30, int9, int10, 26 as fontmetrics, `Location: ${script14571(int2)}`, 16777215);
    CC_SETTEXTALIGN(2, 1, 0);
    int10 = (int10 + (30 + 5));
    var int6 = MAX(int6, (struct_getparam(int7, 3807) + (2 * 3)));
    script6203(int0, (int5 - int9), (((int6 - 30) - 40) - (2 * 5)), int9, int10, 26 as fontmetrics, script14570(int2), 3);
    int10 = (int6 - 40);
    script152(int0, (int5 - int9), 40, int9, int10, 26 as fontmetrics, "Interests:", 16777215);
    CC_SETTEXTALIGN(0, 0, 0);
    var int11 = -1;
    var int12 = DB_GETFIELDCOUNT(int2, 335968);
    var int13 = -1;
    while ((++int11 < int12)) {
        int13 = dbrow_getfield(int2, 335968, int11);
        script7924(int0, IF_GETNEXTSUBID(int0), 20, 20, (int9 + (int11 * 22)), (int10 + (3 * 5)), script14573(int13), false, false, false, 0);
        CC_SETONMOUSEREPEAT(callback(script3876, script14572(int13), -2147483645, -2147483643));
    };
    return int6;
}