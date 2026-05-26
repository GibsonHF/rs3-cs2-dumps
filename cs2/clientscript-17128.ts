//
function script17128(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    if ((int2 <= int3)) {
        IF_SETSCROLLSIZE(0, int4, int0);
        script72(int1, int0, MIN(IF_GETSCROLLY(int0), int4));
        IF_SETHIDE(false, int1);
    } else {
        IF_SETSCROLLSIZE(0, 0, int0);
        IF_SETSCROLLPOS(0, 0, int0);
        IF_SETHIDE(true, int1);
    };
    return;
}