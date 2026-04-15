//
function script13332(int0: int): void {
    var int1 = enum_getvalue(0, 9, 13762 as cs2enum, int0);
    script14001(int1, 28556 as struct, 0, 0, 1, 0);
    if ((CC_FIND(enum_getvalue(0, 9, 13035 as cs2enum, int0), 0) == 1)) {
        CC_SETVFLIP(true);
    };
    if ((varplayer_9620 > 0)) {
        int1 = enum_getvalue(0, 9, 13762 as cs2enum, (varplayer_9620 - 1));
        script14001(int1, 28556 as struct, 0, 0, 0, 0);
        IF_SETONOP(callback(script13331, -2147483645), enum_getvalue(0, 9, 13034 as cs2enum, (varplayer_9620 - 1)));
        if ((CC_FIND(enum_getvalue(0, 9, 13035, (varplayer_9620 - 1)), 0) == 1)) {
            CC_SETVFLIP(false);
        };
    };
    varplayer_9620 = (int0 + 1);
    var int2 = -1 as struct;
    var int3 = -1 as cs2enum;
    var int4 = -1;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var string0 = "";
    CC_DELETEALL(comp(1851, 12));
    IF_SETHIDE(true, comp(1851, 12));
    IF_SETHIDE(true, comp(1851, 41));
    int2 = enum_getvalue(0, 73, 11155 as cs2enum, int0);
    if ((int2 == -1 as struct)) {
        return;
    };
    int3 = struct_getparam(int2, 6420);
    var int8 = -1 as struct;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = -1 as cs2enum;
    var int0 = (int0 + 1);
    var string1 = "";
    if ((int3 != -1 as cs2enum)) {
        IF_SETHIDE(false, comp(1851, 12));
        int5 = ENUM_GETOUTPUTCOUNT(int3);
        IF_SETSIZE((5 * 2), (2 + (int5 * (32 + 2))), 1, 0, comp(1851, 12));
        IF_SETPOSITION(5, (2 + ((45 + 2) * int0)), 1, 0, comp(1851, 12));
        while ((int6 < int5)) {
            int8 = enum_getvalue(0, 73, int3, int6);
            if ((varclient_5990 == int6)) {
                int12 = struct_getparam(int8, 6422);
            };
            CC_CREATE(comp(1851, 12), 3, (int6 * 3));
            CC_SETPOSITION(1, ((int6 * (32 + 2)) + 2), 0, 0);
            CC_SETSIZE(5, 32, 1, 0);
            CC_SETFILL(1);
            if ((MODULO(int6, 2) == 0)) {
                CC_SETCOLOUR(script10495(12));
                CC_SETONMOUSEOVER(callback(script1356, -2147483645, CC_GETID(), script10495(13)));
                CC_SETONMOUSELEAVE(callback(script1356, -2147483645, CC_GETID(), script10495(12)));
            } else {
                CC_SETCOLOUR(script10495(9));
                CC_SETONMOUSEOVER(callback(script1356, -2147483645, CC_GETID(), script10495(10)));
                CC_SETONMOUSELEAVE(callback(script1356, -2147483645, CC_GETID(), script10495(9)));
            };
            CC_SETONOP(callback(script13333, struct_getparam(int8, 6422), int6, 1));
            CC_SETOP(1, "Select");
            CC_CREATE(121307148, 4, ((int6 * 3) + 1));
            CC_SETPOSITION((5 + (2 * 2)), ((int6 * (32 + 2)) + 2), 2, 0);
            [int9, int10, int11] = script13289(struct_getparam(int8, 6757));
            CC_SETTEXT(`${TOSTRING_LOCALISED(int9, 1)}/${TOSTRING_LOCALISED(int10, 1)}`);
            CC_SETTEXTSHADOW(1);
            CC_SETTEXTALIGN(2, 1, 0);
            CC_SETTEXTFONT(26);
            CC_SETCOLOUR(script10495(3));
            CC_SETSIZE(50, (32 - 2), 0, 0);
            CC_CREATE(121307148, 4, ((int6 * 3) + 2));
            CC_SETPOSITION(5, ((int6 * (32 + 2)) + 2), 0, 0);
            CC_SETSIZE(85, 32, 0, 0);
            CC_SETCOLOUR(script10495(3));
            CC_SETTEXTSHADOW(1);
            CC_SETTEXTALIGN(0, 1, 0);
            CC_SETTEXTFONT(26);
            string0 = struct_getparam(int8, 6421);
            string1 = "";
            if ((PARAHEIGHT(string0, CC_GETWIDTH(), CC_GETFONTMETRICS()) > 1)) {
                string1 = string0;
                if ((strcmp(struct_getparam(int8, 6756), "") != 0)) {
                    string0 = struct_getparam(int8, 6756);
                };
            };
            CC_SETTEXT(string0);
            if ((((strcmp(string1, "") != 0) || (strcmp(struct_getparam(int8, 2225), "") != 0)) || (strcmp(struct_getparam(int8, 8081), "") != 0))) {
                if ((strcmp(struct_getparam(int8, 2225), "") != 0)) {
                    if ((strcmp(string1, "") != 0)) {
                        string1 = strconcat(string1, `<br>${struct_getparam(int8, 2225)}`);
                    } else {
                        string1 = struct_getparam(int8, 2225);
                    };
                };
                if ((strcmp(struct_getparam(int8, 8081), "") != 0)) {
                    if ((strcmp(string1, "") != 0)) {
                        string1 = strconcat(string1, `<br>${struct_getparam(int8, 8081)}`);
                    } else {
                        string1 = struct_getparam(int8, 8081);
                    };
                };
                CC_SETONMOUSEREPEAT(callback(script8799, string1, 121307148, CC_GETID()));
            };
            int6 = (int6 + 1);
        };
    };
    int6 = 0;
    var int13 = ENUM_GETOUTPUTCOUNT(11065 as cs2enum);
    while ((int6 < int13)) {
        int7 = (2 + ((45 + 2) * int6));
        if (((int3 != -1 as cs2enum) && ((int6 + 1) > int0))) {
            int7 = (int7 + (2 + (int5 * (32 + 2))));
        };
        IF_SETPOSITION(0, int7, 1, 0, enum_getvalue(0, 9, 11065 as cs2enum, int6));
        int6 = (int6 + 1);
    };
    script13329(int0);
    varplayer_6891 = struct_getparam(int2, 6422);
    if (((int12 == -1 as cs2enum) && (varplayer_6891 != -1 as cs2enum))) {
        script13334(varplayer_6891, 1);
    } else if ((int12 != -1 as cs2enum)) {
        varplayer_6891 = int12;
        script13614(int12, varclient_5990, 2);
    } else {
        CC_DELETEALL(comp(1851, 40));
    };
    return;
}