//
function script14027(): void {
    var int0 = -1;
    var int1 = (4 * 5);
    while ((++int0 < int1)) {
        switch ((int0 / 5)) {
            case 0: {
                if ((CC_FIND(comp(1934, 5), MODULO(int0, 5)) == 1)) {
                    CC_SETCOLOUR(16764170);
                };
                break;
            }
            case 1: {
                if ((CC_FIND(comp(1934, 3), MODULO(int0, 5)) == 1)) {
                    CC_SETCOLOUR(16764170);
                };
                break;
            }
            case 2: {
                if ((CC_FIND(comp(1934, 4), MODULO(int0, 5)) == 1)) {
                    CC_SETCOLOUR(16764170);
                };
                break;
            }
            case 3: {
                if ((CC_FIND(comp(1934, 2), MODULO(int0, 5)) == 1)) {
                    CC_SETCOLOUR(16764170);
                };
                break;
            }
        };
    };
    return;
}