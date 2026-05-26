//
function script12214(): void {
    IF_SETTEXT(inttostring(varbitplayer_30383, 10), 112525314);
    var int0 = IF_GETHEIGHT(112525316);
    var int1 = IF_GETHEIGHT(112525365);
    var int2 = ((int0 * 100) / 2500);
    var int3 = MAX(1, ((int2 * varclient_5126) / 100));
    if ((varclient_5126 == 2500)) {
        int3 = int0;
    };
    IF_SETSIZE(IF_GETWIDTH(112525316), int3, 0, 0, 112525365);
    IF_SETONTIMER(callback(script12215), 112525365);
    return;
}