//
function script6314(int0: component): void {
    if ((TESTBIT(varclient_841, 0) == 1)) {
        IF_CLEAROPS(int0);
        IF_CLEARSCRIPTHOOKS(int0);
        IF_SETPAUSETEXT("Back", int0);
    } else {
        IF_SETOP(1, "Close", int0);
        IF_SETONOP(callback(script29), int0);
        IF_SETPAUSETEXT("", int0);
    };
    IF_SETONVARCTRANSMIT(callback(script6314, int0, 841, 1), int0);
    return;
}