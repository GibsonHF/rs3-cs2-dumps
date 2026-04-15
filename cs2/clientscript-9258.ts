//
function script9258(int0: obj, string0: unknown_string, string1: string, string2: string): void {
    if ((int0 == -1 as obj)) {
        IF_RESUME_PAUSEBUTTON(43974696);
        IF_SETHIDE(true, comp(671, 17));
        return;
    };
    IF_SETHIDE(false, comp(671, 17));
    IF_SETOBJECT_NONUM(int0, 100, comp(671, 4));
    IF_SETTEXT(string1, comp(671, 2));
    IF_SETTEXT(string2, comp(671, 48));
    return;
}