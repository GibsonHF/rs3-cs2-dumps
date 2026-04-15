//
function script14953(): void {
    var int0 = comp(477, 7);
    var int1 = comp(477, 8);
    var int2 = comp(477, 6);
    var int3 = comp(477, 9);
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    var int4 = 0;
    var int5 = ENUM_GETOUTPUTCOUNT(14058 as cs2enum);
    var int6 = 0;
    var int7 = -1 as obj;
    var int8 = 0;
    var int9 = 0;
    define_array(int5);
    define_array[65536](int5);
    var int10 = -1 as dbrow;
    var int11 = -1;
    var int12 = -1;
    while ((++int11 < int5)) {
        int7 = enum_getvalue(0, 33, 14058 as cs2enum, int11);
        if (((int7 != 49444 as obj) && (int7 != 49445 as obj))) {
            int10 = item_getparam(int7, 6659);
            pop_array(int6, int11);
            if ((int10 != -1 as dbrow)) {
                pop_array[1](int6, dbrow_getfield(int10, 360512, 0));
            } else {
                pop_array[1](int6, 1);
            };
            int6 = (int6 + 1);
        };
        CC_CREATE(int1, 5, int11);
        CC_SETPARAM_STRING(5441, LOWERCASE(OC_NAME(int7)));
    };
    ARRAY_SORT(int6, 1, 0);
    int11 = -1;
    while ((++int11 < int6)) {
        int12 = 1;
        while (((int12 < (int6 - int11)) && (push_array[1](int11) == push_array[1]((int11 + int12))))) {
            int12 = (int12 + 1);
        };
        if ((int12 > 1)) {
            script17567(0, int1, int11, ((int11 + int12) - 1));
            int11 = (int11 + (int12 - 1));
        };
    };
    var int13 = 11952 as struct;
    var int14 = 40;
    var int15 = 36;
    var int16 = 36;
    var int17 = 32;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var int21 = 2;
    [int18, int19, int20] = script12087(IF_GETWIDTH(int0), int14, 5, 5);
    var int22 = ENUM_GETOUTPUTCOUNT(13152 as cs2enum);
    var int23 = 0;
    var string0 = "";
    var int24 = 0;
    var int25 = 0;
    var int26 = 0;
    var int27 = -1;
    int11 = -1;
    while ((++int11 < int22)) {
        int23 = enum_getvalue(0, 0, 13152 as cs2enum, int11);
        switch (int23) {
            case 0: {
                string0 = "Agnostic Materials";
                break;
            }
            case 1: {
                string0 = "Armadylean Materials";
                break;
            }
            case 2: {
                string0 = "Bandosian Materials";
                break;
            }
            case 3: {
                string0 = "Dragonkin Materials";
                break;
            }
            case 4: {
                string0 = "Saradominist Materials";
                break;
            }
            case 5: {
                string0 = "Zamorakian Materials";
                break;
            }
            case 6: {
                string0 = "Zarosian Materials";
                break;
            }
            default: {
                string0 = "";
                break;
            }
        };
        if ((STRING_LENGTH(string0) > 0)) {
            script14954(int0, int20, int4, string0);
            int24 = (int4 + 30);
            int12 = -1;
            int27 = -1;
            while ((++int12 < int6)) {
                int7 = enum_getvalue(0, 33, 14058 as cs2enum, push_array(int12));
                if ((item_getparam(int7, 7212) == int23)) {
                    int27 = (int27 + 1);
                    int25 = (int20 + (MODULO(int27, int18) * int19));
                    int26 = (int24 + ((int27 / int18) * (int14 + int21)));
                    script11624(int0, comp(-1, 65535), int13, int25, int26, 0, 1);
                    if ((CC_FIND(int1, push_array(int12)) == 1)) {
                        CC_SETSIZE(int16, int17, 0, 0);
                        CC_SETPOSITION(((int25 + ((int14 - int16) / 2)) + 2), ((int26 + ((int15 - int17) / 2)) + 1), 0, 0);
                        script14955(int7);
                    };
                };
            };
            int4 = ((int26 + int15) + (2 * int21));
        };
    };
    IF_SETSCROLLSIZE(0, MAX(IF_GETHEIGHT(int2), int4), int2);
    IF_SETSCROLLPOS(0, IF_GETSCROLLY(int2), int2);
    script7791(int3, int2);
    return;
}