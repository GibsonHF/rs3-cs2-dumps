//
function script10433(int0: unknown_int): [fontmetrics, int] {
    var int1 = 26 as fontmetrics;
    var int2 = script9984(28619 as struct, 6);
    if ((int2 == -1 as struct)) {
        return [int1, script10495(3)];
    };
    var int3 = struct_getparam(int2, 3811);
    int1 = struct_getparam(int2, 3810);
    if ((int0 == 1)) {
        int3 = struct_getparam(int2, 4523);
    };
    if ((int3 == -1)) {
        int3 = script10495(3);
    };
    if ((int1 == -1 as fontmetrics)) {
        int1 = 26 as fontmetrics;
    };
    if ((int3 == -1)) {
        int3 = script10495(3);
    };
    return [int1, int3];
}