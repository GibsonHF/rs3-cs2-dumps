//
function script6259(int0: number, int1: number): void {
    if ((int0 <= -1)) {
        var int0 = varclient_1506;
    };
    script4444(int0, int1);
    stack(callback(script4443, -1, int1));
    stack(int1);
    IF_SETONPLAYERGROUPTRANSMIT();
    IF_SETONCLANCHANNELTRANSMIT(callback(script4443, -1, int1), int1);
    IF_SETONCLANSETTINGSTRANSMIT(callback(script4443, -1, int1), int1);
    IF_SETONFRIENDTRANSMIT(callback(script4443, -1, int1), int1);
    return;
}