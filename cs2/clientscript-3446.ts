//
function script3446(int0: component): void {
    var int1 = IF_GETNEXTSUBID(int0);
    var int2 = script3436(varplayer_3079);
    if ((int2 == -1)) {
        return;
    };
    CC_CREATE(int0, 5, int1);
    CC_SETSIZE(IF_GETWIDTH(int0), IF_GETHEIGHT(int0), 0, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    return;
}