//
function script3117(int0: int, int1: int, int2: int, int3: int, int4: int, string0: string, string1: string): [graphic, string, string, int, graphic, int, graphic, string, string] {
    var int5 = -1 as graphic;
    var int6 = 0;
    var int7 = 0;
    var int8 = -1 as graphic;
    var int9 = -1 as graphic;
    var string2 = "";
    var string3 = "";
    if ((STRING_LENGTH(string0) <= 1)) {
        var string0 = "-";
    } else {
        switch (MAP_LANG()) {
            case 0: {
                int8 = enum_getvalue(0, 23, 1810 as cs2enum, int4);
                break;
            }
            case 1: {
                int8 = enum_getvalue(0, 23, 1810 as cs2enum, 56);
                break;
            }
            case 2: {
                int8 = enum_getvalue(0, 23, 1810 as cs2enum, 74);
                break;
            }
            case 3: {
                int8 = enum_getvalue(0, 23, 1810 as cs2enum, 31);
                break;
            }
            case 6: {
                int8 = enum_getvalue(0, 23, 1810 as cs2enum, 67);
                break;
            }
            default: {
                int8 = enum_getvalue(0, 23, 1810 as cs2enum, int4);
                break;
            }
        };
    };
    switch (MAP_LANG()) {
        case 1: {
            var string1 = "German";
            break;
        }
        case 2: {
            string1 = "French";
            break;
        }
        case 3: {
            string1 = "Portuguese";
            break;
        }
        case 6: {
            string1 = "Spanish (Latin American)";
            break;
        }
    };
    if ((TESTBIT(int1, 0) == 0)) {
        int7 = 16777215;
        string2 = "Free";
    } else {
        int7 = 15777401;
        string2 = "Members";
    };
    if ((TESTBIT(int1, 3) == 1)) {
        int9 = 12761 as graphic;
    } else {
        int9 = 12760 as graphic;
    };
    if ((int0 == script20335(1))) {
        int6 = script10495(9);
        int5 = 23793 as graphic;
    } else if ((int0 == script20335(2))) {
        int6 = script10495(12);
        int5 = 23793 as graphic;
    } else if ((int0 == script20335(3))) {
        int6 = script10495(9);
        int5 = 23793 as graphic;
    } else {
        if ((MODULO(int2, 2) == 0)) {
            int6 = script10495(9);
        } else {
            int6 = script10495(12);
        };
        int5 = 23795 as graphic;
    };
    if ((varbitplayer_58378 == 1)) {
        if ((int5 == 23793 as graphic)) {
            int5 = 35260 as graphic;
        } else {
            int5 = 35261 as graphic;
        };
    } else if ((script13749() == true)) {
        if ((int5 == 23793 as graphic)) {
            int5 = 12764 as graphic;
        } else {
            int5 = 12765 as graphic;
        };
    };
    if ((int3 >= 1980)) {
        string3 = "FULL";
    } else if ((int3 >= 0)) {
        string3 = inttostring(int3, 10);
    } else {
        string3 = "OFFLINE";
    };
    return [int8, string1, string0, int7, int9, int6, int5, string2, string3];
}