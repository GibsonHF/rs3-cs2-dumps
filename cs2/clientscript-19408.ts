//
function script19408(int0: component, int1: int, int2: int, int3: int, int4: int): int {
    var int5 = 0;
    var string0 = "- Vacant -";
    var int6 = 0;
    var int7 = -1;
    var int8 = 0;
    var int9 = 0;
    var int10 = 9342606;
    var int11 = 0;
    var int12 = -1 as graphic;
    var string1 = "";
    var int13 = -1 as graphic;
    var string2 = "";
    var string3 = "-";
    var int14 = 34563 as graphic;
    var string4 = "Vacant slot";
    var int15 = 4367 as dbrow;
    var int16 = -1;
    var int17 = 8192;
    var int18 = 2;
    if ((int1 < int3)) {
        string0 = ACTIVECLANSETTINGS_GETAFFINEDDISPLAYNAME(int1);
        int6 = ACTIVECLANSETTINGS_GETAFFINEDRANK(int1);
        int7 = script19391(string0);
        [int8, string3, int10, string2, int13] = script19392(int1, string0, int7);
        [int14, string4] = script19389(int1, int3);
        int16 = script19413(int1);
        if ((int8 > 0)) {
            int9 = (int8 + 4);
            int17 = 12;
            int18 = 0;
        };
        if ((script19460(int4, int1, int16) != -1)) {
            int15 = 14485 as dbrow;
            int12 = 10998 as graphic;
            string1 = `A vote is active for ${string0}. Go to the the group overview to cast or cancel a vote.`;
            int11 = 20;
        } else if ((ACTIVECLANSETTINGS_GETCURRENTOWNER_SLOT() == int1)) {
            int12 = 34559 as graphic;
            string1 = "Group Leader";
            int11 = 20;
        };
    };
    script15938(int0, int1, int5++, 0, int2, 0, 0, 0, 36, 1, 0);
    script19409(int1, int4, int7, string0, 0);
    script16109(int1, int5++, 0, 0, 0, 0, 0, 0, 1, 1, int1, 0);
    script12591(8, 50665 as struct);
    script10033(int1, int5++, 0, 0, 0, 0, 0, 0, 1, 1, int15);
    script12591(8, 50665 as struct);
    script15937(int1, int5++, 0, 0, 1, 1, (4 * 2), (4 * 2), 1, 1);
    script7918(int1, int5++, 0, 0, 0, 1, 20, 20, 0, 0, int14);
    script3537(string4);
    CC_GETDYNAMICLAYER();
    script15937(int1, int5++, 0, 0, 2, 1, 22, 0, 1, 1);
    script10485(int1, int5++, 0, 0, 0, 0, int11, 8192, 1, 2, 2100 as dbrow, string0);
    CC_SETMAXLINES(1);
    script7918(int1, int5++, 0, 0, 0, 2, int8, 12, 0, 0, int13);
    script3537(string2);
    script10485(int1, int5++, 0, 0, 2, 2, int9, int17, 1, int18, 2100 as dbrow, string3);
    CC_SETCOLOUR(int10);
    CC_SETMAXLINES(1);
    script3537(string2);
    script7918(int1, int5++, 0, 0, 2, 1, int11, int11, 0, 0, int12);
    script3537(string1);
    return ((int2 + 36) + 4);
}