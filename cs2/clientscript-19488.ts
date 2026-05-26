//
function script19488(string0: string, string1: string, string2: string, string3: string): void {
    if ((IF_HASSUBMODAL(96797365, 1313) == 0)) {
        IF_RESUME_PAUSEBUTTON(86048912);
        IF_SETHIDE(1, 86048902);
        return;
    };
    IF_SETHIDE(0, 86048902);
    IF_SETHIDE(0, 86048911);
    IF_SETHIDE(0, 86048912);
    IF_SETONCLICK(callback(script19489), 86048904);
    IF_SETTEXT(string0, 86048907);
    IF_SETTEXT(string1, 86048910);
    script13979(86048911, -1, 28553, 0, string2, string2);
    script13979(86048912, -1, 28555, 0, string3, string3);
    return;
}