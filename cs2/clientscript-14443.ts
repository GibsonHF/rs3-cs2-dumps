//
function script14443(int0: component): void {
    var int1 = 0;
    CC_DELETEALL(int0);
    IF_SETSIZE(210, 0, 0, 1, int0);
    IF_SETPOSITION(0, 0, 0, 0, int0);
    int1 = script16227(int0, int1, "Redeem", 0, varbitplayer_49036, 0);
    int1 = script16227(int0, int1, "Convert", 1, varbitplayer_49036, 0);
    IF_SETONVARTRANSMIT(callback(script14470, int0, 10273, 1), int0);
    return;
}