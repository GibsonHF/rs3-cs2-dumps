//
function script19251(int0: component, int1: int, string0: string): void {
    var int2 = 0;
    var int3 = 0;
    switch (int1) {
        case 0: {
            [int2, int3] = [0, -20];
            break;
        }
        case 1: {
            [int2, int3] = [0, 0];
            break;
        }
        case 2: {
            [int2, int3] = [0, 20];
            break;
        }
        case 3: {
            [int2, int3] = [0, 40];
            break;
        }
        case 4: {
            [int2, int3] = [0, 60];
            break;
        }
        case 5: {
            [int2, int3] = [0, 80];
            break;
        }
    };
    script15938(int0, int1, 0, int2, int3, 1, 1, 0, 19, 1, 0);
    script7918(int1, 1, 0, 0, 0, 1, 14, 0, 0, 1, 23372 as graphic);
    script7918(int1, 2, 14, 0, 0, 1, 20, 0, 1, 1, 23373 as graphic);
    CC_SETTILING(true);
    script7918(int1, 3, 0, 0, 2, 1, 6, 0, 0, 1, 23374 as graphic);
    script10485(int1, 4, 6, 0, 2, 1, 20, 0, 1, 1, 14217 as dbrow, string0);
    if ((CC_FINDBYCATEGORY[1](int0, int1, 0) == 1)) {
        CC_SETSIZE[1]((STRINGWIDTH(CC_GETTEXT(), CC_GETFONTMETRICS()) + 20), CC_GETHEIGHT[1](), 0, 0);
        CC_SETONTIMER[1](callback(script19252, CLIENTCLOCK(), -2147483645, -2147483643));
    };
    return;
}