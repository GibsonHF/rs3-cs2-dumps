//
function script6880(): void {
    var int0 = 13784;
    var int1 = 13786;
    var int2 = 13785;
    var int3 = 13782;
    var int4 = 13783;
    if (((varbitplayer_674 == -1) || (varbitplayer_674 == 1023))) {
        IF_SETGRAPHIC(int3, 85918201);
        IF_SETGRAPHIC(int3, 85918202);
        IF_SETONMOUSEOVER(callback(), 85918201);
        IF_SETONMOUSELEAVE(callback(), 85918201);
        IF_SETONMOUSEOVER(callback(), 85918202);
        IF_SETONMOUSELEAVE(callback(), 85918202);
    } else if ((varbitplayer_687 == 0)) {
        IF_SETONMOUSEOVER(callback(), 85918201);
        IF_SETONMOUSELEAVE(callback(), 85918201);
        IF_SETGRAPHIC(int3, 85918202);
        if ((varbitplayer_688 == 1)) {
            IF_SETGRAPHIC(int0, 85918201);
            IF_SETONMOUSEOVER(callback(script44, -2147483645, int4), 85918202);
            IF_SETONMOUSELEAVE(callback(script44, -2147483645, int3), 85918202);
        } else {
            IF_SETGRAPHIC(int1, 85918201);
        };
    } else {
        IF_SETGRAPHIC(int3, 85918201);
        IF_SETONMOUSEOVER(callback(script44, -2147483645, int4), 85918201);
        IF_SETONMOUSELEAVE(callback(script44, -2147483645, int3), 85918201);
        IF_SETGRAPHIC(int2, 85918202);
        IF_SETONMOUSEOVER(callback(), 85918202);
        IF_SETONMOUSELEAVE(callback(), 85918202);
    };
    return;
}