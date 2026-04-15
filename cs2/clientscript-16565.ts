//
function script16565(int0: dbrow, int1: component): int {
    if ((int0 == -1 as dbrow)) {
        return 0;
    };
    var int2 = dbrow_getfield(int0, 114768, 0);
    if ((enum_hasoutput(9, 5135 as cs2enum, int1) == 1)) {
        return int2;
    };
    var int3 = dbrow_getfield(int0, 114832, 0);
    if (((script6431() == true) && (int3 != -1))) {
        return int3;
    };
    return int2;
}