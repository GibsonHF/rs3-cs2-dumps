//
function script13194(int0: component, int1: int, int2: unknown_int): void {
    if ((((int2 == 1) && (KEYHELD_SHIFT() == true)) || (int2 == 5))) {
        if (((CC_FIND(int0, int1) == 1) && (strcmp(CC_GETOP(5), "") != 0))) {
            IF_TRIGGEROP(comp(1843, 184), int1, 5);
        };
    } else if ((((int2 == 1) && (KEYHELD_CTRL() == true)) || (int2 == 2))) {
        if (((CC_FIND(int0, int1) == 1) && (strcmp(CC_GETOP(2), "") != 0))) {
            IF_TRIGGEROP(comp(1843, 184), int1, 2);
        };
    } else if ((int2 == 1)) {
        if ((enum_getreversecount(0, 12198 as cs2enum, int1) > 0)) {
            varbitclient_35135 = int1;
            script13169(comp(-1, 65535), 2);
        };
    } else if ((int2 == 3)) {
        if (((CC_FIND(int0, int1) == 1) && (strcmp(CC_GETOP(3), "") != 0))) {
            IF_TRIGGEROP(comp(1843, 184), int1, 3);
        };
    } else if ((((int2 == 4) && (CC_FIND(int0, int1) == 1)) && (strcmp(CC_GETOP(4), "") != 0))) {
        IF_TRIGGEROP(comp(1843, 184), int1, 4);
    };
    return;
}