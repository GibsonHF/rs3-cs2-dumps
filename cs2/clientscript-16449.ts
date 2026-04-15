//
function script16449(): void {
    var int0 = comp(1486, 14);
    var int1 = cc_getparam(4261);
    stack(696320);
    stack(int1);
    DB_FIND(0);
    dbrow_findnext();
    var int2 = stack();
    if ((int2 == -1)) {
        return;
    };
    var int3 = 200;
    var int4 = -1;
    var int5 = 0;
    var int6 = 0;
    var int7 = -1;
    var int8 = 0;
    var int9 = dbrow_getfield(int2, 696352, 0);
    var int10 = ENUM_GETOUTPUTCOUNT(int9);
    if ((int10 <= 0)) {
        return;
    };
    var int11 = enum_getvalue(0, 73, int9, MAX((int10 - 1), 0));
    if ((int11 == -1 as struct)) {
        return;
    };
    var int12 = 0;
    var string0 = "";
    var int13 = 0;
    [int12, string0, int13] = script16461(int11, script42(struct_getparam(int11, 2217)));
    [int12, string0, int13] = script16451(int2, int12, string0, int13);
    var string1 = dbrow_getfield(int2, 696336, 0);
    if ((STRING_LENGTH(string1) == 0)) {
        string1 = struct_getparam(int11, 2210);
    };
    var int14 = 6;
    if ((STRING_LENGTH(string1) > 0)) {
        int14 = (int14 - 1);
    };
    if ((STRING_LENGTH(string0) > 0)) {
        int14 = (int14 - 2);
    };
    if ((int10 > int14)) {
        int3 = (int3 * 2);
        int8 = 1;
    };
    script7924(int0, IF_GETNEXTSUBID(int0), 35, 35, 0, 0, enum_getvalue(0, 23, 8548 as cs2enum, 21), false, false, false, 0);
    int6 = script14747(int0, (35 + (4 * 2)), int6, ((int3 - 35) - (4 * 2)), string1, int13, 40);
    int6 = script14748(int0, 0, int6);
    if ((STRING_LENGTH(string0) > 0)) {
        int6 = script16462(int0, 0, int6, int3, int12, string0);
        int6 = script14748(int0, 0, int6);
    };
    int7 = -1;
    var int15 = 0;
    var int16 = int6;
    var int17 = 0;
    var int18 = -1;
    while ((++int7 < int10)) {
        int11 = enum_getvalue(0, 73, int9, int7);
        if ((int11 != -1 as struct)) {
            [int6, int15, int18] = script16450(int0, int6, ++int4, int3, int11, int10, int8, int17, int16, int18);
            if ((MODULO(int4, 2) == 1)) {
                int16 = int6;
                int17 = int15;
            };
        };
    };
    var string2 = "Unlock the <col=EBE076>Remote Farming Device</col> at your player-owned farm.";
    if ((varbitplayer_45420 == 1)) {
        string2 = script15204(int1, script3214(int1), script16790(int1));
    };
    int6 = script14748(int0, 0, int6);
    int6 = script14751(int0, int6, int3, `Patch state: ${string2}`);
    IF_SETSIZE(int3, (int6 - 2), 0, 0, int0);
    return;
}