//
function script13600(int0: component, int1: component): void {
    IF_SETTEXT("Close comparison", int0);
    IF_SETCOLOUR(script10495(3), int0);
    IF_SETSIZE(STRINGWIDTH(IF_GETTEXT(int0), IF_GETFONTMETRICS(int0)), 0, 0, 1, int0);
    IF_SETPOSITION((IF_GETWIDTH(int0) + 5), 0, 0, 1, int1);
    return;
}