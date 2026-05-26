//
function script18770(string0: string): void {
    if ((IF_FIND(50069507) == 1)) {
        CC_SETTEXT(string0);
        CC_SETTEXTALIGN(1, 1, 12);
        if ((PARAHEIGHT(CC_GETTEXT(), CC_GETWIDTH(), CC_GETFONTMETRICS()) > 1)) {
            IF_SETSIZE(0, ((2 * 12) + 4), 1, 0, 50069506);
            IF_SETSIZE(0, 0, 1, 1, 50069505);
        };
    };
    return;
}