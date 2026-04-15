//
function script1281(int0: inv, int1: int, int2: int, int3: component): void {
    if ((int2 == -1)) {
        script1280(int0, int1, int3, int1);
        return;
    };
    script1280(int0, int1, int3, int2);
    script1280(int0, int2, int3, int1);
    return;
}