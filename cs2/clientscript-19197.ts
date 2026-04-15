//
function script19197(int0: struct): void {
    var int1 = -1 as dbrow;
    var int2 = -1 as stat;
    var int3 = -1;
    var int4 = 84410386;
    var int5 = comp(1288, 15);
    var int6 = -1 as graphic;
    var int7 = 0;
    var int8 = 25;
    switch (int0) {
        case 50263: {
            int1 = script19150(int0);
            if ((DB_GETFIELDCOUNT(int1, 1204240) > 0)) {
                int2 = dbrow_getfield(int1, 1204240, 0);
                int3 = enum_getvalue(17, 0, 1482 as cs2enum, int2);
                int6 = enum_getvalue(0, 23, 745 as cs2enum, int3);
                switch (int2) {
                    case 14: {
                        int7 = 3;
                        int8 = 27;
                        break;
                    }
                    case 20: {
                        int7 = 1;
                        int8 = 24;
                        break;
                    }
                    case 25: {
                        int7 = 1;
                        int8 = 26;
                        break;
                    }
                };
            };
            break;
        }
        case 2951: {
            int1 = script19150(int0);
            if ((DB_GETFIELDCOUNT(int1, 1290256) > 0)) {
                int2 = dbrow_getfield(int1, 1290256, 0);
                int3 = enum_getvalue(17, 0, 1482 as cs2enum, int2);
                int6 = enum_getvalue(0, 23, 745 as cs2enum, int3);
                switch (int2) {
                    case 6: {
                        int7 = 1;
                        int8 = 24;
                        break;
                    }
                    case 20: {
                        int7 = 1;
                        int8 = 24;
                        break;
                    }
                    case 5: {
                        int7 = 1;
                        int8 = 24;
                        break;
                    }
                };
            };
            break;
        }
        default: {
            script12478(`Missed plugin point for promo ID ${inttostring(struct_getparam(int0, 8202), 10)}`);
            return;
        }
    };
    if ((int6 != -1 as graphic)) {
        stack(int6);
        stack(int4);
        IF_SETGRAPHIC();
        IF_SETPOSITION(int7, int8, 1, 2, int4);
        IF_SETHIDE(0, int5);
    } else {
        IF_SETHIDE(true, int5);
    };
    return;
}