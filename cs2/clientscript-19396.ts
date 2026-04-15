//
function script19396(int0: dbrow, int1: component, int2: component): void {
    var int3 = 26;
    var int4 = 5;
    var int5 = 0;
    var int6 = 5;
    var int7 = 0;
    var int8 = -1;
    var string0 = "";
    var string1 = "";
    var int9 = -1;
    var string2 = "";
    var int10 = -1;
    var string3 = "";
    CC_DELETEALL(int1);
    script2996(int1, IF_GETNEXTSUBID(int1), int5, int4, 0, 0, 0, int3, 1, 0, 4368 as dbrow);
    int5 = int6;
    script2995(int1, IF_GETNEXTSUBID(int1), int5, int4, 0, 0, 174, int3, 0, 0, 2196 as dbrow, "Achievement");
    int5 = ((int5 + 174) + int6);
    script2995(int1, IF_GETNEXTSUBID(int1), int5, int4, 0, 0, 145, int3, 0, 0, 2196 as dbrow, "Group Name");
    int5 = ((int5 + 145) + int6);
    script2995(int1, IF_GETNEXTSUBID(int1), int5, int4, 0, 0, 110, int3, 0, 0, 2196 as dbrow, "Date Achieved");
    int4 = (int4 + int3);
    var int11 = DB_GETFIELDCOUNT(int0, 1245184);
    while ((int7 < int11)) {
        int5 = 0;
        stack(dbrow_getfield(int0, 1245184, int7));
        [string0, string1, int9, string2, int10] = stack();
        script16109(0, IF_GETNEXTSUBID(int1), int5, int4, 0, 0, 0, (int3 * 2), 1, 0, int7, 0);
        int5 = int6;
        script2995(int1, IF_GETNEXTSUBID(int1), int5, int4, 0, 0, 174, (int3 * 2), 0, 0, 2100 as dbrow, string0);
        CC_SETMAXLINES(2);
        int5 = ((int5 + 174) + int6);
        script2994(int1, IF_GETNEXTSUBID(int1), int5, (int4 + 7), 0, 0, 13, 11, 0, 0, 34554 as graphic);
        script2995(int1, IF_GETNEXTSUBID(int1), (int5 + 18), int4, 0, 0, (145 - 18), int3, 0, 0, 2100 as dbrow, string2);
        script2994(int1, IF_GETNEXTSUBID(int1), int5, ((int4 + int3) + 7), 0, 0, 13, 11, 0, 0, 34553 as graphic);
        script2995(int1, IF_GETNEXTSUBID(int1), (int5 + 18), (int4 + int3), 0, 0, (145 - 18), int3, 0, 0, 2100 as dbrow, string1);
        int5 = ((int5 + 145) + int6);
        if ((int10 > 0)) {
            string3 = script18408(int10);
        } else {
            string3 = "Not yet achieved";
        };
        script2995(int1, IF_GETNEXTSUBID(int1), int5, int4, 0, 0, 110, int3, 0, 0, 2100 as dbrow, string3);
        if ((int9 > 0)) {
            string3 = script18408(int9);
        } else {
            string3 = "Not yet achieved";
        };
        script2995(int1, IF_GETNEXTSUBID(int1), int5, (int4 + int3), 0, 0, 110, int3, 0, 0, 2100 as dbrow, string3);
        int4 = (int4 + (int3 * 2));
        int7 = (int7 + 1);
    };
    IF_SETSCROLLSIZE(0, int4, int1);
    script7791(int2, int1);
    return;
}