//
function script8916(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = script14074(int0);
    var int5 = -1;
    varbitplayer_45912 = 1;
    while ((int1 < int2)) {
        if ((CC_FIND(int4, int1) == 1)) {
            int5 = CC_GETINVOBJECT();
            if ((int5 == -1)) {
                var int2 = MIN((int2 + 1), int3);
            } else if ((script3802(int5) == 1)) {
                script2295(int0, int5, 1, int1, 0, 0);
            } else {
                script2295(int0, int5, -1, int1, 0, 0);
            };
        };
        var int1 = (int1 + 1);
        if (((int5 != -1) && (OC_CATEGORY(int5) == 4448))) {
            int2 = int1;
        };
    };
    varbitplayer_45912 = 0;
    if ((int2 >= int3)) {
        IF_SETONTIMER(callback(), 33882149);
        script9318(1);
        return;
    };
    IF_SETONTIMER(callback(script8916, int0, int2, MIN((int2 + 5), int3), int3), 33882149);
    return;
}