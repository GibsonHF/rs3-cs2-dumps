//
function script16639(int0: struct): int {
    var int1 = struct_getparam(int0, 8196);
    var int2 = struct_getparam(int0, 8204);
    if (((CLIENTOPTION_GET(21) == 0) && (int2 != -1))) {
        int1 = int2;
    };
    return int1;
}