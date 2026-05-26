//
function script11699(int0: number, int1: number): void {
    varclient_81 = (varclient_81 - 1);
    if ((varclient_81 > 0)) {
        return;
    };
    IF_SETONTIMER(callback(), int0);
    script11700(int1);
    return;
}