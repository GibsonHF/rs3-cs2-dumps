//
function script13194(int0: number, int1: number, int2: number): void {
    if ((((int2 == 1) && (KEYHELD_SHIFT() == 1)) || (int2 == 5))) {
        if (((CC_FIND(int0, int1) == 1) && (strcmp(CC_GETOP(5), "") != 0))) {
            IF_TRIGGEROP(120783032, int1, 5);
        };
    } else if ((((int2 == 1) && (KEYHELD_CTRL() == 1)) || (int2 == 2))) {
        if (((CC_FIND(int0, int1) == 1) && (strcmp(CC_GETOP(2), "") != 0))) {
            IF_TRIGGEROP(120783032, int1, 2);
        };
    } else if ((int2 == 1)) {
        if ((enum_getreversecount(0, 12198, int1) > 0)) {
            varbitclient_35135 = int1;
            script13169(-1, 2);
        };
    } else if ((int2 == 3)) {
        if (((CC_FIND(int0, int1) == 1) && (strcmp(CC_GETOP(3), "") != 0))) {
            IF_TRIGGEROP(120783032, int1, 3);
        };
    } else if ((((int2 == 4) && (CC_FIND(int0, int1) == 1)) && (strcmp(CC_GETOP(4), "") != 0))) {
        IF_TRIGGEROP(120783032, int1, 4);
    };
    return;
}