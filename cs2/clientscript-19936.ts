//
function script19936(int0: int, int1: int): string {
    var string0 = "";
    var int2 = 0;
    var string1 = "null";
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var string2 = "";
    [int4, int5, int6] = DATE_RUNEDAY_TODATE(int0);
    switch (int4) {
        case 1:
        case 21:
        case 31: {
            string2 = "st";
            break;
        }
        case 2:
        case 22: {
            string2 = "nd";
            break;
        }
        case 3:
        case 23: {
            string2 = "rd";
            break;
        }
        default: {
            string2 = "th";
            break;
        }
    };
    string0 = `${script19929(int0)}, ${inttostring(int4, 10)}${string2} of ${enum_getvalue(0, 36, 10037 as cs2enum, int5)}`;
    if ((int1 > 0)) {
        int3 = (int1 / 60);
        int2 = MODULO(int1, 60);
        if ((int2 == 0)) {
            string1 = "00";
        } else {
            string1 = inttostring(int2, 10);
        };
        string0 = `${string0} at ${inttostring(int3, 10)}:${string1} game time`;
    };
    return string0;
}