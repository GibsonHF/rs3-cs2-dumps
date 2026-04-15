//
function script8019(int0: unknown_int): string {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 1;
    while ((int11 <= ENUM_GETOUTPUTCOUNT(681 as cs2enum))) {
        if ((int0 == 1)) {
            [int1, int2, int3, int4, int5, int6, int7, int8, int9, int10] = script5865(script10783(enum_getvalue(0, 17, 681 as cs2enum, int11)), int1, int2, int3, int4, int5, int6, int7, int8, int9, int10);
        } else {
            [int1, int2, int3, int4, int5, int6, int7, int8, int9, int10] = script5865(STAT_VISIBLE_XP_ACTUAL(enum_getvalue(0, 17, 681 as cs2enum, int11)), int1, int2, int3, int4, int5, int6, int7, int8, int9, int10);
        };
        int11 = (int11 + 1);
    };
    var string0 = inttostring(int1, 10);
    var string1 = SUBSTRING(inttostring(int2, 10), 0, 1);
    var string2 = SUBSTRING(inttostring(int3, 10), 0, 1);
    var string3 = SUBSTRING(inttostring(int4, 10), 0, 1);
    var string4 = SUBSTRING(inttostring(int5, 10), 0, 1);
    var string5 = SUBSTRING(inttostring(int6, 10), 0, 1);
    var string6 = SUBSTRING(inttostring(int7, 10), 0, 1);
    var string7 = SUBSTRING(inttostring(int8, 10), 0, 1);
    var string8 = SUBSTRING(inttostring(int9, 10), 0, 1);
    var string9 = SUBSTRING(inttostring(int10, 10), 0, 1);
    var int12 = 10;
    if ((int10 == 0)) {
        string9 = "";
        int12 = (int12 - 1);
        if ((int9 == 0)) {
            string8 = "";
            int12 = (int12 - 1);
            if ((int8 == 0)) {
                string7 = "";
                int12 = (int12 - 1);
                if ((int7 == 0)) {
                    string6 = "";
                    int12 = (int12 - 1);
                    if ((int6 == 0)) {
                        string5 = "";
                        int12 = (int12 - 1);
                        if ((int5 == 0)) {
                            string4 = "";
                            int12 = (int12 - 1);
                            if ((int4 == 0)) {
                                string3 = "";
                                int12 = (int12 - 1);
                                if ((int3 == 0)) {
                                    string2 = "";
                                    int12 = (int12 - 1);
                                    if ((int2 == 0)) {
                                        string1 = "";
                                        int12 = (int12 - 1);
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    var string10 = "";
    if ((int12 > 3)) {
        string10 = script8001();
    };
    var string11 = "";
    if ((int12 > 6)) {
        string11 = script8001();
    };
    var string12 = "";
    if ((int12 > 9)) {
        string12 = script8001();
    };
    var string13 = `${string9}${string12}${string8}${string7}${string6}${string11}${string5}${string4}${string3}${string10}${string2}${string1}${string0}`;
    return string13;
}