//
function script8477(int0: int, int1: inv): unknown_int {
    switch (int0) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 7:
        case 9:
        case 10:
        case 12:
        case 13:
        case 17:
        case 18: {
            return 1;
        }
        case 14: {
            if ((((int1 == 94 as inv) || (int1 == -1 as inv)) || (enum_hasoutput(39, 8096 as cs2enum, int1) == 1))) {
                return 0;
            };
            return 1;
        }
    };
    return 0;
}