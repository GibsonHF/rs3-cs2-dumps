//
function script13432(int0: int): int {
    var int1 = script13433(int0);
    var int2 = script13431(int0);
    var int3 = struct_getparam(int1, 6583);
    var int4 = ENUM_GETOUTPUTCOUNT(int3);
    var int5 = 0;
    while ((int5 < int4)) {
        if ((int2 < enum_getvalue(0, 0, int3, int5))) {
            return (int5 - 1);
        };
        int5 = (int5 + 1);
    };
    return (int4 - 1);
}