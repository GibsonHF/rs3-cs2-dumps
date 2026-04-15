//
function script19367(int0: int, int1: int): void {
    var int2 = script19586(int1);
    var int3 = script19587(int1);
    if ((int2 == -1 as obj)) {
        return;
    };
    if ((int3 == 0)) {
        if ((int0 == 8)) {
            script19576(int1, int2);
        };
        return;
    };
    script19568();
    var int4 = 0;
    var int5 = script19357();
    var int6 = 0;
    var int7 = 0;
    var string0 = "";
    if ((int0 == 1)) {
        var int0 = varbitplayer_45189;
    };
    if ((script19368(int2) == 0)) {
        return;
    };
    if ((OC_HASVAROBJ(int2) == 1)) {
        int3 = script19580(int2);
    };
    switch (int0) {
        case 0:
        case 2: {
            int4 = 1;
            break;
        }
        case 3: {
            int4 = 5;
            break;
        }
        case 4: {
            int4 = 10;
            break;
        }
        case 5: {
            int4 = varplayer_111;
            break;
        }
        case 6: {
            int4 = script14234();
            break;
        }
        case 7: {
            if ((OC_HASVAROBJ(int2) == 1)) {
                int4 = script19580(int2);
            } else {
                int4 = int3;
            };
            break;
        }
        case 8: {
            int4 = int3;
            int6 = 1;
            break;
        }
        case 9: {
            return;
        }
        default: {
            return;
        }
    };
    script19369(int2, int4, int1, int5, -1, int3, int6);
    return;
}