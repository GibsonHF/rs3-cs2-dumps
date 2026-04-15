//
function script13680(int0: int): void {
    var int1 = comp(1901, 14);
    CC_DELETEALL(int1);
    var int2 = enum_getvalue(0, 74, 13175 as cs2enum, varbitplayer_37614);
    var int3 = -1 as dbrow;
    var int4 = dbrow_getfield(int2, 90448, 0);
    var string0 = "null";
    var int5 = IF_GETNEXTSUBID(int1);
    var int6 = 2;
    var int7 = 0;
    var int8 = 5;
    var int9 = 0;
    var int10 = 20;
    var int11 = 15;
    var int12 = 15;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = -1 as obj;
    var int17 = -1 as dbrow;
    var int18 = -1;
    var int19 = IF_GETY(comp(1901, 14));
    var int20 = 1;
    if ((CC_FIND(comp(1901, 0), int0) == 1)) {
        stack(90112);
        stack(cc_getparam(6813));
        DB_FIND(0);
        dbrow_findnext();
        int3 = stack();
        if ((CC_FIND[1](124583937, 0) == 1)) {
            CC_SETPOSITION[1](CC_GETX[1](), cc_getparam(6814), 0, 0);
            CC_SETHIDE[1](false);
            CC_SENDTOFRONT[1]();
        };
    } else {
        return;
    };
    string0 = dbrow_getfield(int3, 90128, 0);
    IF_SETTEXT(string0, comp(1901, 15));
    string0 = dbrow_getfield(int3, 90144, 0);
    IF_SETTEXT(string0, comp(1901, 4));
    int9 = dbrow_getfield(int3, 90288, 0);
    if ((int9 == -1)) {
        string0 = "Lots!";
    } else {
        string0 = TOSTRING_LOCALISED(int9, 1);
    };
    IF_SETTEXT(string0, comp(1901, 21));
    int9 = dbrow_getfield(int3, 90480, 0);
    string0 = TOSTRING_LOCALISED(int9, 1);
    IF_SETTEXT(string0, comp(1901, 66));
    if ((varbitplayer_37615 == 1)) {
        IF_SETTEXT("N/A", comp(1901, 85));
    } else {
        int9 = dbrow_getfield(int3, 90384, 0);
        string0 = TOSTRING_LOCALISED(int9, 1);
        IF_SETTEXT(string0, comp(1901, 85));
    };
    int9 = dbrow_getfield(int3, 90448, 0);
    string0 = TOSTRING_LOCALISED(int9, 1);
    IF_SETTEXT(string0, comp(1901, 56));
    if ((varbitplayer_37615 == 1)) {
        IF_SETTEXT("Power supplied", comp(1901, 55));
        IF_SETONMOUSEREPEAT(callback(script13684, -2147483645, -2147483643, 1, dbrow_getfield(int3, 90448, 0), int4), 124583947);
    } else {
        IF_SETONMOUSEREPEAT(callback(script13684, -2147483645, -2147483643, 0, 0, int4), 124583947);
    };
    if (((((varbitplayer_37612 - varbitplayer_37613) + int4) >= int9) || (varbitplayer_37615 == 1))) {
        stack(13165);
        stack(124583993);
        IF_SETGRAPHIC();
        IF_SETCOLOUR(65280, 124583992);
    } else {
        stack(13166);
        stack(124583993);
        IF_SETGRAPHIC();
        IF_SETCOLOUR(16711680, 124583992);
        int20 = 0;
    };
    stack(30989);
    stack(124583977);
    IF_SETGRAPHIC();
    stack(int3);
    stack(90160);
    stack(0);
    dbrow_getfield();
    int9 = stack();
    string0 = TOSTRING_LOCALISED(int9, 1);
    IF_SETTEXT(string0, 124583995);
    if ((STAT(26) >= int9)) {
        stack(13165);
        stack(124583996);
        IF_SETGRAPHIC();
        IF_SETCOLOUR(65280, 124583995);
    } else {
        stack(13166);
        stack(124583996);
        IF_SETGRAPHIC();
        IF_SETCOLOUR(16711680, 124583995);
        int20 = 0;
    };
    string0 = `<col=f5b241>Current Invention level:</col> ${inttostring(STAT(26 as stat), 10)}`;
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -1), 124583994);
    int9 = dbrow_getfield(int3, 90176, 0);
    string0 = dbrow_getfield(int3, 90128, 0);
    IF_SETTEXT(string0, 124584007);
    if ((script12059(int9) == 1)) {
        stack(13165);
        stack(124584008);
        IF_SETGRAPHIC();
    } else {
        stack(13166);
        stack(124584008);
        IF_SETGRAPHIC();
        int20 = 0;
    };
    string0 = `<col=f5b241>Discover blueprint:</col> ${dbrow_getfield(int3, 90128, 0)}`;
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -1), 124584007);
    var int21 = dbrow_getfield(int3, 90192, 0);
    if ((int21 != -1)) {
        IF_SETTEXT(`Tier ${inttostring(dbrow_getfield(int21, 90208, 0), 10)}`, comp(1901, 78));
        if ((int2 == int21)) {
            stack(13165);
            stack(124584015);
            IF_SETGRAPHIC();
            IF_SETCOLOUR(65280, 124584014);
        } else {
            stack(13166);
            stack(124584015);
            IF_SETGRAPHIC();
            IF_SETCOLOUR(16711680, 124584014);
            int20 = 0;
        };
        string0 = `<col=f5b241>Machine required:</col> ${dbrow_getfield(int21, 90128, 0)}`;
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -1), 124584013);
    } else {
        IF_SETTEXT("None", comp(1901, 78));
        stack(13165);
        stack(124584015);
        IF_SETGRAPHIC();
        IF_SETCOLOUR(65280, 124584014);
        string0 = "<col=f5b241>Machine required:</col> None";
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -1), 124584013);
    };
    int13 = DB_GETFIELDCOUNT(int3, 90224);
    int14 = DB_GETFIELDCOUNT(int3, 90240);
    while ((int14 > 0)) {
        [int16, int9] = dbrow_getfield(int3, 90240, (int14 - 1));
        CC_CREATE(int1, 5, int5);
        CC_SETSIZE(4, int10, 0, 0);
        CC_SETPOSITION(int8, int7, 0, 0);
        CC_SETGRAPHIC(13122 as graphic);
        int5 = (int5 + 1);
        CC_CREATE(int1, 5, int5);
        CC_SETSIZE((8 + int8), int10, 1, 0);
        CC_SETPOSITION((int8 + 4), int7, 0, 0);
        CC_SETGRAPHIC(13123 as graphic);
        CC_SETONMOUSEREPEAT(callback(script8801, script13683(int16, 0), int1, int5, 1, 0, enum_getvalue(25, 0, 8549 as cs2enum, 26 as fontmetrics)));
        int5 = (int5 + 1);
        CC_CREATE(int1, 5, int5);
        CC_SETSIZE(4, int10, 0, 0);
        CC_SETPOSITION(int8, int7, 2, 0);
        CC_SETGRAPHIC(13124);
        int5 = (int5 + 1);
        CC_CREATE(int1, 5, int5);
        CC_SETSIZE(int12, int12, 0, 0);
        CC_SETPOSITION((2 * int8), (int7 + ((int10 - int12) / 2)), 0, 0);
        CC_SETOBJECT(int16, -1);
        string0 = TOSTRING_LOCALISED(int9, 1);
        int5 = (int5 + 1);
        script13681(int1, int5, ((2 * int8) + int10), int7, OC_NAME(int16), (2 * int8), int10, 11505726, 0, 1, 26);
        int5 = (int5 + 1);
        CC_CREATE(int1, 5, int5);
        CC_SETSIZE(int12, int12, 0, 0);
        CC_SETPOSITION((2 * int8), (int7 + ((int10 - int12) / 2)), 2, 0);
        if ((script2515(93, int16) >= int9)) {
            int9 = 65280;
            CC_SETGRAPHIC(13165 as graphic);
        } else {
            int9 = 16711680;
            CC_SETGRAPHIC(13166 as graphic);
            int20 = 0;
        };
        int5 = (int5 + 1);
        script13681(int1, int5, int8, int7, string0, ((3 * int8) + int10), int10, int9, 2, 1, 26 as fontmetrics);
        int7 = (int7 + (int6 + int10));
        int19 = (int19 + (int6 + int10));
        int14 = (int14 - 1);
        int5 = (int5 + 1);
    };
    while ((int13 > 0)) {
        [int17, int9] = dbrow_getfield(int3, 90224, (int13 - 1));
        int18 = dbrow_getfield(int17, 16384, 0);
        CC_CREATE(int1, 5, int5);
        CC_SETSIZE(4, int10, 0, 0);
        CC_SETPOSITION(int8, int7, 0, 0);
        CC_SETGRAPHIC(13122 as graphic);
        int5 = (int5 + 1);
        CC_CREATE(int1, 5, int5);
        CC_SETSIZE((8 + int8), int10, 1, 0);
        CC_SETPOSITION((int8 + 4), int7, 0, 0);
        CC_SETGRAPHIC(13123 as graphic);
        CC_SETONMOUSEREPEAT(callback(script8801, script13682(int18, 0, "null"), int1, int5, 1, 0, enum_getvalue(25, 0, 8549 as cs2enum, 26 as fontmetrics)));
        int5 = (int5 + 1);
        CC_CREATE(int1, 5, int5);
        CC_SETSIZE(4, int10, 0, 0);
        CC_SETPOSITION(int8, int7, 2, 0);
        CC_SETGRAPHIC(13124);
        int5 = (int5 + 1);
        CC_CREATE(int1, 5, int5);
        CC_SETSIZE(int12, int12, 0, 0);
        CC_SETPOSITION((2 * int8), (int7 + ((int10 - int12) / 2)), 0, 0);
        CC_SETGRAPHIC(dbrow_getfield(int17, 16448, 0));
        string0 = TOSTRING_LOCALISED(int9, 1);
        int5 = (int5 + 1);
        script13681(int1, int5, ((2 * int8) + int10), int7, dbrow_getfield(int17, 16400, 0), (2 * int8), int10, 11505726, 0, 1, 26);
        int5 = (int5 + 1);
        CC_CREATE(int1, 5, int5);
        CC_SETSIZE(int12, int12, 0, 0);
        CC_SETPOSITION((2 * int8), (int7 + ((int10 - int12) / 2)), 2, 0);
        if ((script12054(dbrow_getfield(int17, 16384, 0)) >= int9)) {
            int9 = 65280;
            CC_SETGRAPHIC(13165 as graphic);
        } else {
            int9 = 16711680;
            CC_SETGRAPHIC(13166 as graphic);
            int20 = 0;
        };
        int5 = (int5 + 1);
        script13681(int1, int5, int8, int7, string0, ((3 * int8) + int10), int10, int9, 2, 1, 26 as fontmetrics);
        int7 = (int7 + (int6 + int10));
        int19 = (int19 + (int6 + int10));
        int13 = (int13 - 1);
        int5 = (int5 + 1);
    };
    if ((varbitplayer_37615 != 1)) {
        CC_CREATE(int1, 4, int5);
        CC_SETSIZE((2 * int8), int11, 1, 0);
        CC_SETPOSITION(int8, int7, 0, 0);
        CC_SETTEXT("Running Costs");
        CC_SETTEXTSHADOW(true);
        CC_SETCOLOUR(16777215);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETTEXTFONT(28 as fontmetrics);
        int7 = (int7 + (int11 + int6));
        int19 = (int19 + (int11 + int6));
        int5 = (int5 + 1);
        CC_CREATE(int1, 5, int5);
        CC_SETSIZE(4, int10, 0, 0);
        CC_SETPOSITION(int8, int7, 0, 0);
        CC_SETGRAPHIC(13122 as graphic);
        int5 = (int5 + 1);
        CC_CREATE(int1, 5, int5);
        CC_SETSIZE((8 + int8), int10, 1, 0);
        CC_SETPOSITION((int8 + 4), int7, 0, 0);
        CC_SETGRAPHIC(13123 as graphic);
        string0 = "The amount of machine charge this machine uses from your generator every hour.";
        CC_SETONMOUSEREPEAT(callback(script3876, string0, int1, int5));
        int5 = (int5 + 1);
        CC_CREATE(int1, 5, int5);
        CC_SETSIZE(4, int10, 0, 0);
        CC_SETPOSITION(int8, int7, 2, 0);
        CC_SETGRAPHIC(13124);
        int5 = (int5 + 1);
        CC_CREATE(int1, 5, int5);
        CC_SETSIZE(int12, int12, 0, 0);
        CC_SETPOSITION((2 * int8), (int7 + ((int10 - int12) / 2)), 0, 0);
        CC_SETGRAPHIC(24224);
        int5 = (int5 + 1);
        script13681(int1, int5, ((2 * int8) + int10), int7, "Machine charge", (2 * int8), int10, 11505726, 0, 1, 26);
        int5 = (int5 + 1);
        string0 = inttostring(dbrow_getfield(int3, 90464, 0), 10);
        script13681(int1, int5, int8, int7, string0, ((3 * int8) + int10), int10, 16777215, 2, 1, 26);
        int7 = (int7 + (int6 + int10));
        int19 = (int19 + (int6 + int10));
        int15 = DB_GETFIELDCOUNT(int3, 90416);
        while ((int15 > 0)) {
            int5 = (int5 + 1);
            [int16, int9] = dbrow_getfield(int3, 90416, (int15 - 1));
            CC_CREATE(int1, 5, int5);
            CC_SETSIZE(4, int10, 0, 0);
            CC_SETPOSITION(int8, int7, 0, 0);
            CC_SETGRAPHIC(13122 as graphic);
            int5 = (int5 + 1);
            CC_CREATE(int1, 5, int5);
            CC_SETSIZE((8 + int8), int10, 1, 0);
            CC_SETPOSITION((int8 + 4), int7, 0, 0);
            CC_SETGRAPHIC(13123 as graphic);
            string0 = "The amount of this secondary this machine uses for every item it processes.";
            CC_SETONMOUSEREPEAT(callback(script3876, string0, int1, int5));
            int5 = (int5 + 1);
            CC_CREATE(int1, 5, int5);
            CC_SETSIZE(4, int10, 0, 0);
            CC_SETPOSITION(int8, int7, 2, 0);
            CC_SETGRAPHIC(13124);
            int5 = (int5 + 1);
            CC_CREATE(int1, 5, int5);
            CC_SETSIZE(int12, int12, 0, 0);
            CC_SETPOSITION((2 * int8), (int7 + ((int10 - int12) / 2)), 0, 0);
            CC_SETOBJECT(int16, -1);
            int5 = (int5 + 1);
            script13681(int1, int5, ((2 * int8) + int10), int7, OC_NAME(int16), (2 * int8), int10, 11505726, 0, 1, 26);
            int5 = (int5 + 1);
            string0 = inttostring(int9, 10);
            script13681(int1, int5, int8, int7, string0, ((3 * int8) + int10), int10, 16777215, 2, 1, 26);
            int7 = (int7 + (int6 + int10));
            int19 = (int19 + (int6 + int10));
            int15 = (int15 - 1);
        };
    };
    if ((int2 != -1 as dbrow)) {
        if ((dbrow_getfield(int3, 90272, 0) == dbrow_getfield(int2, 90272, 0))) {
            if ((dbrow_getfield(int3, 90208, 0) < dbrow_getfield(int2, 90208, 0))) {
                IF_SETTEXT("Downgrade", comp(1901, 54));
            } else {
                IF_SETTEXT("Upgrade", comp(1901, 54));
            };
        } else {
            IF_SETTEXT("Build", comp(1901, 54));
        };
    } else if ((dbrow_getfield(int3, 90208, 0) > 1)) {
        int20 = 0;
    };
    if ((int20 == 0)) {
        IF_SETHIDE(false, comp(1901, 52));
        string0 = "You do not have all of the requirements to build this machine.";
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), 124583988);
    } else {
        IF_SETHIDE(true, comp(1901, 52));
        IF_SETONMOUSEREPEAT(callback(), comp(1901, 52));
    };
    if ((int19 > IF_GETHEIGHT(comp(1901, 36)))) {
        IF_SETSCROLLSIZE(0, int19, comp(1901, 36));
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(1901, 36));
    };
    IF_SETSCROLLPOS(0, 0, comp(1901, 36));
    script7791(comp(1901, 37), comp(1901, 36));
    return;
}