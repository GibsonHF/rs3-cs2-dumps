//
function script13785(): void {
    var int0 = 43384878;
    var int1 = 0;
    var int2 = 4;
    var int3 = -1;
    var int4 = ((IF_GETHEIGHT(43384832) - IF_GETY(int0)) - int2);
    script15831();
    while ((CC_FIND(43384880, ++int3) == 1)) {
        if ((strcmp(CC_GETTEXT(), "") != 0)) {
            CC_SETSIZE((2 * int2), (2 * int2), 1, 1);
            int1 = (script7593(CC_GETTEXT(), CC_GETWIDTH(), 28, 0) + (4 * int2));
            if ((int1 > int4)) {
                IF_SETSIZE(28, int4, 1, 0, int0);
                CC_SETSIZE(((2 * int2) + 16), (2 * int2), 1, 1);
                int1 = (script7593(CC_GETTEXT(), CC_GETWIDTH(), 28, 0) + (4 * int2));
                IF_SETSIZE(16, (int4 - int2), 0, 0, 43384881);
                IF_SETSCROLLSIZE(0, int1, 43384880);
                IF_SETSCROLLPOS(0, 0, 43384880);
                script7791(43384881, 43384880);
            } else {
                IF_SETSIZE(28, int1, 1, 0, int0);
                IF_SETSCROLLPOS(0, 0, 43384880);
                IF_SETSCROLLSIZE(0, 0, 43384880);
                CC_DELETEALL(43384881);
            };
        };
    };
    return;
}