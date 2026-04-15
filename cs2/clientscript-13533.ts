//
function script13533(int0: component, int1: component): void {
    var int2 = IF_GETWIDTH(IF_GETLAYER(int0));
    IF_SETSIZE((((int2 - PARAWIDTH(IF_GETTEXT(int1), 334, 58 as fontmetrics)) / 2) - 8), IF_GETHEIGHT(int0), 0, 0, int0);
    return;
}