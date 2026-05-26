//
function script8879(): void {
    if ((IF_FIND(97517571) == 1)) {
        CC_SETPARAM_INT(3433, 5);
    };
    var int0 = 0;
    var int1 = 0;
    if ((varclient_6363 == 0)) {
        int1 = MAX((IF_GETX(97583119) + IF_GETWIDTH(97583119)), IF_GETWIDTH(97583120));
        int0 = (IF_GETY(97583120) + IF_GETHEIGHT(97583120));
        IF_SETSIZE(int1, int0, 0, 0, 97517571);
    };
    return;
}