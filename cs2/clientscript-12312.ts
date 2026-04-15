//
function script12312(int0: int, int1: int, int2: int): [int, int] {
    if ((int2 > 0)) {
        if ((int0 <= (2147483647 - int2))) {
            var int0 = (int0 + int2);
        } else if ((int1 < 2147483647)) {
            var int1 = (int1 + 1);
            int0 = (((-2147483648 + int0) - (2147483647 - int2)) - 1);
        } else {
            int0 = 2147483647;
        };
    } else if ((int2 < 0)) {
        if ((int0 >= (-2147483648 - int2))) {
            int0 = (int0 + int2);
        } else if ((int1 > -2147483648)) {
            int1 = (int1 - 1);
            int0 = (((2147483647 + int0) - (-2147483648 - int2)) + 1);
        } else {
            int0 = -2147483648;
        };
    };
    return [int0, int1];
}