//
function script7285(int0: unknown_int, int1: unknown_int, int2: component, int3: int): void {
    if ((int1 == 0)) {
        script41(comp(916, 2));
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