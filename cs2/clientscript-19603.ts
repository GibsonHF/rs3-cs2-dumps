//
function script19603(int0: inv, int1: int, int2: obj, int3: obj, int4: int, int5: int): void {
    if ((int5 == -1)) {
        var int5 = script19479(0);
        if ((int5 == -1)) {
            return;
        };
    };
    var int6 = script19567(int0);
    if ((int1 == -1)) {
        var int1 = script3795(int6, int2);
    };
    var int7 = int4;
    while ((int4 > 0)) {
        if ((int1 != -1)) {
            if ((CC_FIND(int6, int1) == 1)) {
                if (((OC_STACKABLE(int2) == 1) || (int2 != int3))) {
                    script19607(int0, int2, (CC_GETINVCOUNT() - int4));
                    var int4 = 0;
                } else {
                    script19607(int0, int2, (CC_GETINVCOUNT() - 1));
                    int4 = (int4 - 1);
                };
                int1 = script3796(int6, int2, int1);
                if ((int1 == -1)) {
                    int1 = script3796(int6, int2, 0);
                };
            } else {
                int4 = 0;
            };
        } else {
            int4 = 0;
        };
    };
    if ((CC_FIND(comp(1313, 75), int5) == 1)) {
        script19539(int3, (CC_GETINVCOUNT() + int7));
    };
    return;
}