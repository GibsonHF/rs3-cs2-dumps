//
function script16298(): void {
    var int0 = 98238466;
    var int1 = 0;
    while ((int1 < 12)) {
        script14391(int0, int1, 1, 1, 0, 0, 1, 1, 0, 0);
        cc_setparam(5946, script9742(int1));
        switch (int1) {
            case 0: {
                CC_SETONVARTRANSMIT(callback(script16705, int1, 13399, 1));
                break;
            }
            case 1: {
                CC_SETONVARTRANSMIT(callback(script16705, int1, 13400, 1));
                break;
            }
            case 2: {
                CC_SETONVARTRANSMIT(callback(script16705, int1, 13401, 1));
                break;
            }
            case 3: {
                CC_SETONVARTRANSMIT(callback(script16705, int1, 13402, 1));
                break;
            }
            case 4: {
                CC_SETONVARTRANSMIT(callback(script16705, int1, 13403, 1));
                break;
            }
            case 5: {
                CC_SETONVARTRANSMIT(callback(script16705, int1, 13404, 1));
                break;
            }
            case 6: {
                CC_SETONVARTRANSMIT(callback(script16705, int1, 13405, 1));
                break;
            }
            case 7: {
                CC_SETONVARTRANSMIT(callback(script16705, int1, 13406, 1));
                break;
            }
            case 8: {
                CC_SETONVARTRANSMIT(callback(script16705, int1, 13407, 1));
                break;
            }
            case 9: {
                CC_SETONVARTRANSMIT(callback(script16705, int1, 13408, 1));
                break;
            }
            case 10: {
                CC_SETONVARTRANSMIT(callback(script16705, int1, 13409, 1));
                break;
            }
            case 11: {
                CC_SETONVARTRANSMIT(callback(script16705, int1, 13410, 1));
                break;
            }
        };
        int1 = (int1 + 1);
    };
    script14391(int0, 12, 1, 1, 0, 0, 1, 1, 0, 0);
    stack(21122);
    stack(13524);
    stack(1);
    CC_SETONVARTRANSMIT("Y");
    return;
}