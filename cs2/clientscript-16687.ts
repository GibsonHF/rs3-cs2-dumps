//
function script16687(int0: component, int1: int): void {
    var int2 = 0;
    if ((CC_FIND(int0, int1) == 1)) {
        int2 = MODULO(script12722(cc_getparam(5940), cc_getparam(5403)), 360);
        CC_SETTRANS((255 - SCALE(MAX(0, (enum_getvalue(0, 0, 9054 as cs2enum, int2) - 50)), 50, 150)));
    };
    return;
}