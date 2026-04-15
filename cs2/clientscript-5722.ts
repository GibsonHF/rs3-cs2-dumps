//
function script5722(int0: int): [int, int, int, int, string, int, string, string, int, string, int, string, string, string, int, int, string, string, string, string, int, int, string, string, int, int, int] {
    var int1 = enum_getvalue(0, 73, 11807 as cs2enum, int0);
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    var int9 = -1;
    var int10 = -1;
    var string0 = "";
    var int11 = -1;
    var string1 = "";
    var string2 = "";
    var int12 = -1;
    var string3 = "";
    var int13 = -1;
    var string4 = "";
    var string5 = "";
    var string6 = "";
    var int14 = -1;
    var int15 = 0;
    var string7 = "";
    var string8 = "";
    var string9 = "";
    var string10 = "";
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var string11 = "";
    var string12 = "";
    if ((int1 != -1 as struct)) {
        int8 = struct_getparam(int1, 7180);
        int2 = struct_getparam(int1, 5799);
        int3 = struct_getparam(int1, 6045);
        int4 = struct_getparam(int1, 7183);
        int5 = struct_getparam(int1, 7182);
        int6 = struct_getparam(int1, 7184);
        int7 = struct_getparam(int1, 7185);
        int9 = struct_getparam(int1, 6099);
        int10 = struct_getparam(int1, 6100);
        string0 = struct_getparam(int1, 6101);
        int11 = struct_getparam(int1, 6102);
        string1 = struct_getparam(int1, 6103);
        string2 = struct_getparam(int1, 6104);
        int12 = struct_getparam(int1, 6105);
        string3 = struct_getparam(int1, 6106);
        int13 = struct_getparam(int1, 6107);
        string4 = struct_getparam(int1, 6108);
        string5 = struct_getparam(int1, 6109);
        string6 = struct_getparam(int1, 6110);
        int14 = struct_getparam(int1, 6111);
        int15 = struct_getparam(int1, 6112);
        string7 = struct_getparam(int1, 6113);
        string8 = struct_getparam(int1, 6114);
        string9 = struct_getparam(int1, 6115);
        string10 = struct_getparam(int1, 5690);
        switch (MAP_LANG()) {
            case 1: {
                string11 = struct_getparam(int1, 7196);
                string12 = struct_getparam(int1, 7279);
                break;
            }
            case 2: {
                string11 = struct_getparam(int1, 7197);
                string12 = struct_getparam(int1, 7280);
                break;
            }
            case 3: {
                string11 = struct_getparam(int1, 7198);
                string12 = struct_getparam(int1, 7281);
                break;
            }
        };
        if ((STRING_LENGTH(string11) == 0)) {
            string11 = struct_getparam(int1, 7179);
        };
        if (((STRING_LENGTH(string11) > 0) && (struct_getparam(int1, 5799) != 302))) {
            string11 = strconcat(string11, "&utm_source=rs3-cal&utm_medium=in-game-link&utm_term=newspost");
        };
        if ((STRING_LENGTH(string12) == 0)) {
            string12 = struct_getparam(int1, 1368);
        };
        if ((int8 == 7)) {
            string0 = script16345(int1);
            string2 = script16347(int1);
            int9 = 0;
            int6 = script766(int1);
            int7 = script1016(int1);
            if ((int7 == -1)) {
                int9 = struct_getparam(int1, 6099);
            };
        };
    };
    return [int2, int3, int9, int10, string0, int11, string1, string2, int12, string3, int13, string4, string5, string6, int14, int15, string7, string8, string9, string10, int4, int8, string12, string11, int5, int6, int7];
}