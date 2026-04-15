//
function script17848(int0: struct): int {
    var int1 = struct_getparam(int0, 4166);
    if ((int1 == -1)) {
        return -1;
    };
    var int2 = script17846(int0);
    if ((int2 < int1)) {
        return (int1 - int2);
    };
    return 0;
}