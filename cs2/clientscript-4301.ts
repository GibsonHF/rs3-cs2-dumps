//[proc,clansettings_list_build]
function script4301(): void {
    var int0 = comp(1096, 23);
    var int1 = comp(1096, 24);
    var int2 = comp(1096, 25);
    var int3 = comp(1096, 26);
    var int4 = 71827476;
    var int5 = comp(1096, 21);
    var int6 = comp(1096, 27);
    var string0 = "";
    var string1 = "";
    var int7 = 15;
    var int8 = 15;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = ACTIVECLANSETTINGS_GETAFFINEDCOUNT();
    var int14 = 25;
    var int15 = 4;
    var int16 = 4;
    var int17 = 4;
    var int18 = 9;
    var int19 = -1;
    var int20 = -1;
    var int21 = -1;
    var int22 = 0;
    var int23 = 0;
    var int24 = 23;
    var int25 = 23;
    var int26 = (16384 / 2);
    var int27 = (IF_GETWIDTH(int5) / 2);
    var int28 = ((int27 - int18) - 4);
    var int29 = 5;
    var int30 = ((int27 - int7) - 20);
    var int31 = (IF_GETHEIGHT(int0) / int25);
    var int32 = (int31 * 2);
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    CC_DELETEALL(int6);
    while ((int12 < int13)) {
        string0 = ACTIVECLANSETTINGS_GETAFFINEDDISPLAYNAME(int12);
        int20 = ACTIVECLANSETTINGS_GETAFFINEDRANK(int12);
        int22 = unk10985(int12, 10, 10);
        int21 = unk11124(int12);
        if (((varclient_1516 - 1) != int20)) {
            int23 = 1;
            if (((varclient_1516 == 0) || (varclient_1516 == -1))) {
                int23 = 0;
            };
        } else {
            int23 = 0;
        };
        CC_CREATE(int0, 4, int12);
        if ((int23 == 0)) {
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETSIZE(int26, int25, 2, 0);
            int19 = -1;
            if ((int21 == 0)) {
                int21 = 3331;
            };
            string1 = `Joined: ${script4225(int21)}`;
            CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643));
            int19 = -1;
            if (((unk10993(0) == 1) && (ACTIVECLANCHANNEL_GETUSERSLOT(string0) > -1))) {
                int19 = ACTIVECLANCHANNEL_GETUSERWORLD(ACTIVECLANCHANNEL_GETUSERSLOT(string0));
            };
            if ((int19 == MAP_WORLD())) {
                CC_SETCOLOUR(3979038);
            } else if ((int19 > 0)) {
                CC_SETCOLOUR(16777060);
            } else {
                CC_SETCOLOUR(12497548);
            };
            CC_SETTEXTSHADOW(true);
            CC_SETTEXT(string0);
        };
        CC_CREATE(int2, 5, int12);
        if ((int23 == 0)) {
            CC_SETSIZE(int7, int8, 0, 0);
            CC_SETGRAPHIC(enum_getvalue(0, 23, 3712 as cs2enum, int20));
            string1 = enum_getvalue(0, 36, 3714 as cs2enum, int20);
            CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643));
        };
        CC_CREATE(int6, 5, int12);
        if ((int23 == 0)) {
            CC_SETSIZE(int7, int8, 0, 0);
            if ((int22 == 1)) {
                CC_SETGRAPHIC(7302 as graphic);
                string1 = "Muted in Clan Chat";
                CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643));
            };
        };
        CC_CREATE(int3, 5, int12);
        if ((int23 == 0)) {
            CC_SETSIZE(int18, int24, 0, 0);
            CC_SETGRAPHIC(6034 as graphic);
            CC_SETOP(1, "Show details");
            CC_SETONOP(callback(script4303));
        };
        int12 = (int12 + 1);
    };
    var int33 = 0;
    int12 = 0;
    var int34 = 0;
    while ((int12 < int13)) {
        int34 = unk11123(int12);
        if (((CC_FIND(int0, int34) == 1) && (strcmp(CC_GETTEXT(), "") != 0))) {
            if ((MODULO(int33, 2) != 0)) {
                int10 = int27;
            } else {
                int10 = 0;
            };
            int11 = ((int33 / 2) * int25);
            CC_SETPOSITION((int14 + int10), (int15 + int11), 0, 0);
            if ((CC_FIND(int2, int34) == 1)) {
                CC_SETPOSITION((int29 + int10), (int15 + int11), 0, 0);
            };
            if ((CC_FIND(int3, int34) == 1)) {
                CC_SETPOSITION((int28 + int10), int11, 0, 0);
            };
            if ((CC_FIND(int6, int34) == 1)) {
                CC_SETPOSITION((int30 + int10), (int17 + int11), 0, 0);
            };
            int33 = (int33 + 1);
        };
        int12 = (int12 + 1);
    };
    varclient_1517 = int33;
    script4318();
    return;
}