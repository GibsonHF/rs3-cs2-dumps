//
function script10996(int0: struct, int1: unknown_int): seq {
    switch (int0) {
        case 40225: {
            return script2735(int1);
        }
        case 30394: {
            return script11013(int1);
        }
        case 32202: {
            return script956(int1);
        }
        case 32466: {
            return script11844(int1);
        }
        case 32476: {
            return script11845(int1);
        }
    };
    if ((struct_getparam(int0, 2535) != -1 as seq)) {
        return struct_getparam(int0, 2535);
    };
    return BAS_GETANIM_READY(1426 as bas);
}