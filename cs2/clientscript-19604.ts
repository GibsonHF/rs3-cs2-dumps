//
function script19604(int0: int, int1: int): void {
    var int2 = 1;
    if ((int1 > int0)) {
        int2 = -1;
        var int1 = (int1 - 1);
        if (((varplayer_11958 <= int1) && (varplayer_11958 >= int0))) {
            varplayer_11958 = (varplayer_11958 - 1);
        };
    } else if (((varplayer_11958 >= int1) && (varplayer_11958 <= int0))) {
        varplayer_11958 = (varplayer_11958 + 1);
    };
    var int3 = -1 as obj;
    var int4 = 0;
    if ((CC_FIND(comp(1313, 75), int0) == 1)) {
        int3 = CC_GETINVOBJECT();
        int4 = CC_GETINVCOUNT();
    };
    var int5 = 48447 as obj;
    var int6 = 0;
    var string0 = "Withdraw";
    var string1 = script19536();
    while ((int1 != int0)) {
        if ((CC_FIND(comp(1313, 75), int1) == 1)) {
            int5 = CC_GETINVOBJECT();
            int6 = CC_GETINVCOUNT();
            if ((int3 == 48447 as obj)) {
                CC_SETOBJECT_NONUM(int3, int4);
            } else {
                CC_SETOBJECT(int3, int4);
            };
            int3 = int5;
            int4 = int6;
        };
        int1 = (int1 + int2);
    };
    if ((CC_FIND(comp(1313, 75), int1) == 1)) {
        if ((int3 == 48447 as obj)) {
            CC_SETOBJECT_NONUM(int3, int4);
        } else {
            CC_SETOBJECT(int3, int4);
        };
    };
    IF_SETONTIMER(callback(script19597), comp(1313, 74));
    return;
}