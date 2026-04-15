//
function script10945(int0: int): unknown_int {
    if ((script5640() < int0)) {
        return 1;
    };
    if (((int0 == script5640()) && (MODULO(DATE_MINUTES(), 1440) < 720))) {
        return 1;
    };
    return 0;
}