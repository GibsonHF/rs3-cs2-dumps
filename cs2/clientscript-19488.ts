//
function script19488(string0: unknown_string, string1: unknown_string, string2: unknown_string, string3: unknown_string): void {
    if ((IF_HASSUBMODAL(comp(1477, 693), 1313) == 0)) {
        IF_RESUME_PAUSEBUTTON(86048912);
        IF_SETHIDE(true, comp(1313, 134));
        return;
    };
    IF_SETHIDE(false, comp(1313, 134));
    IF_SETHIDE(false, comp(1313, 143));
    IF_SETHIDE(false, comp(1313, 144));
    IF_SETONCLICK(callback(script19489), comp(1313, 136));
    IF_SETTEXT(string0, 86048907);
    IF_SETTEXT(string1, 86048910);
    script13979(86048911, -1, 28553, 0, string2, string2);
    script13979(86048912, -1, 28555, 0, string3, string3);
    return;
}