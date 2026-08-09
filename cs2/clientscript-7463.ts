//
function script7463(int0: number): void {
    var int1 = 18782;
    var int2 = 18789 as graphic;
    if (((IF_GETGRAPHIC(int0) == 23780 as graphic) || (IF_GETGRAPHIC(int0) == 23779 as graphic))) {
        int1 = 23779;
        int2 = 23780 as graphic;
    };
    IF_SETONMOUSELEAVE(callback(script7465, int0, int1), int0);
    IF_SETGRAPHIC(int2, int0);
    return;
}