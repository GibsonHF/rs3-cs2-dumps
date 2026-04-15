//
function script18007(int0: dbrow, int1: struct): void {
    if ((int1 == -1 as struct)) {
        return;
    };
    var int2 = dbrow_getfield(int0, 708672, 0);
    var int3 = dbrow_getfield(int0, 708640, 0);
    var int4 = dbrow_getfield(int0, 708736, 0);
    var int5 = dbrow_getfield(int0, 708608, 0);
    var int6 = dbrow_getfield(int0, 708656, 0);
    var int7 = dbrow_getfield(int0, 708752, 0);
    var int8 = dbrow_getfield(int0, 708624, 0);
    IF_SETHIDE(true, int7);
    IF_SETHIDE(true, int8);
    IF_SETHIDE(true, int4);
    IF_SETHIDE(false, int6);
    var int9 = -1 as npc;
    var int10 = -1 as bas;
    var int11 = -1;
    var int12 = 5;
    script17927();
    var int13 = struct_getparam(int1, 9254);
    switch (struct_getparam(int1, 2531)) {
        case 2: {
            if ((int13 == -1 as dbrow)) {
                int13 = 8257 as dbrow;
            };
            script17960(int1, -1 as obj, -1 as cs2enum, int2, int3, int4, int5, int6, int13);
            break;
        }
        case 5: {
            if ((int13 == -1 as dbrow)) {
                int13 = 8261 as dbrow;
            };
            int9 = script17962(int1);
            if ((int9 == -1 as npc)) {
                script12478("Unable to find a pet npc.");
                return;
            };
            int10 = script17961(int9, int1);
            if ((int10 == -1 as bas)) {
                script12478("Unable to find a pet bas for pet.");
                return;
            };
            script17958(int1, int9, int10, int2, int3, int7, int5, int6, int12, int13);
            break;
        }
        case 4: {
            if ((int13 == -1 as dbrow)) {
                switch (struct_getparam(int1, 2532)) {
                    case 4: {
                        int13 = 8260 as dbrow;
                        break;
                    }
                    default: {
                        int13 = 8258 as dbrow;
                        break;
                    }
                };
            };
            script17956(int1, int2, int3, int8, int5, int6, int12, int13);
            break;
        }
        default: {
            script12478(`This has been called without a valid mtxmgt category, we recieved ${inttostring(struct_getparam(int1, 2531), 10)}`);
            break;
        }
    };
    return;
}