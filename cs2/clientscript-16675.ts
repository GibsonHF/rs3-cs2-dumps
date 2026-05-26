//
function script16675(): void {
    if (((CC_FIND(comp(1253, 3), 1) == 1) && (CC_FINDBYCATEGORY[1](comp(1253, 3), 1, 3) == 1))) {
        script16665("Opening chests will fill the bar, the more chests opened the higher chance of getting a Plague Chest.", 82116611, CC_GETID[1]());
    };
    if ((CC_FINDBYCATEGORY(comp(1253, 3), 1, 1) == 1)) {
        CC_SETSIZE(0, (30 + SCALE(script16647(), 500, 300)), 1, 0);
    };
    if ((CC_FINDBYCATEGORY(comp(1253, 3), 1, 3) == 1)) {
        CC_SETTEXT(script16650());
    };
    if (((CC_FIND(comp(1253, 3), 2) == 1) && (CC_FINDBYCATEGORY[1](comp(1253, 3), 2, 3) == 1))) {
        script16665(script16689(), 82116611, CC_GETID[1]());
    };
    if ((CC_FINDBYCATEGORY(comp(1253, 3), 2, 1) == 1)) {
        CC_SETSIZE(0, (21 + SCALE(script16648(), 15, 320)), 1, 0);
    };
    if ((CC_FINDBYCATEGORY(comp(1253, 3), 2, 3) == 1)) {
        CC_SETTEXT(script16654());
    };
    var int0 = -1 as obj;
    var int1 = 0;
    if ((CC_FINDBYCATEGORY(comp(1253, 3), 2, 4) == 1)) {
        [int0, int1] = script16653(varbitplayer_51407);
        if ((item_getparam(int0, 2531) == 2)) {
            CC_SETGRAPHIC(enum_getvalue(0, 23, 11578 as cs2enum, varbitplayer_51407));
            script16670();
        } else {
            CC_SETOBJECT(int0, int1);
            CC_SETSIZE(50, 50, 0, 0);
        };
    };
    script16674();
    if ((CC_FINDBYCATEGORY(comp(1253, 3), 3, 0) == 1)) {
        CC_SETHIDE(script6430(script16682()));
    };
    if ((CC_FINDBYCATEGORY(comp(1253, 3), 3, 1) == 1)) {
        CC_SETHIDE(script16682());
    };
    if ((CC_FINDBYCATEGORY(comp(1253, 3), 3, 2) == 1)) {
        CC_SETHIDE(script16682());
    };
    if ((CC_FINDBYCATEGORY(comp(1253, 3), 0, 0) == 1)) {
        CC_SETHIDE(script6430(script16682()));
    };
    if ((CC_FIND(comp(1253, 37), 0) == 1)) {
        CC_SETHIDE(script16682());
    };
    if ((CC_FIND(comp(1253, 37), 1) == 1)) {
        CC_SETHIDE(script6430(script16682()));
    };
    script7780();
    return;
}