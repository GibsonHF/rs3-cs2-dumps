//
function script6466(int0: struct, int1: int, int2: int, int3: unknown_int, int4: unknown_int): [int, int] {
    var int5 = struct_getparam(int0, 2531);
    var int6 = struct_getparam(int0, 2532);
    if (((int5 != 2) && (int3 == 0))) {
        return [int1, int2];
    };
    if ((((GENDER() == 0) && (int5 == 1)) && (((((((int6 == 1) || (int6 == 3)) || (int6 == 4)) || (int6 == 8)) || (int6 == 9)) && (struct_getparam(int0, 2772) != 0)) && (enum_getvalue(0, 73, 2338 as cs2enum, struct_getparam(int0, 2772)) == 741 as struct)))) {
        return [int1, int2];
    };
    var int7 = enum_getvalue(0, 9, 5961 as cs2enum, int6);
    if ((int7 == comp(-1, 65535))) {
        return [int1, int2];
    };
    if ((int4 == 1)) {
        int7 = enum_getvalue(0, 9, 5961 as cs2enum, 22);
    };
    var int8 = IF_GETNEXTSUBID(int7);
    var int9 = -1 as cs2enum;
    var int10 = -1;
    if ((int5 != 2)) {
        int9 = enum_getvalue(0, 26, 5958 as cs2enum, int5);
        if (((int9 != -1 as cs2enum) && (enum_getreversecount(73, int9, int0) > 0))) {
            int10 = (enum_getreverseindex(73, 0, int9, int0, 0) * 3);
            while ((int8 < int10)) {
                CC_CREATE(int7, 5, int8);
                CC_CREATE(int7, 4, (int8 + 1));
                CC_CREATE(int7, 5, (int8 + 2));
                int8 = (int8 + 3);
            };
        };
    };
    var int11 = 24168 as graphic;
    var int12 = 24169;
    var int13 = 14931919;
    var int14 = -1;
    var int15 = -1;
    var int16 = -1;
    var int17 = -1;
    var int18 = 1426;
    var int19 = 0;
    var int20 = 0;
    var int21 = -1;
    if ((script6488(int0) == 0)) {
        if ((script7388(int0) == 1)) {
            int11 = 24172 as graphic;
            int12 = 24173;
            int13 = 9342606;
        } else {
            int11 = 24166 as graphic;
            int12 = 24167;
            int13 = 9342606;
        };
    } else if ((script6489(int0) == 1)) {
        int11 = 24170 as graphic;
        int12 = 24171;
        int13 = 15777401;
    } else if ((script7388(int0) == 1)) {
        int11 = 24173 as graphic;
        int12 = 24430;
        int13 = 15777401;
    };
    if (((int5 == 3) && (script19681(int0) != -1 as struct))) {
        int11 = 24168 as graphic;
        int12 = 24169;
        int13 = 14931919;
    };
    var int22 = 0;
    switch (int5) {
        case 1: {
            int22 = 155;
            break;
        }
        case 5: {
            int22 = 205;
            break;
        }
        default: {
            int22 = 225;
            break;
        }
    };
    CC_CREATE(int7, 5, int8);
    CC_SETGRAPHIC(int11);
    if ((int3 == 1)) {
        CC_SETSIZE((int22 - 10), (26 - 0), 0, 0);
    } else {
        CC_SETSIZE(0, 0, 0, 0);
    };
    CC_SETPOSITION(((int2 * int22) + ((int22 - CC_GETWIDTH()) / 2)), (int1 + ((26 - CC_GETHEIGHT()) / 2)), 0, 0);
    CC_SETOP(1, "Preview");
    if ((((int11 == 24170 as graphic) && (int5 != 1)) && (int5 != 5))) {
        CC_SETOP(2, "Deactivate");
    } else if ((((int19 == 0) && (int20 == 0)) && ((((int11 == 24168 as graphic) || (int11 == 24173 as graphic)) && (int5 != 5)) && ((int5 != 3) || (script18366(int0) == 0))))) {
        CC_SETOP(2, "Activate");
    } else if (((int5 == 5) && (struct_getparam(int0, 6973) == 1))) {
        CC_SETOP(2, "Recolour");
    } else {
        CC_SETOP(2, "");
    };
    CC_SETONOP(callback(script6480, -2147483645, -2147483643));
    CC_SETONMOUSEOVER(callback(script688, -2147483645, CC_GETID(), int12));
    CC_SETONMOUSELEAVE(callback(script688, -2147483645, CC_GETID(), int11));
    var string0 = "";
    var string1 = "";
    var int23 = -1;
    if ((int5 == 1)) {
        if ((((((int6 == 1) || (int6 == 3)) || (int6 == 4)) || (int6 == 8)) || (int6 == 9))) {
            if ((GENDER() == 1)) {
                int23 = 2341 as cs2enum;
            } else {
                int23 = 2338 as cs2enum;
            };
            string0 = struct_getparam(enum_getvalue(0, 73, int23, struct_getparam(int0, 2772)), 792);
        } else if (((int6 == 2) || (int6 == 5))) {
            string0 = enum_getvalue(0, 36, 2340 as cs2enum, struct_getparam(int0, 2772));
        };
    } else if ((int6 == 19)) {
        if ((script9964(int0) == -1 as obj)) {
            string0 = struct_getparam(int0, 2533);
        } else {
            string0 = `Cosmetic ${LOWERCASE(OC_NAME(script9964(int0)))}`;
            if ((STRING_LENGTH(string0) > 27)) {
                string1 = string0;
                string0 = `${SUBSTRING(string0, 0, 24)}...`;
            };
        };
    } else {
        string0 = struct_getparam(int0, 2533);
    };
    CC_CREATE(int7, 4, (int8 + 1));
    CC_SETTEXT(string0);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETCOLOUR(int13);
    if ((int3 == 1)) {
        CC_SETSIZE((int22 - 10), (26 - 0), 0, 0);
    } else {
        CC_SETSIZE(0, 0, 0, 0);
    };
    CC_SETPOSITION(((int2 * int22) + ((int22 - CC_GETWIDTH()) / 2)), (int1 + ((26 - CC_GETHEIGHT()) / 2)), 0, 0);
    CC_SETTEXTALIGN(1, 1, 13);
    if ((STRING_LENGTH(string1) > 1)) {
        script14990(0, string1);
    };
    if ((int3 == 1)) {
        IF_SETSIZE(0, (int1 + 26), 1, 0, int7);
        var int1 = (int1 + 26);
    } else {
        IF_SETSIZE(0, int1, 1, 0, int7);
    };
    return [int1, int2];
}