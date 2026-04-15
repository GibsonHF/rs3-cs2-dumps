//
function script18255(): void {
    var int0 = script18160(varplayer_3233);
    var int1 = script16319(int0);
    IF_SETHIDE(true, comp(1343, 60));
    IF_SETHIDE(true, comp(1343, 61));
    if ((varbitplayer_50552 > 0)) {
        script18256(int1, int0, comp(1343, 181), comp(1343, 178));
    } else {
        IF_SETHIDE(true, comp(1343, 62));
        IF_SETSIZE(0, 290, 1, 0, comp(1343, 43));
        IF_SETSIZE(0, 125, 1, 0, comp(1343, 48));
        IF_SETPOSITION(0, 140, 1, 0, comp(1343, 56));
        IF_SETSIZE(0, 125, 1, 0, comp(1343, 56));
    };
    return;
}