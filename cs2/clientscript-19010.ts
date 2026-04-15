//
function script19010(int0: struct): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = 265;
    var int4 = 356;
    var int5 = 0;
    var int6 = 235;
    var int7 = 265;
    var int8 = 80;
    var int9 = 0;
    var int10 = 0;
    var int11 = -1 as cs2enum;
    var string0 = "";
    var int12 = false;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var int20 = 4;
    var int21 = 5;
    switch (int0) {
        case 40380: {
            int1 = 429;
            int2 = 39;
            int5 = 0;
            int6 = 235;
            int7 = 265;
            int8 = 80;
            int9 = -161;
            int10 = 23;
            int12 = false;
            int11 = 9077 as cs2enum;
            string0 = "Boneyard";
            int13 = 56;
            int14 = 56;
            int15 = 54;
            int16 = 36;
            int17 = 34;
            int18 = 10;
            int19 = 4;
            break;
        }
        case 7229: {
            int1 = 49;
            int2 = 42;
            int5 = 0;
            int6 = 235;
            int7 = 265;
            int8 = 80;
            int9 = 161;
            int10 = 23;
            int12 = false;
            int11 = 15153 as cs2enum;
            string0 = "The Undergrowth";
            int13 = 56;
            int14 = 56;
            int15 = 54;
            int16 = 36;
            int17 = 34;
            int18 = 10;
            int19 = 4;
            break;
        }
        case 44604: {
            int1 = 49;
            int2 = 42;
            int5 = 0;
            int6 = 235;
            int7 = 265;
            int8 = 80;
            int9 = 161;
            int10 = 23;
            int12 = false;
            int11 = 1650 as cs2enum;
            string0 = "Digsite Delve";
            int13 = 56;
            int14 = 56;
            int15 = 54;
            int16 = 36;
            int17 = 34;
            int18 = 10;
            int19 = 4;
            break;
        }
        case 49941: {
            if ((varbitplayer_55644 == 7)) {
                script18998();
            } else {
                script19000();
            };
            int1 = 37;
            int2 = 14;
            int3 = 306;
            int5 = 0;
            int6 = 199;
            int7 = 306;
            int8 = 157;
            int12 = true;
            int9 = 0;
            int10 = 0;
            int11 = 17515 as cs2enum;
            string0 = "";
            int14 = 87;
            int15 = 92;
            int13 = 73;
            int18 = 28;
            int19 = 30;
            int16 = 32;
            int17 = 32;
            int20 = 0;
            int21 = 49;
            IF_SETSIZE(30, 190, 1, 1, comp(1870, 9));
            break;
        }
    };
    IF_SETHIDE(false, comp(1870, 14));
    IF_SETHIDE(false, comp(1870, 0));
    IF_SETHIDE(true, comp(1870, 15));
    IF_SETHIDE(int12, comp(1870, 19));
    CC_DELETEALL(comp(1870, 4));
    CC_DELETEALL(comp(1870, 6));
    IF_SETPOSITION(int1, int2, 0, 0, comp(1870, 0));
    IF_SETSIZE(int3, int4, 0, 0, comp(1870, 0));
    IF_SETPOSITION(int5, int6, 0, 0, comp(1870, 2));
    IF_SETSIZE(int7, int8, 0, 0, comp(1870, 2));
    IF_SETPOSITION(int9, int10, 1, 2, comp(1870, 19));
    IF_SETTEXT(string0, comp(1870, 14));
    IF_SETSIZE(((int20 * 2) + (int14 * ENUM_GETOUTPUTCOUNT(int11))), 0, 0, 1, comp(1870, 4));
    IF_SETSIZE(((int20 * 2) + (int14 * ENUM_GETOUTPUTCOUNT(int11))), 0, 0, 1, comp(1870, 5));
    IF_SETSIZE(((int20 * 2) + (int14 * ENUM_GETOUTPUTCOUNT(int11))), 0, 0, 1, comp(1870, 6));
    IF_SETSCROLLSIZE(((int20 * 2) + (int14 * ENUM_GETOUTPUTCOUNT(int11))), 0, comp(1870, 3));
    if ((IF_GETWIDTH(comp(1870, 3)) > IF_GETWIDTH(comp(1870, 2)))) {
        script1142(comp(1870, 7), comp(1870, 3), 4567 as struct);
    };
    var int22 = int20;
    var int23 = int21;
    var int24 = 0;
    var int25 = -1 as graphic;
    var int26 = -1 as graphic;
    var int27 = -1 as graphic;
    var int28 = -1 as struct;
    var int29 = IF_GETNEXTSUBID(comp(1870, 4));
    var int30 = 1;
    var int31 = -1;
    var int32 = -1;
    while ((int24 < ENUM_GETOUTPUTCOUNT(int11))) {
        int28 = enum_getvalue(0, 73, int11, int24);
        [int25, int26, int27] = script19012(int0, int28, int30);
        script2994(comp(1870, 4), int29++, int22, int23, 0, 0, int14, int15, 0, 0, int25);
        script2994(comp(1870, 4), int29++, (int22 + int18), (int23 + int19), 0, 0, int16, int17, 0, 0, -1 as graphic);
        if ((struct_getparam(int28, 856) != -1 as graphic)) {
            CC_SETGRAPHIC(struct_getparam(int28, 856));
        } else if ((struct_getparam(int28, 9111) != -1 as obj)) {
            CC_SETOBJECT_HIGHRES(struct_getparam(int28, 9111));
        };
        if (((int26 != -1 as graphic) || (int27 != -1 as graphic))) {
            script2994(comp(1870, 4), int29++, int22, int23, 0, 0, int14, int15, 0, 0, -1 as graphic);
            if ((int30 == 1)) {
                CC_SETGRAPHIC(int26);
            };
            if ((CC_FIND[1](comp(1870, 4), (int29 - 2)) == 1)) {
                CC_SETONMOUSEOVER[1](callback(script19020, 122552324, (int29 - 1), int0, int11, 1));
                CC_SETONMOUSELEAVE[1](callback(script19020, 122552324, (int29 - 1), int0, int11, 0));
            };
        };
        int29 = script19011(int0, int29, int22, int23, int30);
        script2994(comp(1870, 6), IF_GETNEXTSUBID(comp(1870, 6)), (int22 + int18), (int23 + int19), 0, 0, int16, int17, 0, 0, -1 as graphic);
        CC_SETOP(1, "Select");
        CC_SETONOP(callback(script19016, int0, int24, int11));
        int30 = 0;
        int22 = (int22 + int13);
        int24 = (int24 + 1);
    };
    script19018(int0, 0, int11);
    return;
}