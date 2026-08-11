//
function script17824(): void {
    switch (MAP_LANG()) {
        case 0: {
            IF_SETGRAPHIC(1548 as graphic, comp(1023, 3));  // trh187_overlay:title
            break;
        }
        case 1: {
            IF_SETGRAPHIC(1549 as graphic, comp(1023, 3));  // trh187_overlay:title
            break;
        }
        case 2: {
            IF_SETGRAPHIC(1550 as graphic, comp(1023, 3));  // trh187_overlay:title
            break;
        }
        case 3: {
            IF_SETGRAPHIC(1551 as graphic, comp(1023, 3));  // trh187_overlay:title
            break;
        }
    };
    IF_SETHIDE(false, comp(1023, 0));  // trh187_overlay:splash_screen
    IF_SETHIDE(true, comp(1023, 16));  // trh187_overlay:universe
    IF_SETTEXT("<col=00FFFF>NEW Deadly Highwayman's (Master) Outfit</col> and <col=89CFF0>Deadly Highwayman's Outfits</col>. Available from the Assassin Chest!", comp(1023, 4));  // trh187_overlay:splash_screen_desc
    IF_SETTEXT("", comp(1023, 15));  // trh187_overlay:wildcards_desc
    IF_SETTEXT("Find the <col=8d52e5>Deadly Highwayman</col> for <col=8d52e5>Rare Walk Override, Auras and more!", comp(1023, 10));  // trh187_overlay:splash_reward_desc
    IF_SETNPCMODEL(31871 as npc, comp(1023, 5));  // trh187_overlay:assassin_1
    IF_SETMODELANGLE(0, 0, 0, 150, 0, 500, comp(1023, 5));  // trh187_overlay:assassin_1
    IF_SETMODELANIM(27102 as seq, comp(1023, 5));  // trh187_overlay:assassin_1
    IF_SETMODELZOOM(600, comp(1023, 5));  // trh187_overlay:assassin_1
    IF_SETNPCMODEL(31648 as npc, comp(1023, 7));  // trh187_overlay:assassin_3
    IF_SETMODELANGLE(-80, -10, 0, 0, 0, 500, comp(1023, 7));  // trh187_overlay:assassin_3
    IF_SETMODELANIM(31343 as seq, comp(1023, 7));  // trh187_overlay:assassin_3
    IF_SETMODELZOOM((600 - 25), comp(1023, 7));  // trh187_overlay:assassin_3
    IF_SETNPCMODEL(31874 as npc, comp(1023, 8));  // trh187_overlay:assassin_4
    IF_SETMODELANGLE(0, 0, 0, 1900, 0, 500, comp(1023, 8));  // trh187_overlay:assassin_4
    IF_SETMODELANIM(27114 as seq, comp(1023, 8));  // trh187_overlay:assassin_4
    IF_SETMODELZOOM(600, comp(1023, 8));  // trh187_overlay:assassin_4
    return;
}