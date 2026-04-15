//
function script13046(int0: unknown_int, int1: unknown_int): void {
    if ((int1 != 1)) {
        return;
    };
    var string0 = "";
    var string1 = "";
    var int2 = false;
    var int3 = -1 as graphic;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    switch (int0) {
        case 119603208: {
            int4 = 1;
            break;
        }
        case 119603215: {
            int4 = 2;
            break;
        }
        case 119603222: {
            int4 = 3;
            break;
        }
        default: {
            IF_CLOSE();
            return;
        }
    };
    [int5, int2, string1, int6] = script477(int4);
    if ((int5 == 0)) {
        printmessage("There is nothing stored in this slot.");
        return;
    };
    if (((enum_getvalue(0, 1, 12137 as cs2enum, int5) == true) || ((int6 == 1) && (enum_getvalue(0, 1, 15778 as cs2enum, int5) == true)))) {
        int2 = true;
    };
    string1 = enum_getvalue(0, 36, 108 as cs2enum, int5);
    if ((int6 == 1)) {
        string1 = `${string1} master`;
    };
    int3 = enum_getvalue(0, 23, 8548 as cs2enum, int5);
    IF_SETHIDE(false, comp(1825, 29));
    IF_SETTEXT(`What would you like to do with the ${string1} perk?`, comp(1825, 36));
    stack(int3);
    stack(119603235);
    IF_SETGRAPHIC();
    IF_SETHIDE(int2, 119603244);
    return;
}