//
function script11467(int0: obj, int1: int, int2: unknown_int, long0: long): [long, unknown_int, long] {
    if (((int0 == -1 as obj) || branch_lteq_long[7](long0, 0n))) {
        return [0n, 0, 0n];
    };
    var int1 = MAX(1, int1);
    var int3 = 0;
    var long1 = 0n;
    switch (int2) {
        case 1:
        case 5: {
            var long0 = MAX_LONG(1n, script17377(long0, INT_TO_LONG(int1)));
            break;
        }
        case 2: {
            long0 = script17377(long0, INT_TO_LONG(int1));
            long0 = MAX_LONG(1n, script11469(long0, 0));
            if (((varbitplayer_22913 == 1) && (script11470(int0) > 0))) {
                int3 = 1;
                long1 = DIVIDE_LONG(long0, 2n);
            };
            break;
        }
        case 6: {
            long0 = MAX_LONG(1n, script11469(long0, 1));
            break;
        }
        case 7: {
            long0 = script17377(long0, INT_TO_LONG(int1));
            long0 = MAX_LONG(1n, script11469(long0, 1));
            break;
        }
    };
    return [long0, int3, long1];
}