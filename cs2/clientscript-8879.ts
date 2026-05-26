//
function script8879(): void {
    if ((IF_FIND(comp(1488, 3)) == 1)) {
        CC_SETPARAM_INT(3433, 5);
    };
    var int0 = 0;
    var int1 = 0;
    if ((varclient_6363 == 0)) {
        int1 = MAX((IF_GETX(comp(1489, 15)) + IF_GETWIDTH(comp(1489, 15))), IF_GETWIDTH(comp(1489, 16)));
        int0 = (IF_GETY(comp(1489, 16)) + IF_GETHEIGHT(comp(1489, 16)));
        IF_SETSIZE(int1, int0, 0, 0, comp(1488, 3));
    };
    return;
}