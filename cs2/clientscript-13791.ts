//
function script13791(): int {
    var int0 = MODULO(DATE_MINUTES(), 1440);
    int0 = (int0 / 60);
    return int0;
}