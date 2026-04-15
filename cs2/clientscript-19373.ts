//
function script19373(int0: int): int {
    var int1 = script12477();
    var int2 = (DATE_MINUTES() - int0);
    if ((int2 <= 0)) {
        return int1;
    };
    var int3 = (int2 / 1440);
    if ((MODULO(int2, 1440) > MODULO(int1, 1440))) {
        int3 = (int3 + 1);
    };
    return (int1 - int3);
}