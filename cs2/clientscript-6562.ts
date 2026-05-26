//
function script6562(int0: number): number {
    if ((int0 == -1)) {
        return 0;
    };
    var int1 = script6561(int0);
    if ((int1 <= 0)) {
        return 0;
    };
    var int2 = item_getparam(int0, 4668);
    if ((int2 > 0)) {
        return (int1 / int2);
    };
    return 0;
}