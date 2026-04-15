//
function script10419(int0: component, int1: component, int2: int, int3: int, int4: int, int5: int, int6: int, int7: boolean, int8: unknown_int, int9: struct, string0: string, string1: string, string2: string, string3: string): [int, int] {
    var string4 = string1;
    var int10 = 1;
    var int11 = 0;
    var int12 = 0;
    var int13 = -1;
    if ((int6 < 1)) {
        stack(string2);
        stack(0);
        [string4, int10] = stack();
    };
    var int14 = struct_getparam(int9, 7526);
    if ((int6 >= 1)) {
        int14 = struct_getparam(int9, 7525);
    };
    var int15 = struct_getparam(int14, 4405);
    if ((int15 != -1 as struct)) {
        int14 = int15;
    };
    var int16 = script9984(int14, 1);
    var int17 = script9984(int14, 2);
    var int18 = int16;
    if ((int7 == true)) {
        int18 = script9984(int14, 5);
    };
    if ((int18 == -1 as struct)) {
        return [int3, int5];
    };
    if (((int7 == true) && (STRING_LENGTH(string3) > 0))) {
        if ((strcmp(SUBSTRING(string3, 0, 1), "*") == 0)) {
            if ((STRING_LENGTH(string4) > 0)) {
                string4 = `${string4}${SUBSTRING(string3, 1, STRING_LENGTH(string3))}`;
            } else {
                var string3 = "";
            };
        } else {
            string4 = string3;
        };
    };
    if ((STRING_LENGTH(string0) > 0)) {
        int11 = script7593(string0, (int4 - 20), 26 as fontmetrics, -1);
        if (((int4 >= 50) && (int11 > 0))) {
            if ((int11 > IF_GETHEIGHT(int0))) {
                int11 = IF_GETHEIGHT(int0);
                int12 = MAX(1, (int11 / 12));
            };
            CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
            CC_SETSIZE((int4 - 20), int11, 0, 0);
            if ((int11 < 18)) {
                CC_SETPOSITION((int2 + 20), (int3 + ((18 - int11) / 2)), 0, 0);
            } else {
                CC_SETPOSITION((int2 + 20), int3, 0, 0);
            };
            CC_SETTEXT(string0);
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETTEXTALIGN(0, 1, 12);
            CC_SETTEXTSHADOW(true);
            if ((int7 == true)) {
                CC_SETCOLOUR(script10495(5));
                if ((strcmp(string3, "") != 0)) {
                    CC_SETONMOUSEREPEAT(callback(script3876, string4, -2147483645, -2147483643));
                };
            } else {
                CC_SETCOLOUR(script10495(3));
                CC_SETONMOUSEREPEAT(callback(script3876, string4, -2147483645, -2147483643));
            };
            CC_SETMAXLINES(int12);
        } else {
            int11 = 0;
        };
    };
    int13 = IF_GETNEXTSUBID(int0);
    CC_CREATE(int0, 5, int13);
    CC_SETSIZE(18, 18, 0, 0);
    if ((int11 > 18)) {
        CC_SETPOSITION(int2, ((int3 + (int11 / 2)) - (18 / 2)), 0, 0);
    } else {
        CC_SETPOSITION(int2, int3, 0, 0);
    };
    cc_setparam(4513, int7);
    cc_setparam(4512, int10);
    CC_SETGRAPHIC(struct_getparam(int18, 3909));
    if ((int8 == 1)) {
        CC_CREATE(int1, 4, int5);
        CC_SETSIZE(18, 18, 0, 0);
        if ((int11 > 18)) {
            CC_SETPOSITION(int2, ((int3 + (int11 / 2)) - (18 / 2)), 0, 0);
        } else {
            CC_SETPOSITION(int2, int3, 0, 0);
        };
        if ((int7 == false)) {
            script14458(int1, int5, int0, int13, string1, int16, string2, int17, int6, int9);
        } else {
            CC_SETONMOUSEOVER(callback());
            CC_SETONMOUSELEAVE(callback());
            CC_SETONCLICK(callback());
            CC_SETONOP(callback());
        };
    } else if ((int7 == false)) {
        script14457(int1, -1, int0, int13, string1, int16, string2, int17, int6, int9, int1);
    } else {
        IF_SETONMOUSEOVER(callback(), int1);
        IF_SETONMOUSELEAVE(callback(), int1);
        IF_SETONCLICK(callback(), int1);
        IF_SETONOP(callback(), int1);
    };
    return [(int3 + MAX(18, int11)), (int5 + 1)];
}