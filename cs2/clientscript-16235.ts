//
function script16235(int0: component, int1: int, int2: unknown_int, string0: unknown_string): void {
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETONTIMER(callback(script16236, string0, int2, int0, int1, 10, IF_GETSCROLLX(int0)));
    };
    return;
}