//
function script9809(int0: unknown_int, int1: unknown_int, int2: component, int3: component): void {
    if ((int3 == comp(-1, 65535))) {
        var int3 = IF_GETPARENTLAYER(int2);
    };
    script9808(int2);
    IF_SETONRESIZE(callback(script9810, int0, int1, int2, int3), int3);
    IF_CALLONRESIZE(int3);
    return;
}