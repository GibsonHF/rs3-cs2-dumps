//
function script17374(int0: int): int {
    if ((int0 >= 10000000)) {
        if ((int0 >= 1000000000)) {
            return 9;
        };
        if ((int0 >= 100000000)) {
            return 8;
        };
        return 7;
    };
    if ((int0 >= 10000)) {
        if ((int0 >= 1000000)) {
            return 6;
        };
        if ((int0 >= 100000)) {
            return 5;
        };
        return 4;
    };
    if ((int0 >= 1000)) {
        return 3;
    };
    if ((int0 >= 100)) {
        return 2;
    };
    if ((int0 >= 10)) {
        return 1;
    };
    return 0;
}