//
function script6131(int0: int, int1: int): void {
    varclient_1889 = int0;
    varclient_1890 = int1;
    varclient_1892 = 50;
    IF_SETONTIMER(callback(), comp(1270, 13));
    IF_SETONTIMER(callback(script6140, int0, int1), 83230733);
    return;
}