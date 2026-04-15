//
function script11236(int0: int): [int, int] {
    var int1 = script11231(int0);
    if ((int1 == -1 as struct)) {
        return [0, 0];
    };
    var int2 = struct_getparam(int1, 4955);
    var int3 = (int2 / 100);
    var int4 = MODULO(int2, 100);
    int4 = SCALE(100, 60, int4);
    return [int3, int4];
}