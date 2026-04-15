//
function script9742(): void {
    IF_SETHIDE(false, comp(940, 179));
    IF_SETHIDE(false, comp(940, 11));
    IF_SETHIDE(true, comp(940, 15));
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 3016 as cs2enum;
    var int9 = -1 as struct;
    var int10 = 1000;
    if ((MAP_MEMBERS() == 1)) {
        int8 = 3015 as cs2enum;
    };
    if ((MODULO(ENUM_GETOUTPUTCOUNT(int8), 5) == 0)) {
        int3 = ((ENUM_GETOUTPUTCOUNT(int8) / 5) * 58);
    } else {
        int3 = (((ENUM_GETOUTPUTCOUNT(int8) / 5) * 58) + 58);
    };
    CC_DELETEALL(comp(940, 11));
    IF_SETSCROLLSIZE((5 * 60), int3, comp(940, 11));
    while ((int0 < ENUM_GETOUTPUTCOUNT(int8))) {
        int9 = enum_getvalue(0, 73, int8, int0);
        int6 = script10664(int9);
        if ((varplayer_3079 >= struct_getparam(int9, 4742))) {
            CC_CREATE(comp(940, 149), 3, int4);
            CC_SETCOLOUR(script10495(9));
            CC_SETFILL(1);
            CC_SETOP(1, OC_NAME(struct_getparam(int9, 1070)));
            CC_SETONOP(callback(script2250, int4));
            if ((int6 > 0)) {
                CC_SETTRANS(200);
                CC_SETCOLOUR(16711680);
            };
            CC_SETSIZE(52, 52, 0, 0);
            CC_SETPOSITION(((int1 * 60) + 2), ((int2 * 58) + 1), 0, 0);
            if ((int6 <= 0)) {
                CC_SETONMOUSELEAVE(callback(script2249, int4));
                CC_SETONMOUSEOVER(callback(script2248, int4));
            };
            int4 = (int4 + 1);
            CC_CREATE(comp(940, 149), 5, int4);
            int4 = (int4 + 1);
            CC_SETGRAPHIC(2184 as graphic);
            CC_SETCOLOUR(13107200);
            CC_SETSIZE(12, 12, 0, 0);
            CC_SETPOSITION(((int1 * 60) + 5), ((int2 * 58) + 40), 0, 0);
            CC_CREATE(comp(940, 149), 4, int4);
            int4 = (int4 + 1);
            CC_SETCOLOUR(script10495(3));
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETTEXTSHADOW(true);
            CC_SETTEXTALIGN(0, 1, 0);
            if ((struct_getparam(int9, 4275) != 0)) {
                if ((varbitplayer_4290 == 0)) {
                    int10 = struct_getparam(int9, 4275);
                } else if (((varbitplayer_4290 == 1) && (struct_getparam(int9, 4276) != 0))) {
                    int10 = struct_getparam(int9, 4276);
                } else {
                    int10 = struct_getparam(int9, 1072);
                };
                if ((script1282() == 5)) {
                    int10 = ADDPERCENT(int10, -7);
                };
                CC_SETTEXT(script940(int10));
            } else {
                int10 = struct_getparam(int9, 1072);
                if ((script1282() == 5)) {
                    int10 = ADDPERCENT(int10, -7);
                };
                CC_SETTEXT(script940(int10));
            };
            CC_SETSIZE(31, 12, 0, 0);
            CC_SETPOSITION(((int1 * 60) + 18), ((int2 * 58) + 40), 0, 0);
            CC_CREATE(comp(940, 149), 5, int4);
            int4 = (int4 + 1);
            CC_SETOBJECT(struct_getparam(int9, 1070), -1);
            CC_SETSIZE(32, 32, 0, 0);
            CC_SETPOSITION(((int1 * 60) + 15), ((int2 * 58) + 3), 0, 0);
            if ((++int1 >= 5)) {
                int1 = 0;
                int2 = (int2 + 1);
            };
        };
        int0 = (int0 + 1);
    };
    script31(comp(940, 13), comp(940, 11), 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
    return;
}