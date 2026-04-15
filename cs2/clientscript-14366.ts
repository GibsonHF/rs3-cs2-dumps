//
function script14366(int0: int, int1: int): void {
    var int2 = -1 as obj;
    var int3 = -1;
    if ((CC_FIND(comp(517, 201), int0) == 1)) {
        int2 = CC_GETINVOBJECT();
        int3 = CC_GETINVCOUNT();
        if ((CC_FIND[1](comp(517, 201), int1) == 1)) {
            script13796(CC_GETINVOBJECT[1](), CC_GETINVCOUNT[1]());
        };
    };
    if ((CC_FIND(comp(517, 201), int1) == 1)) {
        script13796(int2, int3);
    };
    if (((int2 == 48447 as obj) && ((int0 < varplayer_8970) || (varplayer_8970 == -1)))) {
        varplayer_8970 = int0;
    } else if ((int1 == varplayer_8970)) {
        varplayer_8970 = script14353(int1, varplayer_8971);
    };
    return;
}