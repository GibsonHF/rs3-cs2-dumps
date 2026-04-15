//
function script20060(int0: struct): [int, int] {
    var int1 = (script20058(int0) - DATE_MINUTES());
    var int2 = MAX((int1 / 60), 0);
    int1 = MAX(MODULO(int1, 60), 0);
    return [int2, int1];
}