//
function script3611(int0: dbrow, int1: unknown_int): int {
    switch (int0) {
        case -1: {
        }
        default: {
            switch (int1) {
                case 0: {
                    return dbrow_getfield(int0, 303248, 0);
                }
                case 1: {
                    return dbrow_getfield(int0, 303296, 0);
                }
            };
            break;
        }
    };
    return 40;
}