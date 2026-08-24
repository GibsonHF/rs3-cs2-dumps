//
function script13571(int0: number): void {
    CC_CREATE(comp(517, 203), 4, int0);  // bank:tab_separators
    CC_SETSIZE(0, 12, 1, 0);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXTSHADOW(true);
    CC_CREATE(comp(517, 204), 9, (int0 * 2));  // bank:tab_dividers
    CC_SETSIZE(0, 0, 1, 0);
    script11024(7);
    CC_CREATE(comp(517, 204), 9, ((int0 * 2) + 1));  // bank:tab_dividers
    CC_SETSIZE(0, 0, 1, 0);
    script11024(8);
    return;
}