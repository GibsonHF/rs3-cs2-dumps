//
function script10007(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    if (((int0 == comp(-1, 65535)) || (int4 == -1))) {
        return;
    };
    IF_SETONVARTRANSMIT(callback(script10007, -2147483645, int1, int2, int3, int4, 3814, 1), int0);
    var int4 = script9952(int4);
    var int5 = struct_getparam(int4, 4408);
    var int6 = struct_getparam(int4, 4409);
    var int7 = struct_getparam(int4, 4410);
    if ((int1 != comp(-1, 65535))) {
        IF_SETGRAPHIC(int5, int1);
        IF_SETGRAPHIC(struct_getparam(int4, 4411), int1);
    };
    if ((int2 != comp(-1, 65535))) {
        IF_SETGRAPHIC(int6, int2);
        IF_SETGRAPHIC(struct_getparam(int4, 4411), int2);
    };
    if ((int3 != comp(-1, 65535))) {
        IF_SETGRAPHIC(int7, int3);
        IF_SETGRAPHIC(struct_getparam(int4, 4411), int3);
        if ((struct_getparam(int4, 4411) == true)) {
            IF_SETPOSITION(-6, -1, 2, 2, int3);
        } else {
            IF_SETPOSITION(-6, -1, 0, 2, int3);
        };
    };
    return;
}