//
function script4187(): [int, int] {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    int0 = 1440;
    int1 = MODULO(DATE_MINUTES(), int0);
    int2 = (int0 - int1);
    int3 = (int2 / 60);
    return [int3, int2];
}