//
function script12314(int0: number, int1: number): [number, number] {
    if ((int0 != -2147483648)) {
        var int0 = (int0 * -1);
    } else if ((int1 == -2147483648)) {
        return [2147483647, 2147483647];
    };
    if (((int1 != 0) || (int0 == -2147483648))) {
        var int1 = (1 - int1);
    };
    return [int0, int1];
}