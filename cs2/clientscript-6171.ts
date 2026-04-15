//
function script6171(int0: int, int1: component): void {
    var int2 = 0;
    varclient_1911 = int0;
    while ((int2 < ENUM_GETOUTPUTCOUNT(5838 as cs2enum))) {
        if (((CC_FIND(int1, int2) == 1) && (int2 != int0))) {
            CC_SETGRAPHIC(10734 as graphic);
        };
        int2 = (int2 + 1);
    };
    if ((CC_FIND(int1, int0) == 1)) {
        CC_SETGRAPHIC(10735 as graphic);
    };
    return;
}