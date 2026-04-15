//
function script19193(): void {
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 180);
    var int0 = script16161();
    IF_SETHIDE(false, comp(1288, 57));
    IF_SETTEXT(`Level - ${inttostring(script19145(int0), 10)}`, comp(1288, 65));
    var int1 = script19148(int0);
    var int2 = -1 as obj;
    var int3 = 0;
    var int4 = 0;
    var int5 = false;
    var int6 = 0;
    var int7 = DB_GETFIELDCOUNT(int1, 401424);
    var int8 = 50;
    var int9 = comp(1288, 68);
    CC_DELETEALL(int9);
    var string0 = "";
    var int10 = 1;
    var int11 = script19146(int0);
    var string1 = "";
    var int12 = -1 as struct;
    var int13 = -1 as dbrow;
    var int14 = -1 as graphic;
    var int15 = -1;
    [int13, int14] = script19198(int0);
    while ((int6 < int7)) {
        [int2, int3, int4] = dbrow_getfield(int1, 401424, int6);
        if ((int4 <= int11)) {
            int5 = true;
        } else {
            int5 = false;
            if ((int15 == -1)) {
                int15 = int6;
            };
        };
        script14391(int9, int6, 0, (int6 * int8), 0, 0, 0, int8, 1, 0);
        if ((MODULO(int6, 2) == 0)) {
            script15958(int9, (int6 + 1), int10, 0, int6, 0, 0, 0, 0, 0, 0, 1, 1, int13, int5);
        };
        int10 = (int10 + 1);
        script10507(int9, (int6 + 1), int10, 0, int6, 5, 0, 0, 0, 45, 32, 1, 1, 17467 as dbrow, `<col=FFFFFF>Level ${inttostring(int4, 10)}</col>`);
        CC_SETTEXTSHADOW(true);
        int10 = (int10 + 1);
        int12 = item_getparam(int2, 4414);
        if ((int12 != -1 as struct)) {
            string1 = script19200(int12);
        } else {
            string1 = `${inttostring(int3, 10)} x ${OC_NAME(int2)}`;
        };
        script10507(int9, (int6 + 1), int10, 0, int6, 5, 16, 0, 0, 45, 16, 1, 1, 13569 as dbrow, `<col=FFFFFF>${string1}</col>`);
        int10 = (int10 + 1);
        script7920(int9, (int6 + 1), int10, 0, int6, 3, 0, 2, 1, 34, 34, 0, 0, int14);
        script19195(int5, int4, int2, int3);
        int10 = (int10 + 1);
        script10024(int9, (int6 + 1), int10, 0, int6, 4, 0, 2, 1, 32, 32, 0, 0, int2, int3, 1, 0);
        int10 = (int10 + 1);
        if ((int5 == true)) {
            script7920(int9, (int6 + 1), int10, 0, int6, 4, 0, 2, 1, 32, 32, 0, 0, 17057 as graphic);
            int10 = (int10 + 1);
        };
        int6 = (int6 + 1);
    };
    var int16 = (int7 * int8);
    var int17 = 0;
    if ((int15 == -1)) {
        int17 = int16;
    } else {
        int17 = (int15 * int8);
    };
    IF_SETSCROLLSIZE(IF_GETWIDTH(int9), int16, int9);
    IF_SETSCROLLPOS(0, int17, int9);
    script7791(comp(1288, 67), int9);
    return;
}