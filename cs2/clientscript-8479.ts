//
function script8479(int0: number, int1: number, int2: number): void {
    if (((CC_FIND(int1, int2) == 1) || ((int2 == -1) && (IF_FIND(int1) == 1)))) {
        IF_SETONDRAG(callback(script8482, int0, int1, int2, -1, 1, 0, 0, 0, 0), int0);
        IF_SETONDRAGCOMPLETE(callback(script9620, int0, int1, int2, -1), int0);
        SETDEFAULTCURSORS(188, 188);
        IF_SETMOUSEOVERCURSOR(-1, int0);
    };
    return;
}