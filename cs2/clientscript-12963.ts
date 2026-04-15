//
function script12963(int0: cs2enum, int1: component, int2: component): void {
    var int3 = IF_GETHEIGHT(int1);
    var int4 = 26;
    var int5 = 26;
    var int6 = 10;
    var int7 = 0;
    var int8 = 0;
    var int9 = -1;
    var int10 = -1 as struct;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var string5 = "";
    var string6 = "";
    var string7 = "";
    var string8 = "";
    var string9 = "";
    var string10 = "";
    script2996(int1, IF_GETNEXTSUBID(int1), 0, int6, 0, 0, 0, int4, 1, 0, 4368 as dbrow);
    while ((int9 < ENUM_GETOUTPUTCOUNT(int0))) {
        int10 = enum_getvalue(0, 73, int0, int9);
        int4 = int5;
        if ((int10 != -1 as struct)) {
            string1 = struct_getparam(int10, 6229);
            string2 = struct_getparam(int10, 6263);
            string3 = struct_getparam(int10, 6264);
            string4 = struct_getparam(int10, 6265);
            string5 = struct_getparam(int10, 6266);
            string6 = struct_getparam(int10, 6267);
            string7 = struct_getparam(int10, 6268);
            string8 = struct_getparam(int10, 6269);
            string9 = struct_getparam(int10, 6230);
            if ((STRING_LENGTH(string8) > 0)) {
                int4 = (int5 * 9);
            } else if ((STRING_LENGTH(string7) > 0)) {
                int4 = (int5 * 8);
            } else if ((STRING_LENGTH(string6) > 0)) {
                int4 = (int5 * 7);
            } else if ((STRING_LENGTH(string5) > 0)) {
                int4 = (int5 * 6);
            } else if ((STRING_LENGTH(string4) > 0)) {
                int4 = (int5 * 5);
            } else if ((STRING_LENGTH(string3) > 0)) {
                int4 = (int5 * 4);
            } else if ((STRING_LENGTH(string2) > 0)) {
                int4 = (int5 * 3);
            } else if ((STRING_LENGTH(string1) > 0)) {
                int4 = (int5 * 2);
            };
        };
        if ((PARAHEIGHT(struct_getparam(enum_getvalue(0, 73, int0, int9), 6228), (174 - 5), 26 as fontmetrics) > 1)) {
            int4 = MAX(int4, (int5 * 2));
        };
        int7 = 0;
        int8 = 0;
        string10 = "";
        if ((int9 != -1)) {
            script16109(0, IF_GETNEXTSUBID(int1), 0, int6, 0, 0, 0, int4, 1, 0, int9, 0);
        };
        if ((int9 == -1)) {
            script2995(int1, IF_GETNEXTSUBID(int1), 5, int6, 0, 0, (174 - 5), int5, 0, 0, 2196 as dbrow, "Skill");
            script2995(int1, IF_GETNEXTSUBID(int1), 174, int6, 0, 0, 145, int5, 0, 0, 2196 as dbrow, "Name");
            script2995(int1, IF_GETNEXTSUBID(int1), (174 + 145), int6, 0, 0, 110, int5, 0, 0, 2196 as dbrow, "Date achieved");
        } else {
            script2995(int1, IF_GETNEXTSUBID(int1), 5, int6, 0, 0, (174 - 5), int4, 0, 0, 2100 as dbrow, struct_getparam(enum_getvalue(0, 73, int0, int9), 6228));
            CC_SETMAXLINES(2);
            int8 = (int8 + 174);
            if ((STRING_LENGTH(string1) > 0)) {
                string10 = `<img=11>${string1}`;
            } else if ((STRING_LENGTH(string9) > 0)) {
                string10 = `<img=13>${string9}`;
            };
            script2995(int1, IF_GETNEXTSUBID(int1), int8, int6, 0, 0, 145, int5, 0, 0, 2100 as dbrow, string10);
            [int11, int12, int13] = [0, 0, 0];
            if ((STRING_LENGTH(string1) > 0)) {
                [int11, int12, int13] = DATE_RUNEDAY_TODATE(struct_getparam(enum_getvalue(0, 73, int0, int9), 6231));
            } else if ((STRING_LENGTH(string9) > 0)) {
                [int11, int12, int13] = DATE_RUNEDAY_TODATE(struct_getparam(enum_getvalue(0, 73, int0, int9), 6232));
            } else {
                script2995(int1, IF_GETNEXTSUBID(int1), (int8 + 145), int6, 0, 0, 110, int5, 0, 0, 2100 as dbrow, "Not yet achieved");
            };
            if ((int13 > 0)) {
                int12 = (int12 + 1);
                if ((int11 < 10)) {
                    string0 = `0${inttostring(int11, 10)}`;
                } else {
                    string0 = inttostring(int11, 10);
                };
                if ((int12 < 10)) {
                    string0 = `${string0}/0${inttostring(int12, 10)}`;
                } else {
                    string0 = `${string0}/${inttostring(int12, 10)}`;
                };
                string0 = `${string0}/${inttostring(int13, 10)}`;
                script2995(int1, IF_GETNEXTSUBID(int1), (int8 + 145), int6, 0, 0, 110, int5, 0, 0, 2100 as dbrow, string0);
            };
            if ((STRING_LENGTH(string1) > 0)) {
                if ((STRING_LENGTH(string2) > 0)) {
                    int7 = (int7 + int5);
                    script2995(int1, IF_GETNEXTSUBID(int1), int8, (int6 + int7), 0, 0, 145, int5, 0, 0, 2100 as dbrow, `<img=11>${string2}`);
                };
                if ((STRING_LENGTH(string3) > 0)) {
                    int7 = (int7 + int5);
                    script2995(int1, IF_GETNEXTSUBID(int1), int8, (int6 + int7), 0, 0, 145, int5, 0, 0, 2100 as dbrow, `<img=11>${string3}`);
                };
                if ((STRING_LENGTH(string4) > 0)) {
                    int7 = (int7 + int5);
                    script2995(int1, IF_GETNEXTSUBID(int1), int8, (int6 + int7), 0, 0, 145, int5, 0, 0, 2100 as dbrow, `<img=11>${string4}`);
                };
                if ((STRING_LENGTH(string5) > 0)) {
                    int7 = (int7 + int5);
                    script2995(int1, IF_GETNEXTSUBID(int1), int8, (int6 + int7), 0, 0, 145, int5, 0, 0, 2100 as dbrow, `<img=11>${string5}`);
                };
                if ((STRING_LENGTH(string6) > 0)) {
                    int7 = (int7 + int5);
                    script2995(int1, IF_GETNEXTSUBID(int1), int8, (int6 + int7), 0, 0, 145, int5, 0, 0, 2100 as dbrow, `<img=11>${string6}`);
                };
                if ((STRING_LENGTH(string7) > 0)) {
                    int7 = (int7 + int5);
                    script2995(int1, IF_GETNEXTSUBID(int1), int8, (int6 + int7), 0, 0, 145, int5, 0, 0, 2100 as dbrow, `<img=11>${string7}`);
                };
                if ((STRING_LENGTH(string8) > 0)) {
                    int7 = (int7 + int5);
                    script2995(int1, IF_GETNEXTSUBID(int1), int8, (int6 + int7), 0, 0, 110, int5, 0, 0, 2100 as dbrow, `<img=11>${string8}`);
                };
                int7 = (int7 + int5);
                if ((STRING_LENGTH(string9) > 0)) {
                    script2995(int1, IF_GETNEXTSUBID(int1), int8, (int6 + int7), 0, 0, 110, int5, 0, 0, 2100 as dbrow, `<img=13>${string9}`);
                };
                int8 = (int8 + 145);
                if ((STRING_LENGTH(string9) > 0)) {
                    [int11, int12, int13] = DATE_RUNEDAY_TODATE(struct_getparam(enum_getvalue(0, 73, int0, int9), 6232));
                    int12 = (int12 + 1);
                    if ((int11 < 10)) {
                        string0 = `0${inttostring(int11, 10)}`;
                    } else {
                        string0 = inttostring(int11, 10);
                    };
                    if ((int12 < 10)) {
                        string0 = `${string0}/0${inttostring(int12, 10)}`;
                    } else {
                        string0 = `${string0}/${inttostring(int12, 10)}`;
                    };
                    string0 = `${string0}/${inttostring(int13, 10)}`;
                    script2995(int1, IF_GETNEXTSUBID(int1), int8, (int6 + int7), 0, 0, 145, int5, 0, 0, 2100 as dbrow, string0);
                } else {
                    script2995(int1, IF_GETNEXTSUBID(int1), int8, (int6 + int7), 0, 0, 145, int5, 0, 0, 2100 as dbrow, "HC:IM: Not yet achieved");
                    CC_SETMAXLINES(1);
                };
            };
        };
        int6 = (int6 + int4);
        int9 = (int9 + 1);
    };
    IF_SETSCROLLSIZE(0, int6, int1);
    script7791(int2, int1);
    return;
}