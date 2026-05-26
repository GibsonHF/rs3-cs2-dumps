//
function script20529(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = struct_getparam(int0, 3503);
    if ((int4 != comp(-1, 65535))) {
        IF_SETONRESIZE(callback(script20530, int0, int1, int2, int4, int3), int4);
        IF_CALLONRESIZE(int4);
    };
    return;
}