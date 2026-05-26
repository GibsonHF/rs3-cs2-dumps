//
function script17041(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void {
    if ((CC_FIND(int3, int4) == 1)) {
        if ((int1 <= 0)) {
            var int1 = script5747(int0);
        };
        if ((int1 > 0)) {
            if ((int2 == 1)) {
                script17042(int1, int3, int4, int5, int6);
            };
            CC_SETHIDE(0);
        } else {
            CC_SETHIDE(1);
        };
    };
    return;
}