//
function script13239(int0: int, int1: struct, int2: component, int3: component, int4: int, int5: int, int6: unknown_int, int7: unknown_int, int8: int): [int, unknown_int] {
    var int9 = script10495(9);
    var int10 = script10495(12);
    var int11 = script10495(16);
    var int12 = 2;
    var int13 = (27 + (2 * int12));
    var int14 = -1;
    var int15 = -1;
    var int16 = -1 as graphic;
    var string0 = "null";
    var string1 = "null";
    var int17 = ((250 + 27) + (4 * 2));
    if ((int7 == 0)) {
        if ((script13109(int5) == 1)) {
            [int14, int15] = script13110(int5);
        };
        if ((int8 != 0)) {
            int16 = enum_getvalue(0, 23, 9996 as cs2enum, 2);
        } else if ((enum_getvalue(0, 23, 9995 as cs2enum, int5) != -1 as graphic)) {
            int16 = enum_getvalue(0, 23, 9995 as cs2enum, int5);
        } else {
            int16 = enum_getvalue(0, 23, 9996 as cs2enum, 2);
        };
        CC_CREATE[1](int2, 5, IF_GETNEXTSUBID(int2));
        CC_SETSIZE[1](24, 24, 0, 0);
        CC_SETPOSITION[1](int12, (int4 + ((int13 - CC_GETHEIGHT[1]()) / 2)), 0, 0);
        CC_SETGRAPHIC[1](int16);
        CC_CREATE(int3, 4, IF_GETNEXTSUBID(int3));
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTSHADOW(true);
        CC_SETPOSITION(((CC_GETX[1]() + 27) + 5), int4, 0, 0);
        CC_SETSIZE(((250 - CC_GETX()) - int12), int13, 0, 0);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETCOLOUR(script10495(3));
        if ((int1 == 35592 as struct)) {
            string0 = OC_NAME(INV_GETOBJ(818 as inv, int5));
        } else {
            string0 = script11659(int1, 1);
        };
        string1 = script3930(string0, CC_GETWIDTH(), 1, CC_GETFONTMETRICS());
        if ((strcmp(string0, string1) != 0)) {
            CC_SETTEXT(string1);
            script14990(2, string0);
        } else {
            CC_SETTEXT(string0);
        };
        CC_CREATE(int2, 4, IF_GETNEXTSUBID(int2));
        CC_SETPOSITION(250, (int4 + int12), 0, 0);
        CC_SETSIZE(int17, 27, 1, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTSHADOW(true);
        CC_SETCOLOUR(script10495(6));
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETTEXT(script3930(script13099(int1), (IF_GETWIDTH(int2) - int17), int13, CC_GETFONTMETRICS()));
    };
    CC_CREATE[1](int2, 3, IF_GETNEXTSUBID(int2));
    CC_SETPOSITION[1](0, int4, 0, 0);
    CC_SETSIZE[1](0, int13, 1, 0);
    if ((int6 == 0)) {
        CC_SETCOLOUR[1](int9);
        var int6 = 1;
    } else {
        CC_SETCOLOUR[1](int10);
        int6 = 0;
    };
    CC_SETFILL[1](1);
    CC_SENDTOBACK[1]();
    if ((int8 == 0)) {
        CC_SETCOLOUR[1](int11);
        if ((CC_FIND(int3, (IF_GETNEXTSUBID(int3) - 1)) == 1)) {
            CC_SETCOLOUR(script10495(5));
        };
    } else if ((int8 == 2)) {
        CC_SETCOLOUR[1](int11);
        if ((CC_FIND(int3, (IF_GETNEXTSUBID(int3) - 1)) == 1)) {
            CC_SETCOLOUR(script10495(5));
        };
    } else if ((int8 == 4)) {
        CC_CREATE(comp(1845, 18), 5, IF_GETNEXTSUBID(comp(1845, 18)));
        CC_SETGRAPHIC(21747 as graphic);
        CC_SETSIZE(27, 27, 0, 0);
        CC_SETPOSITION(2, int4, 2, 0);
    };
    var int4 = ((int4 + int13) + int12);
    return [int4, int6];
}