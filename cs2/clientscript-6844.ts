//
function script6844(int0: unknown_int): void {
    var int1 = -1;
    var int2 = comp(-1, 65535);
    [int1, int2] = script6845(int0);
    if ((IF_GETGRAPHIC(int2) == -1 as graphic)) {
        stack(int1);
        stack(int2);
        IF_SETGRAPHIC();
    };
    return;
}