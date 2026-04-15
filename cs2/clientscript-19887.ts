//
function script19887(int0: int, int1: int): unknown_int {
    if ((script12477() < int0)) {
        return 1;
    };
    if (((int0 == script12477()) && (MODULO(DATE_MINUTES(), 1440) < int1))) {
        return 1;
    };
    return 0;
}