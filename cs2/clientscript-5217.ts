//
function script5217(int0: component, int1: unknown_int, int2: unknown_int, int3: unknown_int): void {
    script5981(int0);
    script4161(int0, 255);
    IF_SETONMOUSEOVER(callback(), int0);
    IF_SETONMOUSEOVER(callback(), int3);
    IF_SETONMOUSEOVER(callback(script5218, int0, int3, 0, 0, int2), int2);
    IF_SETONMOUSELEAVE(callback(script5218, int0, int3, 1, 0, int2), int0);
    IF_SETHIDE(1, IF_GETPARENTLAYER(int3));
    return;
}