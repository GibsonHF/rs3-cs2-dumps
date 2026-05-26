//
function script16803(string0: string): void {
    if ((IF_HASSUBMODAL(96797365, 517) == 0)) {
        IF_RESUME_PAUSEBUTTON(33882451);
        IF_SETHIDE(1, 33882442);
        return;
    };
    IF_SETHIDE(0, 33882442);
    IF_SETHIDE(0, 33882450);
    IF_SETHIDE(0, 33882451);
    IF_SETONCLICK(callback(script16804), 33882443);
    script13979(33882450, -1, 28553, 0, "Withdraw", "Withdraw");
    IF_SETTEXT(string0, 33882449);
    return;
}