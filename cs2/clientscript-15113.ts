//
function script15113(): int {
    var int0 = DATE_RUNEDAY();
    var int1 = script12477();
    if (((int0 == int1) || (int0 == (int1 + 1)))) {
        return int0;
    };
    return MIN(int1, int0);
}