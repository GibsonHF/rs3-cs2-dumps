//[proc,login_link_highlight]
function script3963(int0: component, int1: component, int2: fontmetrics, int3: unknown_int): void {
    var string0 = REMOVETAGS(IF_GETTEXT(int1));
    if ((int0 != comp(-1, 65535))) {
        if ((int3 == 1)) {
            IF_SETTEXT(`<u=FAFAFA>${string0}</u>`, int1);
            IF_SETCOLOUR(16448250, int1);
            IF_SETSIZE(STRINGWIDTH(string0, int2), IF_GETHEIGHT(int0), 0, 0, int0);
        } else {
            IF_SETTEXT(string0, int1);
            IF_SETCOLOUR(13158600, int1);
            IF_SETSIZE(STRINGWIDTH(string0, int2), IF_GETHEIGHT(int0), 0, 0, int0);
        };
    };
    return;
}