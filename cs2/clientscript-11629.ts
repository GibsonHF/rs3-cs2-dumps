//
function script11629(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): void {
    if ((CC_FIND(int0, int3) == 1)) {
        if ((int6 <= 0)) {
            var int6 = CC_GETWIDTH();
        };
        if ((int7 <= 0)) {
            var int7 = CC_GETHEIGHT();
        };
        CC_SETONVARTRANSMIT(callback(script11630, -2147483645, int1, int2, int3, int4, int5, int6, int7, 3814, 1));
    };
    return;
}