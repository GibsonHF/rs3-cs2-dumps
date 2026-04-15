//
function script5629(int0: int, int1: int): unknown_int {
    if ((int1 > 0)) {
        if ((int0 <= (2147483647 - int1))) {
            return 0;
        };
        return 1;
    };
    if ((int1 < 0)) {
        if ((int0 >= (-2147483648 - int1))) {
            return 0;
        };
        return 1;
    };
    return 0;
}