//
function script2291(int0: int): int {
    var int1 = -1 as struct;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 36;
    if ((int0 == 5)) {
        int7 = 119;
    };
    int1 = script13433(int0);
    int2 = script13431(int0);
    int3 = script13432(int0);
    if ((int3 == 10)) {
        return script12422(100, 100, 65536);
    };
    int4 = enum_getvalue(0, 0, struct_getparam(int1, 6583), int3);
    int5 = enum_getvalue(0, 0, struct_getparam(int1, 6583), (int3 + 1));
    int6 = (int5 - int4);
    return script12422((int2 - int4), int6, 65536);
}