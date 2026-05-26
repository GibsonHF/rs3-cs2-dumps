//
function script14021(int0: number): void {
    var int1 = 126746629;
    var int2 = -1;
    var int3 = -1;
    while ((++int2 < 4)) {
        while ((++int3 < int0)) {
            if ((CC_FIND(int1, int3) == 1)) {
                CC_SETTEXT(inttostring(script3859(int3, int2), 10));
            };
        };
        switch (int2) {
            case 0: {
                int1 = 126746627;
                break;
            }
            case 1: {
                int1 = 126746628;
                break;
            }
            case 2: {
                int1 = 126746626;
                break;
            }
        };
        int3 = -1;
    };
    return;
}