//
function script16617(): void {
    var int0 = 0;
    script15938(comp(1253, 3), 0, 2, 10, -10, 2, 1, 242, 94, 0, 0);
    script7920(comp(1253, 3), 3, int0++, 0, 2, 0, 0, 1, 1, 0, 0, 1, 1, 19520 as graphic);
    script10507(comp(1253, 3), 3, int0++, 0, 2, 0, 4, 1, 0, 60, 42, 1, 0, 2100 as dbrow, "Purchase a random modifier for 15 minutes");
    CC_SETCOLOUR(8363435);
    CC_SETTEXTFONT(169 as fontmetrics);
    script7863(comp(1253, 3), 3, int0++, 0, 2, 0, 10, 1, 2, 40, 30, 1, 0, 4476 as dbrow, TOSTRING_LOCALISED(750, 1));
    CC_SETOP(1, "Reroll");
    CC_SETONOP(callback(script16619));
    script7920(82116611, 3, int0++, 0, 2, 7, 4, 0, 2, 45, 45, 0, 0, 14157);
    return;
}