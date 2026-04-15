//
function script6880(): void {
    var int0 = 13784;
    var int1 = 13786;
    var int2 = 13785;
    var int3 = 13782;
    var int4 = 13783;
    if (((varbitplayer_674 == -1) || (varbitplayer_674 == 1023))) {
        stack(int3);
        stack(85918201);
        IF_SETGRAPHIC();
        stack(int3);
        stack(85918202);
        IF_SETGRAPHIC();
        IF_SETONMOUSEOVER(callback(), 85918201);
        IF_SETONMOUSELEAVE(callback(), 85918201);
        IF_SETONMOUSEOVER(callback(), 85918202);
        IF_SETONMOUSELEAVE(callback(), 85918202);
    } else if ((varbitplayer_687 == 0)) {
        IF_SETONMOUSEOVER(callback(), comp(1311, 505));
        IF_SETONMOUSELEAVE(callback(), 85918201);
        stack(int3);
        stack(85918202);
        IF_SETGRAPHIC();
        if ((varbitplayer_688 == 1)) {
            stack(int0);
            stack(85918201);
            IF_SETGRAPHIC();
            IF_SETONMOUSEOVER(callback(script44, -2147483645, int4), 85918202);
            IF_SETONMOUSELEAVE(callback(script44, -2147483645, int3), 85918202);
        } else {
            stack(int1);
            stack(85918201);
            IF_SETGRAPHIC();
        };
    } else {
        stack(int3);
        stack(85918201);
        IF_SETGRAPHIC();
        IF_SETONMOUSEOVER(callback(script44, -2147483645, int4), 85918201);
        IF_SETONMOUSELEAVE(callback(script44, -2147483645, int3), 85918201);
        stack(int2);
        stack(85918202);
        IF_SETGRAPHIC();
        IF_SETONMOUSEOVER(callback(), 85918202);
        IF_SETONMOUSELEAVE(callback(), 85918202);
    };
    return;
}