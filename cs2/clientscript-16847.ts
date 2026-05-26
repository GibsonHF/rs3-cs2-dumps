//
function script16847(int0: number): number {
    if ((script12477() < int0)) {
        return 1;
    };
    if (((int0 == script12477()) && (MODULO(DATE_MINUTES(), 1440) < 720))) {
        return 1;
    };
    return 0;
}