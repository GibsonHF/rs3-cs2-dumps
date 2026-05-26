//
function script11882(int0: number, int1: number): number {
    if ((int1 > 0)) {
        if ((int0 <= (2147483647 - int1))) {
            var int0 = (int0 + int1);
        } else {
            int0 = 2147483647;
        };
    } else if ((int1 < 0)) {
        if ((int0 >= (-2147483648 - int1))) {
            int0 = (int0 + int1);
        } else {
            int0 = -2147483648;
        };
    };
    return int0;
}