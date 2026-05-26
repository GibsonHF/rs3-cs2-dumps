//
function script19601(int0: number, int1: number, int2: number): void {
    var int3 = (int1 + int2);
    var int4 = int1;
    while ((int3 >= int0)) {
        if (((CC_FIND(86048843, int3) == 1) && (CC_FIND[1](86048843, int4) == 1))) {
            if ((CC_GETINVOBJECT[1]() == 48447)) {
                CC_SETOBJECT_NONUM(48447, 1);
            } else {
                CC_SETOBJECT(CC_GETINVOBJECT[1](), CC_GETINVCOUNT[1]());
            };
        };
        int3 = (int3 - 1);
        int4 = (int4 - 1);
    };
    int4 = (int0 + int2);
    while ((int0 < int4)) {
        if ((CC_FIND(86048843, int0) == 1)) {
            CC_SETOBJECT_NONUM(48447, 0);
        };
        var int0 = (int0 + 1);
    };
    IF_SETONTIMER(callback(script19597), 86048842);
    if ((varplayer_11958 > int0)) {
        varplayer_11958 = (varplayer_11958 + int2);
    };
    return;
}