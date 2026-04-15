//
function script19606(int0: int, int1: int): void {
    var int2 = -1 as obj;
    var int3 = -1;
    if ((CC_FIND(comp(1313, 75), int0) == 1)) {
        int2 = CC_GETINVOBJECT();
        int3 = CC_GETINVCOUNT();
        if ((CC_FIND[1](comp(1313, 75), int1) == 1)) {
            script19539(CC_GETINVOBJECT[1](), CC_GETINVCOUNT[1]());
        };
    };
    if ((CC_FIND(comp(1313, 75), int1) == 1)) {
        script19539(int2, int3);
    };
    if (((int2 == 48447 as obj) && ((int0 < varplayer_11958) || (varplayer_11958 == -1)))) {
        varplayer_11958 = int0;
    } else if ((int1 == varplayer_11958)) {
        varplayer_11958 = script19595(int1, varplayer_11959);
    };
    return;
}