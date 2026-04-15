//
function script19478(int0: inv, int1: int, int2: int, int3: int): void {
    var int4 = comp(1313, 14);
    var int5 = -1 as obj;
    varbitplayer_45912 = 1;
    while ((int1 < int2)) {
        if ((CC_FIND(int4, int1) == 1)) {
            int5 = CC_GETINVOBJECT();
            if ((int5 == -1 as obj)) {
                var int2 = MIN((int2 + 1), int3);
            } else if ((script3802(int5) == true)) {
                script19344(int0, int5, 1, int1, 0, 0);
            } else {
                script19344(int0, int5, -1, int1, 0, 0);
            };
        };
        var int1 = (int1 + 1);
    };
    varbitplayer_45912 = 0;
    if ((int2 >= int3)) {
        IF_SETONTIMER(callback(), comp(1313, 16));
        script19513(1);
        return;
    };
    IF_SETONTIMER(callback(script19478, int0, int2, MIN((int2 + 5), int3), int3), 86048784);
    return;
}