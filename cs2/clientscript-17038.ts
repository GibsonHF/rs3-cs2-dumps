//
function script17038(int0: int): int {
    var int1 = -1 as struct;
    var int2 = 1;
    var int3 = 0;
    var int4 = script16317();
    if ((int0 == 1)) {
        int4 = 5;
    };
    while ((int2 <= int4)) {
        int1 = script16319(int2);
        if (((int1 != -1 as struct) && (struct_getparam(int1, 8682) == int0))) {
            int3 = (int3 + 1);
        };
        int2 = (int2 + 1);
    };
    return int3;
}