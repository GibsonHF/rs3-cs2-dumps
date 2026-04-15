//
function script6846(int0: unknown_int): void {
    var int1 = -1 as graphic;
    var int2 = comp(-1, 65535);
    [int1, int2] = script6847(int0);
    if ((IF_GETGRAPHIC(int2) == int1)) {
        stack(-1);
        stack(int2);
        IF_SETGRAPHIC();
    };
    return;
}