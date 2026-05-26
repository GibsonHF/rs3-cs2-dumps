//
function script8236(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    if ((int0 == 1)) {
        IF_SETHIDE(0, int1);
        IF_SETHIDE(1, int2);
        IF_SETHIDE(1, int3);
        IF_SETHIDE(0, int4);
    } else {
        IF_SETHIDE(1, int1);
        IF_SETHIDE(0, int2);
        IF_SETHIDE(0, int3);
        IF_SETHIDE(1, int4);
    };
    return;
}