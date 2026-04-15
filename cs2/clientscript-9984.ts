//
function script9984(int0: struct, int1: int): struct {
    if ((int0 == -1 as struct)) {
        return -1 as struct;
    };
    var int0 = script9952(int0);
    var int2 = script9926(int0, int1);
    if (((int2 == -1 as struct) && ((struct_getparam(int0, 3808) > 0) || (struct_getparam(int0, 3807) > 0)))) {
        int2 = int0;
    };
    return int2;
}