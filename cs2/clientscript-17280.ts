//
function script17280(int0: struct): int {
    var int1 = struct_getparam(int0, 8163);
    var int2 = struct_getparam(int0, 8774);
    return (int1 + SCALE((script859() / 10), 100, int2));
}