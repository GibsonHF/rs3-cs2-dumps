//
function script13828(int0: number): void {
    var int1 = IF_GETHEIGHT(33882311);
    IF_SETSCROLLSIZE(0, MAX(int0, int1), 33882311);
    IF_SETSCROLLPOS(0, script14369(varbitplayer_45141), 33882311);
    if ((int0 > int1)) {
        script72(33882307, 33882311, IF_GETSCROLLY(33882311));
    } else {
        script72(33882307, 33882311, 0);
    };
    script157(33882307, 33882311, IF_GETSCROLLY(33882311), 1);
    varclient_6679 = int0;
    return;
}