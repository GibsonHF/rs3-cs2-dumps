//
function script7687(int0: int, int1: int): int {
    if ((int0 < 2147483647)) {
        if ((int1 > (2147483647 - int0))) {
            return -1;
        };
        return (int0 + int1);
    };
    return -1;
}