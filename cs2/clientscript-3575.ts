//
function script3575(int0: unknown_int): [int, int, int] {
    var int1 = 0;
    switch (int0) {
        case 2360: {
            break;
        }
        case 2361: {
            int1 = (2 - MODULO(DATE_RUNEDAY(), 3));
            break;
        }
        case 2362: {
            int1 = (6 - MODULO(DATE_RUNEDAY(), 7));
            break;
        }
    };
    var int2 = (60 - MODULO(DATE_MINUTES(), 60));
    if ((int2 == 60)) {
        int2 = 0;
    };
    var int3 = script13791();
    var int4 = 0;
    if ((int3 > 0)) {
        int4 = (23 - int3);
    } else if ((int2 > 0)) {
        int4 = (23 - int3);
    } else if ((int1 > 0)) {
        int1 = (int1 + 1);
        int4 = 0;
    } else {
        int4 = 24;
    };
    return [int1, int4, int2];
}