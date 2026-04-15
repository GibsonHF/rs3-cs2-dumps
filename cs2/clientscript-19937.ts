//
function script19937(int0: int): string {
    var string0 = "";
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var string1 = "";
    [int1, int2, int3] = DATE_RUNEDAY_TODATE(int0);
    switch (int1) {
        case 1:
        case 21:
        case 31: {
            string1 = "st";
            break;
        }
        case 2:
        case 22: {
            string1 = "nd";
            break;
        }
        case 3:
        case 23: {
            string1 = "rd";
            break;
        }
        default: {
            string1 = "th";
            break;
        }
    };
    string0 = `${inttostring(int1, 10)}${string1} ${enum_getvalue(0, 36, 10037 as cs2enum, int2)}`;
    return string0;
}