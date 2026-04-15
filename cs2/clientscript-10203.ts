//
function script10203(int0: cs2enum): [int, int] {
    var int1 = 0;
    var int2 = ENUM_GETOUTPUTCOUNT(int0);
    var int3 = 0;
    while ((int1 < int2)) {
        if ((script11309(struct_getparam(enum_getvalue(0, 73, int0, int1), 5030)) == 1)) {
            int3 = (int3 + 1);
        };
        int1 = (int1 + 1);
    };
    return [int3, int2];
}