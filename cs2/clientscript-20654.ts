//
function script20654(int0: component, int1: component): void {
    if (((int0 == comp(-1, 65535)) || (int1 == comp(-1, 65535)))) {
        return;
    };
    var int2 = IF_GETFONTMETRICS(int1);
    var int3 = (10 + STRINGWIDTH(IF_GETTEXT(int1), int2));
    if ((int2 == -1 as fontmetrics)) {
        return;
    };
    if ((int3 > IF_GETWIDTH(int0))) {
        IF_SETSIZE(int3, IF_GETHEIGHT(int0), 0, 0, int0);
    };
    return;
}