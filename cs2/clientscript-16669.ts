//
function script16669(): void {
    script14391(comp(1253, 3), 2, 10, -15, 2, 1, 143, 354, 0, 0);
    script16612(`You are ${script16654()} chests towards unlocking:<br>${script16655()}`);
    script7920(comp(1253, 3), 2, 0, 0, 2, 0, 0, 1, 1, 0, 0, 1, 1, 19729 as graphic);
    script15939(comp(1253, 3), 2, 1, 0, 2, 0, 0, 1, 2, 0, (21 + SCALE(script16648(), 15, 320)), 1, 0);
    script7920(comp(1253, 3), 2, 2, 2, 1, 0, 0, 1, 2, 143, 354, 0, 0, 19730 as graphic);
    script10507(comp(1253, 3), 2, 3, 0, 2, 0, 1, 1, 1, 50, 50, 0, 0, 4699 as dbrow, script16654());
    CC_SETTEXTFONT(57 as fontmetrics);
    CC_SETCOLOUR(16777215);
    var int0 = -1 as obj;
    var int1 = 0;
    [int0, int1] = script16653(varbitplayer_51407);
    script7920(comp(1253, 3), 2, 4, 0, 2, 0, -119, 1, 1, 50, 50, 0, 0, -1 as graphic);
    if ((item_getparam(int0, 2531) == 2)) {
        CC_SETGRAPHIC(enum_getvalue(0, 23, 11578 as cs2enum, varbitplayer_51407));
        script16670();
    } else {
        CC_SETOBJECT(int0, int1);
        CC_SETSIZE(50, 50, 0, 0);
    };
    if (((CC_FIND(comp(1253, 3), 2) == 1) && (CC_FINDBYCATEGORY[1](comp(1253, 3), 2, 3) == 1))) {
        script16665(script16689(), 82116611, CC_GETID[1]());
    };
    return;
}