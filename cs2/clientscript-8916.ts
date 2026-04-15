//
function script8916(int0: inv, int1: int, int2: int, int3: int): void {
    var int4 = script14074(int0);
    var int5 = -1 as obj;
    varbitplayer_45912 = 1;
    while ((int1 < int2)) {
        if ((CC_FIND(int4, int1) == 1)) {
            int5 = CC_GETINVOBJECT();
            if ((int5 == -1 as obj)) {
                var int2 = MIN((int2 + 1), int3);
            } else if ((script3802(int5) == true)) {
                script2295(int0, int5, 1, int1, 0, 0);
            } else {
                script2295(int0, int5, -1, int1, 0, 0);
            };
        };
        var int1 = (int1 + 1);
        if (((int5 != -1 as obj) && (OC_CATEGORY(int5) == 4448 as category))) {
            int2 = int1;
        };
    };
    varbitplayer_45912 = 0;
    if ((int2 >= int3)) {
        IF_SETONTIMER(callback(), comp(517, 37));
        script9318(1);
        return;
    };
    IF_SETONTIMER(callback(script8916, int0, int2, MIN((int2 + 5), int3), int3), 33882149);
    return;
}