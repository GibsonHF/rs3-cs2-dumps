//
function script7002(int0: component, int1: int, int2: component): void {
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETONDRAG(callback(script7969, -2147483645, -2147483643));
    };
    script8442(int0, int1, int2);
    var int3 = script7980(int2);
    var int4 = script7980(int0);
    var int5 = script11786(int2);
    var int6 = script11786(int0);
    var int7 = script11799(int5);
    var int8 = script11799(int6);
    if (((((int0 == int2) && (int4 != -1)) || (int0 == comp(-1, 65535))) || (int2 == comp(-1, 65535)))) {
        return;
    };
    switch (int2) {
        case 96796699:
        case 96796698:
        case 96796700: {
            if ((int4 != -1)) {
                script6739(16);
                script7970(int8, int4);
                if ((script6354(comp(1436, 0)) == 1)) {
                    script7970(1436, 0);
                };
            };
            return;
        }
        case 95289345:
        case 127467700: {
            script6739(17);
            script8442(int0, int1, int2);
            return;
        }
    };
    if ((int3 == -1)) {
        return;
    };
    if (((int5 == -1) || (int6 == -1))) {
        return;
    };
    script6739(17);
    script7972(int8, int7, int6, int4, int5, int3);
    var int2 = script7974(int7, int3);
    script6995(int7, int3, 0, 0, 0, -1);
    if ((int4 != -1)) {
        var int0 = script7974(int8, int4);
        script6995(int8, int4, 0, 0, 0, -1);
    } else {
        script7971(int0, int1, int2, int7, int3);
    };
    if ((((int5 == 1003) || (int6 == 1003)) && (script6354(comp(1436, 0)) == 1))) {
        if ((int5 == 1003)) {
            int2 = script7974(1436, int3);
            script6995(1436, int3, 0, 0, 0, -1);
        };
        if (((int4 != -1) && (int6 == 1003))) {
            script6995(1436, int4, 0, 0, 0, -1);
        } else {
            script7971(int0, int1, int2, 1436, int3);
        };
    };
    script8808();
    return;
}