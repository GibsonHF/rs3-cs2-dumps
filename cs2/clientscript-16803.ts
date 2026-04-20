//
function script16803(string0: unknown_string): void {
    if ((IF_HASSUBMODAL(comp(1477, 693), 517 as interface) == 0)) {
        IF_RESUME_PAUSEBUTTON(33882451);
        IF_SETHIDE(true, comp(517, 330));
        return;
    };
    IF_SETHIDE(false, comp(517, 330));
    IF_SETHIDE(false, comp(517, 338));
    IF_SETHIDE(false, comp(517, 339));
    IF_SETONCLICK(callback(script16804), comp(517, 331));
    script13979(33882450, -1, 28553, 0, "Withdraw", "Withdraw");
    IF_SETTEXT(string0, 33882449);
    return;
}