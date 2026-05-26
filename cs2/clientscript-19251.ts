//
function script19251(int0: number, int1: number, string0: string): void {
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
    script7918(int1, 1, 0, 0, 0, 1, 14, 0, 0, 1, 23372);
    script7918(int1, 2, 14, 0, 0, 1, 20, 0, 1, 1, 23373);
    CC_SETTILING(1);
    script7918(int1, 3, 0, 0, 2, 1, 6, 0, 0, 1, 23374);
    script10485(int1, 4, 6, 0, 2, 1, 20, 0, 1, 1, 14217, string0);
    if ((CC_FINDBYCATEGORY[1](int0, int1, 0) == 1)) {
        CC_SETSIZE[1]((STRINGWIDTH(CC_GETTEXT(), CC_GETFONTMETRICS()) + 20), CC_GETHEIGHT[1](), 0, 0);
        CC_SETONTIMER[1](callback(script19252, CLIENTCLOCK(), -2147483645, -2147483643));
    };
    return;
}