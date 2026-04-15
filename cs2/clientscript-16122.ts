//
function script16122(int0: int, int1: npc, int2: seq): void {
    if ((CC_FINDBYCATEGORY(comp(869, 3), int0, 3) == 1)) {
        script16108(int1, int2, 0, script7802(int1), 0, 0, 0, 3250);
        if ((int1 == 18519 as npc)) {
            CC_SETMODELLIGHTING(script16107(), 328 as material);
        };
    };
    return;
}