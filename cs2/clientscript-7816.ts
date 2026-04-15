//
function script7816(int0: component, int1: unknown_int): void {
    var int2 = script411(int0);
    var int3 = struct_getparam(int2, 7309);
    var int4 = struct_getparam(int2, 7982);
    if ((int1 == 1)) {
        IF_SETHIDE(false, int4);
        IF_SETSIZE(23, 30, 1, 0, int3);
    } else {
        IF_SETHIDE(true, int4);
        IF_SETSIZE(6, 30, 1, 0, int3);
    };
    return;
}