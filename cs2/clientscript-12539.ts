//
function script12539(int0: component): void {
    if ((varclient_5213 > varbitplayer_31439)) {
        varclient_5213 = (varclient_5213 - 1);
    } else if ((varclient_5213 < varbitplayer_31439)) {
        varclient_5213 = varbitplayer_31439;
    };
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    [int3, int1, int2] = script4705(varclient_5213);
    int2 = (int2 + (int1 * 60));
    var string0 = "";
    string0 = inttostring(int2, 10);
    if ((int2 <= 30)) {
        IF_SETCOLOUR(16711680, int0);
    } else {
        IF_SETCOLOUR(15777401, int0);
    };
    IF_SETTEXT(string0, int0);
    return;
}