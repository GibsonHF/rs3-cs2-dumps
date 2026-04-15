//
function script15013(int0: inv, int1: unknown_int, int2: obj, int3: obj, int4: obj, int5: obj, int6: obj, int7: obj, long0: long, long1: long, long2: long, long3: long, long4: long, long5: long): void {
    if ((int2 == -1 as obj)) {
        return;
    };
    if ((int1 == 1)) {
        script15012(int0);
    };
    var int8 = -1 as obj;
    var int9 = -1 as obj;
    var long6 = 0n;
    var int10 = -1;
    var int11 = -1;
    while ((CC_FIND(comp(707, 4), ++int10) == 1)) {
        int8 = cc_getparam(7221);
        if ((int8 != -1 as obj)) {
            while ((++int11 < 6)) {
                switch (int11) {
                    case 0: {
                        int9 = int2;
                        long6 = long0;
                        break;
                    }
                    case 1: {
                        int9 = int3;
                        long6 = long1;
                        break;
                    }
                    case 2: {
                        int9 = int4;
                        long6 = long2;
                        break;
                    }
                    case 3: {
                        int9 = int5;
                        long6 = long3;
                        break;
                    }
                    case 4: {
                        int9 = int6;
                        long6 = long4;
                        break;
                    }
                    case 5: {
                        int9 = int7;
                        long6 = long5;
                        break;
                    }
                };
                if (((int9 != -1 as obj) && (int9 == int8))) {
                    CC_SETTEXT(`~${script17372(long6, 9, 1)} coins`);
                };
            };
        };
        int11 = -1;
    };
    return;
}