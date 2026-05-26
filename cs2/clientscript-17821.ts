//
function script17821(int0: number): void {
    var int1 = script10061();
    var int2 = -1;
    var int3 = 2;
    var int4 = -1 as obj;
    var int5 = 0;
    var int6 = false;
    var int7 = 0;
    var int8 = -1;
    var int9 = -1;
    var int10 = -1;
    var int11 = -1 as obj;
    IF_SETHIDE(1, 67043420);
    IF_SETHIDE(1, 67043418);
    IF_SETHIDE(1, 67043416);
    IF_SETHIDE(1, 67043415);
    IF_SETHIDE(1, 67043417);
    IF_SETHIDE(1, 67043419);
    IF_SETHIDE(1, 67043421);
    while ((++int10 < DB_GETFIELDCOUNT(int1, 1392720))) {
        [int4, int5, int8, int6] = dbrow_getfield(int1, 1392720, int10);
        int11 = int4;
        if ((int4 != -1 as obj)) {
            switch (int5) {
                case 1: {
                    int9 = 67043415;
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
                    int9 = 67043417;
                    if ((varplayer_11700 != -1 as obj)) {
                        int11 = varplayer_11700;
                        int2 = script20351(int4);
                        int3 = 3;
                    };
                    break;
                }
                case 3: {
                    int9 = 67043419;
                    break;
                }
                case 4: {
                    int9 = 67043421;
                    break;
                }
            };
            if ((int8 == 0)) {
                int8 = -1;
            };
            IF_SETOBJECT(int11, int8, int9);
            if ((int9 != -1)) {
                IF_SETHIDE(0, int9);
            };
            if (((int6 == true) && (int2 != -1))) {
                IF_SETOP(1, "Select", int9);
                IF_SETOPCURSOR(1, 46, int9);
                IF_SETONOP(callback(script17822, int11, int9, int2, int3), int9);
                IF_SETHIDE(0, int9);
            };
        };
    };
    script12679(int0);
    if (((int10 - 1) > 3)) {
        IF_SETHIDE(0, 67043420);
        IF_SETHIDE(0, 67043418);
        IF_SETHIDE(0, 67043416);
    };
    if (((int10 - 1) == 2)) {
        IF_SETHIDE(0, 67043418);
        IF_SETHIDE(0, 67043416);
    };
    if (((int10 - 1) == 1)) {
        IF_SETHIDE(0, 67043416);
    };
    switch (int10) {
        case 1: {
            IF_SETPOSITION(115, 287, 1, 0, 67043352);
            break;
        }
        case 2: {
            IF_SETPOSITION(60, 287, 1, 0, 67043352);
            break;
        }
        case 3: {
            IF_SETPOSITION(40, 287, 1, 0, 67043352);
            break;
        }
    };
    return;
}