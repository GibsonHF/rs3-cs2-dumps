//
function script11008(): void {
    CC_CREATE(comp(1311, 405), 5, 0);  // mtxmgt:pet_food_bonus_bg
    CC_SETSIZE(6, 12, 0, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETGRAPHIC(18870 as graphic);
    CC_CREATE(comp(1311, 405), 5, 1);  // mtxmgt:pet_food_bonus_bg
    CC_SETSIZE(68, 12, 0, 0);
    CC_SETPOSITION(6, 0, 0, 0);
    CC_SETGRAPHIC(18871 as graphic);
    CC_CREATE(comp(1311, 405), 5, 2);  // mtxmgt:pet_food_bonus_bg
    CC_SETSIZE(6, 12, 0, 0);
    CC_SETHFLIP(true);
    CC_SETPOSITION(84, 0, 0, 0);
    CC_SETGRAPHIC(18870 as graphic);
    return;
}