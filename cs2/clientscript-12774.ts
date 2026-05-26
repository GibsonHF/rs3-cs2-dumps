//
function script12774(): void {
    script3521();
    var int0 = 0;
    var int1 = db_find_with_count(270432, 1, 0);
    define_array(int1);
    define_array[65536](int1);
    dbrow_findnext();
    var int2 = stack();
    while ((int2 != -1 as dbrow)) {
        pop_array(int0, dbrow_getfield(int2, 270336, 0));
        int0 = (int0 + 1);
        dbrow_findnext();
        int2 = stack();
    };
    ARRAY_SORT(int1, 0, 1);
    int0 = 0;
    var int3 = -1;
    var int4 = -1 as dbrow;
    var int5 = comp(-1, 65535);
    var int6 = 0;
    while ((int0 < int1)) {
        int3 = push_array(int0);
        stack(270336);
        stack(int3);
        DB_FIND(0);
        dbrow_findnext();
        int4 = stack();
        stack(int4);
        stack(270448);
        stack(0);
        dbrow_getfield();
        switch (stack()) {
            case 1: {
                int5 = comp(1790, 38);
                break;
            }
            case 2: {
                int5 = comp(1790, 48);
                break;
            }
            case 3: {
                int5 = comp(1790, 74);
                break;
            }
            default: {
                int5 = comp(1790, 28);
                break;
            }
        };
        int6 = IF_GETNEXTSUBID(int5);
        while ((int6 < int3)) {
            CC_CREATE(int5, 5, int6);
            int6 = IF_GETNEXTSUBID(int5);
        };
        CC_CREATE(int5, 5, int3);
        cc_setparam(3855, int4);
        CC_SETOP(1, "Favourite");
        if ((STRING_LENGTH(dbrow_getfield(int4, 270464, 0)) != 0)) {
            CC_SETOP(2, dbrow_getfield(int4, 270464, 0));
        };
        if ((STRING_LENGTH(dbrow_getfield(int4, 270480, 0)) != 0)) {
            CC_SETOP(3, dbrow_getfield(int4, 270480, 0));
        };
        if ((dbrow_getfield(int4, 270352, 0) == 1)) {
            CC_SETOP(4, "Withdraw");
            CC_SETOP(10, "Examine");
        };
        int0 = (int0 + 1);
    };
    var int7 = 5;
    var int8 = 5;
    var int9 = 40;
    var int10 = 55;
    var int11 = 0;
    var int12 = 40;
    [int11, int12, int7] = script12087((IF_GETWIDTH(comp(1790, 28)) - 16), int9, 5, 9);
    var int13 = 0;
    var int14 = int8;
    var int15 = 0;
    var int16 = 0;
    var string0 = "";
    var string1 = "";
    var int17 = 0;
    var int18 = 4;
    while ((int18 > 0)) {
        switch (int18) {
            case 4: {
                int5 = comp(1790, 28);
                break;
            }
            case 3: {
                int5 = comp(1790, 38);
                break;
            }
            case 2: {
                int5 = comp(1790, 48);
                break;
            }
            case 1: {
                int5 = comp(1790, 74);
                break;
            }
        };
        int15 = 0;
        int0 = 0;
        while ((int0 < IF_GETNEXTSUBID(int5))) {
            if ((CC_FIND(int5, int0) == 1)) {
                int4 = cc_getparam(3855);
                int3 = dbrow_getfield(int4, 270336, 0);
                if ((int4 != -1 as dbrow)) {
                    int16 = script14965(int4);
                    if ((int4 == 2274 as dbrow)) {
                        int16 = (int16 * 10);
                    };
                    string0 = script11601(int16, 1);
                    int13 = (int7 + (MODULO(int15, int11) * int12));
                    int14 = (int8 + ((int15 / int11) * (int10 + int8)));
                    int15 = (int15 + 1);
                    CC_CREATE[1](int5, 5, IF_GETNEXTSUBID(int5));
                    CC_SETPOSITION[1](int13, int14, 0, 0);
                    CC_SETGRAPHIC[1](26557 as graphic);
                    CC_SETSIZE[1](int9, int9, 0, 0);
                    string1 = strconcat(script14963(int4), `: ${TOSTRING_LOCALISED(int16, 1)}`);
                    script14990(2, string1);
                    CC_SETSIZE(32, 32, 0, 0);
                    CC_SETPOSITION((int13 + 4), (int14 + 4), 0, 0);
                    if ((dbrow_getfield(int4, 270400, 0) != -1 as obj)) {
                        CC_SETOBJECT_NONUM(dbrow_getfield(int4, 270400, 0), 1000);
                        CC_SETOPBASE(`${script4033(dbrow_getfield(int4, 270400, 0))}${script14963(int4)}`);
                    } else if ((dbrow_getfield(int4, 270384, 0) != -1 as graphic)) {
                        CC_SETGRAPHIC(dbrow_getfield(int4, 270384, 0));
                        CC_SETOPBASE(`${script4033(41028 as obj)}${script14963(int4)}`);
                    };
                    CC_SENDTOFRONT();
                    CC_CREATE[1](int5, 4, IF_GETNEXTSUBID(int5));
                    CC_SETCOLOUR[1](16777215);
                    CC_SETONVARTRANSMIT[1](callback(script12775, -2147483645, -2147483643, int0, 3814, 6525, 7110, 3));
                    CC_SETSIZE[1](40, 15, 0, 0);
                    CC_SETPOSITION[1](int13, ((int14 + int10) - 15), 0, 0);
                    CC_SETTEXTALIGN[1](1, 1, 0);
                    CC_SETTEXT[1](string0);
                    CC_SETTEXTFONT[1](27);
                    CC_SETTEXTSHADOW[1](1);
                };
            };
            int0 = (int0 + 1);
        };
        int14 = (int14 + (int10 + int8));
        script9582(IF_GETPARENTLAYER(int5), int14, int14);
        IF_SETSIZE(0, IF_GETHEIGHT(comp(1790, 13)), 1, 0, comp(1790, 13));
        IF_SETSIZE(0, IF_GETHEIGHT(comp(1790, 14)), 1, 0, comp(1790, 14));
        IF_SETSIZE(0, IF_GETHEIGHT(comp(1790, 15)), 1, 0, comp(1790, 15));
        IF_SETSIZE(0, IF_GETHEIGHT(comp(1790, 16)), 1, 0, comp(1790, 16));
        int18 = (int18 - 1);
    };
    return;
}