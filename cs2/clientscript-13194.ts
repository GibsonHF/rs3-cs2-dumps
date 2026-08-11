//
function script13194(int0: number, int1: number, int2: number): void {
    if ((int2 == 1)) {
        if (((KEYHELD_SHIFT() == true) || (int2 == 5))) {
            if (((CC_FIND(int0, int1) == 1) && (strcmp(CC_GETOP(5), "") != 0))) {
                IF_TRIGGEROP(comp(1843, 184), int1, 5);  // mtxmgt_store:command_layer
            };
        } else if ((int2 == 1)) {
            if (((KEYHELD_CTRL() == true) || (int2 == 2))) {
                if (((CC_FIND(int0, int1) == 1) && (strcmp(CC_GETOP(2), "") != 0))) {
                    IF_TRIGGEROP(comp(1843, 184), int1, 2);  // mtxmgt_store:command_layer
                };
            } else if ((int2 == 1)) {
                if ((enum_getreversecount(0, 12198 as cs2enum, int1) > 0)) {
                    varbitclient_35135 = int1;
                    script13169(-1, 2);
                };
            } else if ((int2 == 3)) {
                if (((CC_FIND(int0, int1) == 1) && (strcmp(CC_GETOP(3), "") != 0))) {
                    IF_TRIGGEROP(comp(1843, 184), int1, 3);  // mtxmgt_store:command_layer
                };
            } else if ((((int2 == 4) && (CC_FIND(int0, int1) == 1)) && (strcmp(CC_GETOP(4), "") != 0))) {
                IF_TRIGGEROP(comp(1843, 184), int1, 4);  // mtxmgt_store:command_layer
            };
        } else if ((int2 == 2)) {
            if (((CC_FIND(int0, int1) == 1) && (strcmp(CC_GETOP(2), "") != 0))) {
                IF_TRIGGEROP(comp(1843, 184), int1, 2);  // mtxmgt_store:command_layer
            };
        } else if ((int2 == 1)) {
            if ((enum_getreversecount(0, 12198 as cs2enum, int1) > 0)) {
                varbitclient_35135 = int1;
                script13169(-1, 2);
            };
        } else if ((int2 == 3)) {
            if (((CC_FIND(int0, int1) == 1) && (strcmp(CC_GETOP(3), "") != 0))) {
                IF_TRIGGEROP(comp(1843, 184), int1, 3);  // mtxmgt_store:command_layer
            };
        } else if ((((int2 == 4) && (CC_FIND(int0, int1) == 1)) && (strcmp(CC_GETOP(4), "") != 0))) {
            IF_TRIGGEROP(comp(1843, 184), int1, 4);  // mtxmgt_store:command_layer
        };
    } else if ((int2 == 5)) {
        if (((CC_FIND(int0, int1) == 1) && (strcmp(CC_GETOP(5), "") != 0))) {
            IF_TRIGGEROP(comp(1843, 184), int1, 5);  // mtxmgt_store:command_layer
        };
    } else if ((int2 == 1)) {
        if (((KEYHELD_CTRL() == true) || (int2 == 2))) {
            if (((CC_FIND(int0, int1) == 1) && (strcmp(CC_GETOP(2), "") != 0))) {
                IF_TRIGGEROP(comp(1843, 184), int1, 2);  // mtxmgt_store:command_layer
            };
        } else if ((int2 == 1)) {
            if ((enum_getreversecount(0, 12198 as cs2enum, int1) > 0)) {
                varbitclient_35135 = int1;
                script13169(-1, 2);
            };
        } else if ((int2 == 3)) {
            if (((CC_FIND(int0, int1) == 1) && (strcmp(CC_GETOP(3), "") != 0))) {
                IF_TRIGGEROP(comp(1843, 184), int1, 3);  // mtxmgt_store:command_layer
            };
        } else if ((((int2 == 4) && (CC_FIND(int0, int1) == 1)) && (strcmp(CC_GETOP(4), "") != 0))) {
            IF_TRIGGEROP(comp(1843, 184), int1, 4);  // mtxmgt_store:command_layer
        };
    } else if ((int2 == 2)) {
        if (((CC_FIND(int0, int1) == 1) && (strcmp(CC_GETOP(2), "") != 0))) {
            IF_TRIGGEROP(comp(1843, 184), int1, 2);  // mtxmgt_store:command_layer
        };
    } else if ((int2 == 1)) {
        if ((enum_getreversecount(0, 12198 as cs2enum, int1) > 0)) {
            varbitclient_35135 = int1;
            script13169(-1, 2);
        };
    } else if ((int2 == 3)) {
        if (((CC_FIND(int0, int1) == 1) && (strcmp(CC_GETOP(3), "") != 0))) {
            IF_TRIGGEROP(comp(1843, 184), int1, 3);  // mtxmgt_store:command_layer
        };
    } else if ((((int2 == 4) && (CC_FIND(int0, int1) == 1)) && (strcmp(CC_GETOP(4), "") != 0))) {
        IF_TRIGGEROP(comp(1843, 184), int1, 4);  // mtxmgt_store:command_layer
    };
    return;
}