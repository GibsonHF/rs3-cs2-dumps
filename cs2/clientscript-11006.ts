//
function script11006(): void {
    CC_CREATE(comp(1311, 390), 5, 0);  // mtxmgt:pet_growth_bg
    CC_SETSIZE(6, 12, 0, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETGRAPHIC(18870 as graphic);
    CC_CREATE(comp(1311, 390), 5, 1);  // mtxmgt:pet_growth_bg
    CC_SETSIZE(78, 12, 0, 0);
    CC_SETPOSITION(6, 0, 0, 0);
    CC_SETGRAPHIC(18871 as graphic);
    CC_CREATE(comp(1311, 390), 5, 2);  // mtxmgt:pet_growth_bg
    CC_SETSIZE(6, 12, 0, 0);
    CC_SETHFLIP(true);
    CC_SETPOSITION(84, 0, 0, 0);
    CC_SETGRAPHIC(18870 as graphic);
    return;
}