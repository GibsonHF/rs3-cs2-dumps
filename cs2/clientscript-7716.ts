//
function script7716(int0: number, int1: number, int2: number, int3: number, string0: string): void {
    if ((CC_FIND(92471296, int2) == 1)) {
        CC_SETONVARCTRANSMIT(callback());
        CC_SETHIDE(0);
        CC_SETTEXT(string0);
        IF_SETHIDE(1, 92471353);
        IF_SETHIDE(1, int0);
        IF_SETHIDE(1, int1);
        IF_SETHIDE(1, int3);
        IF_SETTEXT("", int0);
    };
    return;
}