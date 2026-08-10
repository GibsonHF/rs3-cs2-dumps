//
function script21039(): void {
    var string0 = IF_GETOP(1, int0);
    if ((strcmp(string0, "") == 0)) {
        unk11016("Op name returned an empty string. Has the order of procs been changed? Ops should be setup first");
        return;
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, int0, -1), int0);
    return;
}