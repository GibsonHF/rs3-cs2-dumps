//
function script8895(int0: component, int1: component, int2: unknown_int, int3: unknown_int, int4: unknown_int, int5: unknown_int): void {
    if ((int0 == comp(-1, 65535))) {
        var int0 = IF_GETPARENTLAYER(int1);
    };
    IF_SETONRESIZE(callback(script1024, int1, int2, int3, int4, int5), int0);
    IF_CALLONRESIZE(int0);
    return;
}