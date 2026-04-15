//
function script8773(int0: unknown_int, int1: int, int2: int, int3: int, int4: int, int5: int): void {
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    [int6, int7, int8] = GET_MOUSEBUTTONS();
    if ((int7 == 0)) {
        return;
    };
    if (((CAM2_GETCONTROLMODE() != 1) || (varclient_3824 == 1))) {
        return;
    };
    if ((script14245() == 1)) {
        return;
    };
    if (((varclient_173 == 1) || ((varbitplayer_3028 == 1) && (varbitplayer_3031 != 1)))) {
        return;
    };
    if ((script7942() == 1)) {
        return;
    };
    if ((((script15536() == 7) && (script15532(0) == 1)) && (varbitplayer_49044 == 10))) {
        return;
    };
    if (((CLIENTCLOCK() - int5) > 1)) {
        var [int3, int4] = [int1, int2];
    };
    var int9 = MAX(MIN((varclient_2830 * (int2 - int4)), 3500), (0 - 3500));
    var int10 = MAX(MIN((varclient_2829 * (int1 - int3)), 16284), (0 - 16284));
    script8768(int9, int10);
    IF_SETONMOUSEREPEAT(callback(script8773, -2147483645, -2147483647, -2147483646, int1, int2, CLIENTCLOCK()), int0);
    return;
}