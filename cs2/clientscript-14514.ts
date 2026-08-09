//
function script14514(int0: number): number {
    if ((int0 == -1 as dbrow)) {
        return 0;
    };
    var int1 = DB_GETFIELDCOUNT(int0, 340080);
    var int2 = -1;
    var int3 = -1;
    switch (int0) {
        case 2634: {
            int3 = (int3 + 1);
            while ((int3 < int1)) {
                int2 = dbrow_getfield(int0, 340080, int3);
                if (((int2 != 2767) && (script14502(int2) != 2))) {
                    return 0;
                };
            };
            break;
        }
        default: {
            int3 = (int3 + 1);
            while ((int3 < int1)) {
                if ((script14502(dbrow_getfield(int0, 340080, int3)) != 2)) {
                    return 0;
                };
            };
            break;
        }
    };
    return 1;
}