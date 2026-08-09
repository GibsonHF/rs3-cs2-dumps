//
function script5217(int0: number, int1: number, int2: number, int3: number): void {
    script5981(int0);
    script4161(int0, 255);
    IF_SETONMOUSEOVER(callback(), int0);
    IF_SETONMOUSEOVER(callback(), int3);
    IF_SETONMOUSEOVER(callback(script5218, int0, int3, 0, 0, int2), int2);
    IF_SETONMOUSELEAVE(callback(script5218, int0, int3, 1, 0, int2), int0);
    IF_SETHIDE(true, IF_GETPARENTLAYER(int3));
    return;
}