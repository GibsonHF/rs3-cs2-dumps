//
function script10014(int0: struct, int1: struct, int2: struct): void {
    if (((int0 == -1 as struct) || (int1 == -1 as struct))) {
        return;
    };
    var int3 = true;
    script7994(struct_getparam(int0, 4037), struct_getparam(int1, 4398), int2);
    script7994(struct_getparam(int0, 4038), struct_getparam(int1, 4399), int2);
    script7994(struct_getparam(int0, 4039), struct_getparam(int1, 4400), int2);
    var int4 = struct_getparam(int0, 4040);
    if ((int4 != comp(-1, 65535))) {
        int3 = IF_GETHIDE(int4);
        script7994(int4, struct_getparam(int1, 4401), int2);
        IF_SETHIDE(int3, int4);
    };
    script4408(struct_getparam(int0, 6310));
    var int5 = struct_getparam(int0, 6225);
    if ((int5 != comp(-1, 65535))) {
        int3 = IF_GETHIDE(int5);
        script7994(int5, struct_getparam(int1, 4402), int2);
        IF_SETHIDE(int3, int5);
    };
    script5837(struct_getparam(int0, 6311), struct_getparam(int1, 4403), int2);
    return;
}