//
function script8953(int0: component, int1: component, int2: int, int3: int): int {
    if ((((varplayer_7125 == 0) && (varplayer_7126 == 0)) && (varplayer_7127 == 0))) {
        return 0;
    };
    var int4 = 0;
    var int5 = 5;
    var int6 = 3;
    var int7 = 0;
    var int8 = -1 as struct;
    var int9 = struct_getparam(int8, 8072);
    var string0 = "";
    var string1 = "";
    var int10 = 0;
    var int11 = 0;
    var int12 = -1 as obj;
    var string2 = "";
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = (IF_GETWIDTH(int0) - 10);
    var int18 = 30;
    while ((int6 > 0)) {
        switch (int6) {
            case 3: {
                int7 = varplayer_7125;
                break;
            }
            case 2: {
                int7 = varplayer_7126;
                break;
            }
            case 1: {
                int7 = varplayer_7127;
                break;
            }
        };
        int13 = 0;
        int14 = 0;
        int15 = 0;
        int5 = 5;
        if ((int7 > 0)) {
            int8 = enum_getvalue(0, 73, script8221(), int7);
            int9 = struct_getparam(int8, 8072);
            string0 = struct_getparam(int8, 8073);
            string1 = struct_getparam(int8, 6969);
            int11 = struct_getparam(int8, 8079);
            int12 = struct_getparam(int8, 8078);
            int12 = struct_getparam(int8, 8078);
            int5 = (int5 + 16);
            string1 = struct_getparam(int8, 6969);
            int10 = script7593(string1, (int17 - 45), 26 as fontmetrics, 0);
            int5 = (int5 + int10);
            int5 = (++int5 + 5);
            int16 = script10410(int0, int1, 28556 as struct, int2, int3, int17, int5, int16, false, "");
            int4 = (int3 + 5);
            CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
            CC_SETPOSITION((int2 + 5), int4, 2, 0);
            CC_SETSIZE(40, 16, 0, 0);
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETCOLOUR(script10495(4));
            [int13, int14, int15] = script13289(int9);
            CC_SETTEXTALIGN(2, 0, 0);
            CC_SETTEXT(`${TOSTRING_LOCALISED(int13, 1)}/${TOSTRING_LOCALISED(int14, 1)}`);
            CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
            CC_SETPOSITION((int2 + 5), int4, 0, 0);
            CC_SETSIZE(60, 16, 1, 0);
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETCOLOUR(script10495(4));
            CC_SETTEXTALIGN(0, 0, 0);
            CC_SETTEXT(string0);
            CC_SETMAXLINES(-1);
            int4 = (int4 + 16);
            CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
            CC_SETSIZE(45, int10, 1, 0);
            CC_SETPOSITION((int2 + 5), int4, 0, 0);
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETCOLOUR(script10495(3));
            CC_SETTEXTALIGN(0, 0, 0);
            CC_SETTEXT(string1);
            CC_SETMAXLINES(-1);
            int4 = (int4 + CC_GETHEIGHT());
            CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
            CC_SETPOSITION((int2 + 5), int4, 0, 0);
            CC_SETSIZE(40, 16, 1, 0);
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETCOLOUR(script10495(3));
            CC_SETTEXTALIGN(0, 2, 0);
            CC_SETMAXLINES(1);
            if ((int12 != -1 as obj)) {
                if ((int11 > 1)) {
                    string2 = script13575(`Reward: ${TOSTRING_LOCALISED(int11, 1)} x ${OC_NAME(int12)}`, ((int17 - int18) - 5), CC_GETFONTMETRICS(), 1);
                } else {
                    string2 = script13575(`Reward: ${OC_NAME(int12)}`, ((int17 - int18) - 5), CC_GETFONTMETRICS(), 1);
                };
            } else {
                string2 = "";
            };
            CC_SETTEXT(string2);
            int4 = (int4 + CC_GETHEIGHT());
            CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
            CC_SETSIZE(int18, int18, 0, 0);
            CC_SETPOSITION((int2 + 5), (int4 - CC_GETHEIGHT()), 2, 0);
            if ((int12 != -1 as obj)) {
                CC_SETOBJECT(script7197(int11, int12), -1);
            } else {
                CC_SETGRAPHIC(struct_getparam(38581 as struct, 3496));
            };
            var int3 = (int3 + (int5 + 2));
        };
        int6 = (int6 - 1);
    };
    return int3;
}