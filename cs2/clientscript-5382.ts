//
function script5382(int0: struct): int {
    var int1 = struct_getparam(int0, 7674);
    var int2 = struct_getparam(int0, 7675);
    return ((int1 * 10) + SCALE((script859() / 10), 100, int2));
}