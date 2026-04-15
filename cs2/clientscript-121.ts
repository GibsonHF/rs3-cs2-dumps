//
function script121(int0: int): void {
    if ((varclient_2231 == int0)) {
        varclient_2231 = -1;
        if ((script8847(8) != -1)) {
            script8518();
        } else if ((script8847(9) != -1)) {
            script175();
        } else {
            script1558(int0, -1);
        };
    } else if ((int0 == 10)) {
        script7751();
    };
    var int1 = struct_getparam(script10405(int0), 3509);
    if ((int1 == comp(-1, 65535))) {
        return;
    };
    var int2 = (IF_GETNEXTSUBID(int1) - 1);
    while ((int2 > 0)) {
        if ((CC_FIND(int1, int2) == 1)) {
            CC_SETHIDE(true);
        };
        int2 = (int2 - 4);
    };
    return;
}