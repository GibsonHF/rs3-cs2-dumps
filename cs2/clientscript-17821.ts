//
function script17821(int0: unknown_int): void {
    var int1 = script10061();
    var int2 = -1 as dbrow;
    var int3 = 2;
    var int4 = -1 as obj;
    var int5 = 0;
    var int6 = false;
    var int7 = 0;
    var int8 = -1;
    var int9 = comp(-1, 65535);
    var int10 = -1;
    var int11 = -1 as obj;
    IF_SETHIDE(true, comp(1023, 92));
    IF_SETHIDE(true, comp(1023, 90));
    IF_SETHIDE(true, comp(1023, 88));
    IF_SETHIDE(true, comp(1023, 87));
    IF_SETHIDE(true, comp(1023, 89));
    IF_SETHIDE(true, comp(1023, 91));
    IF_SETHIDE(true, comp(1023, 93));
    while ((++int10 < DB_GETFIELDCOUNT(int1, 1392720))) {
        [int4, int5, int8, int6] = dbrow_getfield(int1, 1392720, int10);
        int11 = int4;
        if ((int4 != -1 as obj)) {
            switch (int5) {
                case 1: {
                    int9 = comp(1023, 87);
                    if ((varplayer_11329 != -1 as obj)) {
                        int11 = varplayer_11329;
                        int2 = script20351(script20349());
                        if ((script15109() == 1)) {
                            int3 = 3;
                        };
                    };
                    break;
                }
                case 2: {
                    int9 = comp(1023, 89);
                    if ((varplayer_11700 != -1 as obj)) {
                        int11 = varplayer_11700;
                        int2 = script20351(int4);
                        int3 = 3;
                    };
                    break;
                }
                case 3: {
                    int9 = comp(1023, 91);
                    break;
                }
                case 4: {
                    int9 = comp(1023, 93);
                    break;
                }
            };
            if ((int8 == 0)) {
                int8 = -1;
            };
            IF_SETOBJECT(int11, int8, int9);
            if ((int9 != comp(-1, 65535))) {
                IF_SETHIDE(false, int9);
            };
            if (((int6 == true) && (int2 != -1 as dbrow))) {
                IF_SETOP(1, "Select", int9);
                IF_SETOPCURSOR(1, 46 as cursor, int9);
                IF_SETONOP(callback(script17822, int11, int9, int2, int3), int9);
                IF_SETHIDE(0, int9);
            };
        };
    };
    script12679(int0);
    if (((int10 - 1) > 3)) {
        IF_SETHIDE(false, comp(1023, 92));
        IF_SETHIDE(false, comp(1023, 90));
        IF_SETHIDE(false, comp(1023, 88));
    };
    if (((int10 - 1) == 2)) {
        IF_SETHIDE(false, comp(1023, 90));
        IF_SETHIDE(false, comp(1023, 88));
    };
    if (((int10 - 1) == 1)) {
        IF_SETHIDE(false, comp(1023, 88));
    };
    switch (int10) {
        case 1: {
            IF_SETPOSITION(115, 287, 1, 0, comp(1023, 24));
            break;
        }
        case 2: {
            IF_SETPOSITION(60, 287, 1, 0, comp(1023, 24));
            break;
        }
        case 3: {
            IF_SETPOSITION(40, 287, 1, 0, comp(1023, 24));
            break;
        }
    };
    return;
}