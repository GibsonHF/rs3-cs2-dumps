//
function script13069(int0: struct, int1: int): void {
    var int2 = struct_getparam(int0, 6302);
    var int3 = script13070(int1);
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    [int4, int5] = script13071(int1);
    var int6 = (32768 / (int2 / 2));
    IF_SET2DANGLE(MAX(0, (32768 - (MIN((int2 / 2), (int2 - int3)) * int6))), int5);
    if ((int3 < (int2 / 2))) {
        IF_SET2DANGLE(MAX(0, (32768 - (((int2 / 2) - int3) * int6))), int4);
    } else {
        IF_SET2DANGLE(32768, int4);
    };
    return;
}