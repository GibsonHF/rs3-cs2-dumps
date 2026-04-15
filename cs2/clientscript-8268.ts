//
function script8268(int0: int, int1: unknown_int): void {
    var int2 = script10405(int0);
    var int3 = comp(-1, 65535);
    if ((int2 != -1 as struct)) {
        if ((int1 == 0)) {
            int3 = struct_getparam(int2, 3506);
        } else {
            int3 = struct_getparam(int2, 3517);
        };
        if ((int3 != comp(-1, 65535))) {
            IF_SETONRESIZE(callback(script8269, int0, int1, -2147483645), int3);
            IF_CALLONRESIZE(int3);
        };
    };
    return;
}