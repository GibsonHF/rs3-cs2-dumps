//
function script7992(): void {
    if ((MODULO(CLIENTCLOCK(), 3000) != 0)) {
        return;
    };
    var int0 = script2581(33098 as struct);
    if ((int0 == 1)) {
        IF_SETONTIMER(callback(), comp(1477, 919));
        return;
    };
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    [int1, int2, int3] = FPS_STATS();
    if ((int3 < 30)) {
        return;
    };
    if ((int2 > 144)) {
        IF_OPENSUBCLIENT(comp(1477, 878), 1423);
        varclient_2824 = 1;
        IF_SETTEXT("It looks like you have a very high frame-rate at the moment which means your GPU may be doing more work than your monitor can display.<br><br>You might like to turn up your graphics settings [if they are not already on ultra], or turn on VSync which will reduce the extra work your GPU is doing.", comp(1423, 6));
        IF_SETONOP(callback(script132), comp(1423, 5));
    };
    return;
}