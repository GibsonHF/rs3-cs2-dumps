//
function script14021(int0: int): void {
    var int1 = comp(1934, 5);
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
                int1 = comp(1934, 3);
                break;
            }
            case 1: {
                int1 = comp(1934, 4);
                break;
            }
            case 2: {
                int1 = comp(1934, 2);
                break;
            }
        };
        int3 = -1;
    };
    return;
}