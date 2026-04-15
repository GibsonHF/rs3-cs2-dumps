//
function script3610(int0: dbrow, int1: unknown_int): int {
    switch (int0) {
        case -1: {
        }
        default: {
            switch (int1) {
                case 0: {
                    if ((DB_GETFIELDCOUNT(int0, 303136) > 0)) {
                        return STAT_BASE_ACTUAL(dbrow_getfield(int0, 303136, 0));
                    };
                    break;
                }
                case 1: {
                    if ((DB_GETFIELDCOUNT(int0, 303152) > 0)) {
                        return STAT_BASE_ACTUAL(dbrow_getfield(int0, 303152, 0));
                    };
                    break;
                }
            };
            break;
        }
    };
    return 1;
}