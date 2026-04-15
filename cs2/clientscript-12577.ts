//
function script12577(int0: int, int1: int, int2: int): int {
    var int1 = (int1 - 1);
    var int0 = (int0 - ((int1 / 5) - (int1 / 30)));
    int0 = MIN(int0, (150 - int2));
    return MAX(int0, 0);
}