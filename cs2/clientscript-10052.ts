//
function script10052(int0: unknown_int, int1: int): unknown_int {
    if ((script11283(int0) == 0)) {
        return 0;
    };
    switch (int0) {
        case 1: {
            return 50000;
        }
        case 2:
        case 3: {
            if ((script11282(int1) >= 100)) {
                return 50000;
            };
            return 100000;
        }
    };
    return 100000;
}