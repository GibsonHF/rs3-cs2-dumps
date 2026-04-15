//
function script10007(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: component, int4: unknown_int): void {
    if (((int0 == -1) || (int4 == -1))) {
        return;
    };
    IF_SETONVARTRANSMIT(callback(script10007, -2147483645, int1, int2, int3, int4, 3814, 1), int0);
    var int4 = script9952(int4);
    var int5 = struct_getparam(int4, 4408);
    var int6 = struct_getparam(int4, 4409);
    var int7 = struct_getparam(int4, 4410);
    if ((int1 != -1)) {
        stack(int5);
        stack(int1);
        IF_SETGRAPHIC();
        stack(int4);
        stack(4411);
        struct_getparam();
        stack(int1);
        IF_SETGRAPHIC();
    };
    if ((int2 != -1)) {
        stack(int6);
        stack(int2);
        IF_SETGRAPHIC();
        stack(int4);
        stack(4411);
        struct_getparam();
        stack(int2);
        IF_SETGRAPHIC();
    };
    if ((int3 != comp(-1, 65535))) {
        stack(int7);
        stack(int3);
        IF_SETGRAPHIC();
        stack(int4);
        stack(4411);
        struct_getparam();
        stack(int3);
        IF_SETGRAPHIC();
        stack(int4);
        stack(4411);
        struct_getparam();
        if ((stack() == 1)) {
            IF_SETPOSITION(-6, -1, 2, 2, int3);
        } else {
            IF_SETPOSITION(-6, -1, 0, 2, int3);
        };
    };
    return;
}