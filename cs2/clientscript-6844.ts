//
function script6844(int0: number): void {
    var int1 = -1 as graphic;
    var int2 = comp(-1, 65535);
    [int1, int2] = script6845(int0);
    if ((IF_GETGRAPHIC(int2) == -1 as graphic)) {
        IF_SETGRAPHIC(int1, int2);
    };
    return;
}