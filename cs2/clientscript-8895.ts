//
function script8895(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    if ((int0 == -1)) {
        var int0 = IF_GETPARENTLAYER(int1);
    };
    IF_SETONRESIZE(callback(script1024, int1, int2, int3, int4, int5), int0);
    IF_CALLONRESIZE(int0);
    return;
}