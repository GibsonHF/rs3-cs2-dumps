//
function script19735(): void {
    SOUND_GROUP_STOP(0);
    CC_DELETEALL(comp(1278, 30));
    var int0 = -1;
    var int1 = 8;
    var int2 = -1 as dbrow;
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    var int6 = comp(-1, 65535);
    var int7 = comp(-1, 65535);
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = -1 as obj;
    var int12 = 0;
    var int13 = 0;
    var int14 = 1;
    while ((++int0 < int1)) {
        stack(1101824);
        stack(int0);
        DB_FIND(0);
        dbrow_findnext();
        int2 = stack();
        if ((int2 == -1)) {
            return;
        };
        int3 = dbrow_getfield(int2, 1101888, 0);
        int4 = dbrow_getfield(int2, 1101904, 0);
        int5 = dbrow_getfield(int2, 1101936, 0);
        int6 = dbrow_getfield(int2, 1101920, 0);
        int7 = dbrow_getfield(int2, 1101952, 0);
        int8 = dbrow_getfield(int2, 1101968, 0);
        int9 = dbrow_getfield(int2, 1101984, 0);
        stack(enum_getvalue(0, 23, 6651 as cs2enum, script19693(int0)));
        stack(int4);
        IF_SETGRAPHIC();
        [int11, int12, int13, int14] = script19695(int0);
        if ((int14 > 1)) {
            IF_SETTEXT(`${inttostring(int14, 10)}x ${OC_NAME(int11)}`, int6);
        } else {
            IF_SETTEXT(OC_NAME(int11), int6);
        };
        script19726(int5, int11, int12, int14, int13, 85, 55, 25, -25, 1);
        unk10997(int3);
        IF_SETONTIMER(callback(), int3);
        IF_SETHIDE(0, int3);
        if ((varbitplayer_57133 >= 4)) {
            IF_CLEAROPS(int7);
            IF_SETPOSITION(320, 100, 0, 0, int3);
            int10 = dbrow_getfield(int2, 1102000, 0);
            script19743(int3, int7, int8, int9, 10, int10);
        } else {
            IF_SETOP(1, "Select", int7);
            IF_SETOPCURSOR(1, 46 as cursor, int7);
            IF_SETPOSITION(int8, int9, 0, 0, int3);
        };
    };
    script19736();
    return;
}