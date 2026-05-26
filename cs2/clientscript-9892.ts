//
function script9892(int0: number): void {
    CC_DELETEALL(int0);
    var int1 = 0;
    while ((int1 < 8)) {
        CC_CREATE(int0, 5, int1);
        if ((int1 == 3)) {
            CC_SETPOSITION(0, 0, 2, 0);
            CC_SETSIZE(31, 0, 0, 1);
            CC_SETGRAPHIC(1245);
            CC_SETTILING(1);
        };
        int1 = (int1 + 1);
    };
    CC_CREATE(int0, 4, 8);
    CC_SETTEXTFONT(26);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETCOLOUR(65280);
    CC_SETTEXTSHADOW(1);
    CC_SETPOSITION(30, 13, 2, 0);
    CC_SETSIZE(30, 14, 1, 0);
    return;
}