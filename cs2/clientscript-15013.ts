//
function script15013(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, long0: bigint, long1: bigint, long2: bigint, long3: bigint, long4: bigint, long5: bigint): void {
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
    stack(comp(707, 11));  // stock_favourites:search_input_border ?
    int10 = (int10 + 1);
    while ((CC_FIND(int10) == 1)) {
        int8 = cc_getparam(7221);
        if ((int8 != -1 as obj)) {
            int11 = (int11 + 1);
            while ((int11 < 6)) {
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