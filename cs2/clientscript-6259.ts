//
function script6259(int0: int, int1: component): void {
    if ((int0 <= -1)) {
        var int0 = varclient_1506;
    };
    script4444(int0, int1);
    stack(4443);
    stack(-1);
    stack(int1);
    stack("ii");
    stack(int1);
    IF_SETONPLAYERGROUPTRANSMIT();
    IF_SETONCLANCHANNELTRANSMIT(callback(script4443, -1, int1), int1);
    IF_SETONCLANSETTINGSTRANSMIT(callback(script4443, -1, int1), int1);
    IF_SETONFRIENDTRANSMIT(callback(script4443, -1, int1), int1);
    return;
}