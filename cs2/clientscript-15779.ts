//
function script15779(): void {
    IF_SETONRESIZE(callback(script15779), 44892175);
    var int0 = IF_GETHEIGHT(44892160);
    var int1 = 50;
    var int2 = 110;
    var int3 = 282;
    var int4 = 30;
    if ((int0 <= 550)) {
        int1 = 30;
        int2 = 80;
        int3 = 262;
        int4 = 0;
    };
    IF_SETSIZE(0, int1, 1, 0, 44892187);
    IF_SETPOSITION(0, int1, 1, 0, 44892188);
    IF_SETSIZE(0, int2, 1, 0, 44892188);
    IF_SETPOSITION(0, (int1 + int2), 1, 0, 44892189);
    IF_SETSIZE(0, int3, 1, 0, 44892210);
    IF_SETPOSITION(0, int4, 1, 2, 44892214);
    return;
}