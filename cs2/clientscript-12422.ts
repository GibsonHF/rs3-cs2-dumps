//
function script12422(int0: int, int1: int, int2: int): int {
    if ((int1 == 0)) {
        return SCALE(int0, int1, int2);
    };
    if (((int0 == 0) || (int2 == 0))) {
        return 0;
    };
    if ((int2 == int1)) {
        return int0;
    };
    if ((int0 == int1)) {
        return int2;
    };
    if (((int0 == -2147483648) && (int1 == -1))) {
        var int0 = 2147483647;
        var int1 = 1;
    };
    if ((((script12421(int0) * script12421(int1)) * script12421(int2)) > 0)) {
        if ((int2 > 0)) {
            if (((int0 / int1) >= (2147483647 / int2))) {
                return 2147483647;
            };
        } else if (((int0 / int1) <= (2147483647 / int2))) {
            return 2147483647;
        };
    } else if ((int2 > 0)) {
        if (((-2147483648 / int2) >= (int0 / int1))) {
            return -2147483648;
        };
    } else if ((int2 < -1)) {
        if (((-2147483648 / int2) <= (int0 / int1))) {
            return -2147483648;
        };
    } else if (((2147483647 / 1) <= (int0 / int1))) {
        return -2147483648;
    };
    return SCALE(int0, int1, int2);
}