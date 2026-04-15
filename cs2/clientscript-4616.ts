//
function script4616(int0: int, int1: int): unknown_int {
    var int2 = 0;
    int2 = script4617(int0, int1);
    if ((int2 == DATE_MINUTES())) {
        return 0;
    };
    if ((int2 > DATE_MINUTES())) {
        return 1;
    };
    return -1;
}