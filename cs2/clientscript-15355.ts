//
function script15355(int0: component, int1: component, int2: cs2enum, int3: category, int4: int, int5: int, int6: unknown_int): void {
    var int7 = comp(1851, 12);
    IF_SETONVARTRANSMIT(callback(script15354, int0, int1, int2, int3, int4, 7120, 1), int7);
    var int8 = 121307149;
    var int9 = 121307157;
    CC_DELETEALL(int8);
    CC_DELETEALL(int9);
    IF_SETHIDE(1, 121307158);
    var int10 = ENUM_GETOUTPUTCOUNT(int2);
    var int11 = enum_getreverseindex(41, 0, 16072, int3, 0);
    if ((int11 == -1)) {
        int11 = ENUM_GETOUTPUTCOUNT(16072 as cs2enum);
    };
    var int12 = 0;
    if ((CC_FIND(int1, int11) == 1)) {
        int12 = ((CC_GETY() + CC_GETHEIGHT()) + 3);
    };
    IF_SETPOSITION(0, int12, 1, 0, int7);
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = -1 as achievement;
    var string0 = "";
    var int20 = -1 as category;
    int12 = 0;
    var string1 = "";
    var int21 = -1 as category;
    if ((varplayer_9607 != -1 as achievement)) {
        int21 = ACHIEVEMENT_SUBCAT(varplayer_9607);
    };
    while ((int13 < int10)) {
        int20 = enum_getvalue(0, 41, int2, int13);
        int15 = ACHIEVEMENT_FINDSUBCAT(int3, int20);
        int16 = 0;
        int18 = 0;
        int19 = ACHIEVEMENT_FINDNEXT();
        while ((int19 != -1 as achievement)) {
            int17 = ACHIEVEMENT_REQSTATE(int19);
            if ((int17 == -2)) {
                int16 = (int16 + 1);
            } else if (((int17 == -1) && (unk11111(int19) != 0))) {
                int18 = (int18 + 1);
            };
            int19 = ACHIEVEMENT_FINDNEXT();
        };
        CC_CREATE(int9, 5, int13);
        CC_CREATE(int8, 3, IF_GETNEXTSUBID(int8));
        CC_CREATE(int8, 4, IF_GETNEXTSUBID(int8));
        CC_CREATE(int8, 4, IF_GETNEXTSUBID(int8));
        if (((varbitplayer_48340 == 0) || ((varbitplayer_48340 == 1) && (int16 < int15)))) {
            int12 = (int14 * ((32 + 2) + 2));
            int14 = (int14 + 1);
            string1 = enum_getvalue(41, 36, 16086 as cs2enum, int20);
            if ((CC_FIND(int9, int13) == 1)) {
                CC_SETPOSITION(0, int12, 0, 0);
                CC_SETSIZE(0, 32, 1, 0);
                CC_SETONOP(callback(script15358, int3, int20, CC_GETY()));
                CC_SETOP(1, "Select");
                CC_SETOPBASE(string1);
                if (((int20 == int21) || ((varclient_6830 - 1) == enum_getreverseindex(41, 0, int2, int20, 0)))) {
                    script15360(CC_GETY());
                    if ((int6 == 1)) {
                        var int5 = (int5 + CC_GETY());
                    };
                    if ((int20 == int21)) {
                        script15351(int4, int13);
                    };
                };
            };
            if ((CC_FIND(int8, (IF_GETNEXTSUBID(int8) - 3)) == 1)) {
                CC_SETPOSITION(1, int12, 0, 0);
                CC_SETSIZE(0, 32, 1, 0);
                CC_SETFILL(1);
                if ((MODULO(int14, 2) == 0)) {
                    CC_SETCOLOUR(script10495(12));
                    CC_SETONMOUSEOVER(callback(script1356, -2147483645, CC_GETID(), script10495(13)));
                    CC_SETONMOUSELEAVE(callback(script1356, -2147483645, CC_GETID(), script10495(12)));
                } else {
                    CC_SETCOLOUR(script10495(9));
                    CC_SETONMOUSEOVER(callback(script1356, -2147483645, CC_GETID(), script10495(10)));
                    CC_SETONMOUSELEAVE(callback(script1356, -2147483645, CC_GETID(), script10495(9)));
                };
                string0 = enum_getvalue(41, 36, 16087 as cs2enum, int20);
                if ((strcmp(string0, "") != 0)) {
                    CC_SETONMOUSEREPEAT(callback(script8799, string0, int8, CC_GETID()));
                };
            };
            if ((CC_FIND(int8, (IF_GETNEXTSUBID(int8) - 2)) == 1)) {
                CC_SETPOSITION(5, int12, 2, 0);
                CC_SETTEXT(`${TOSTRING_LOCALISED(int16, 1)}/${TOSTRING_LOCALISED(int15, 1)}`);
                CC_SETTEXTSHADOW(true);
                CC_SETTEXTALIGN(2, 1, 0);
                CC_SETTEXTFONT(26 as fontmetrics);
                CC_SETCOLOUR(script10495(3));
                CC_SETSIZE(50, 32, 0, 0);
            };
            if ((CC_FIND(int8, (IF_GETNEXTSUBID(int8) - 1)) == 1)) {
                CC_SETPOSITION(5, int12, 0, 0);
                CC_SETSIZE(85, 32, 0, 0);
                CC_SETCOLOUR(script10495(3));
                CC_SETTEXTSHADOW(true);
                CC_SETTEXTALIGN(0, 1, 0);
                CC_SETTEXTFONT(26 as fontmetrics);
                CC_SETMAXLINES(2);
                CC_SETTEXT(string1);
            };
        } else if (((varclient_6830 - 1) == enum_getreverseindex(41, 0, int2, int20, 0))) {
            IF_SETHIDE(true, comp(1851, 22));
        };
        int13 = (int13 + 1);
    };
    IF_SETSIZE(IF_GETWIDTH(int7), MAX(1, (int14 * ((32 + 2) + 2))), 0, 0, int7);
    IF_SETHIDE(false, int7);
    script15357(int0, int1, int11, IF_GETHEIGHT(int7));
    script15356(int1, int5);
    return;
}