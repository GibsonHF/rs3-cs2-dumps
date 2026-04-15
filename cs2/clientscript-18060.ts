//
function script18060(): int {
    var int0 = script17896();
    var int1 = 0;
    var int2 = -1;
    var int3 = 0;
    while ((++int1 <= int0)) {
        if ((CC_FINDBYCATEGORY(comp(1226, 34), (int1 + 40), 0) == 1)) {
            CC_SETPOSITION(0, int3, 0, 0);
            if ((cc_getparam(8193) == 1)) {
                int3 = (int3 + 58);
            } else {
                int3 = (int3 + cc_getparam(4255));
            };
        };
    };
    return int3;
}