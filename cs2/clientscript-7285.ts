//
function script7285(int0: number, int1: number, int2: number, int3: number): void {
    if ((int1 == 0)) {
        script41(60030978);
    };
    if ((CC_FIND(int2, int3) == 1)) {
        if ((int0 == 1)) {
            if ((int1 == 1)) {
                CC_SETGRAPHIC(15595 as graphic);
            } else {
                CC_SETGRAPHIC(15596 as graphic);
            };
        } else if ((int1 == 1)) {
            CC_SETGRAPHIC(15595 as graphic);
        } else {
            CC_SETGRAPHIC(15594 as graphic);
        };
    };
    return;
}