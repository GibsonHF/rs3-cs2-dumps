//
function script17668(int0: component, int1: int, int2: unknown_int, string0: string): void {
    var int3 = 0;
    if ((CC_FIND(int0, int1) == 1)) {
        int3 = CC_RADIALPROGRESSOVERLAY_GETPROGRESS();
        if ((int3 >= 10000)) {
            if ((int2 == 0)) {
                script17628(10000, 3);
            } else {
                script17628(10000, 1);
            };
            int3 = 0;
        };
    };
    if ((CC_FIND(int0, (int1 + 1)) == 1)) {
        CC_SETTEXT(`${string0} (${inttostring((int3 / 100), 10)}%)`);
    };
    return;
}