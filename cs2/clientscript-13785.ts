//
function script13785(): void {
    var int0 = comp(662, 46);
    var int1 = 0;
    var int2 = 4;
    var int3 = -1;
    var int4 = ((IF_GETHEIGHT(comp(662, 0)) - IF_GETY(int0)) - int2);
    script15831();
    while ((CC_FIND(comp(662, 48), ++int3) == 1)) {
        if ((strcmp(CC_GETTEXT(), "") != 0)) {
            CC_SETSIZE((2 * int2), (2 * int2), 1, 1);
            int1 = (script7593(CC_GETTEXT(), CC_GETWIDTH(), 28 as fontmetrics, 0) + (4 * int2));
            if ((int1 > int4)) {
                IF_SETSIZE(28, int4, 1, 0, int0);
                CC_SETSIZE(((2 * int2) + 16), (2 * int2), 1, 1);
                int1 = (script7593(CC_GETTEXT(), CC_GETWIDTH(), 28 as fontmetrics, 0) + (4 * int2));
                IF_SETSIZE(16, (int4 - int2), 0, 0, comp(662, 49));
                IF_SETSCROLLSIZE(0, int1, comp(662, 48));
                IF_SETSCROLLPOS(0, 0, comp(662, 48));
                script7791(comp(662, 49), comp(662, 48));
            } else {
                IF_SETSIZE(28, int1, 1, 0, int0);
                IF_SETSCROLLPOS(0, 0, comp(662, 48));
                IF_SETSCROLLSIZE(0, 0, comp(662, 48));
                CC_DELETEALL(comp(662, 49));
            };
        };
    };
    return;
}