//
function script17824(): void {
    switch (MAP_LANG()) {
        case 0: {
            stack(1548);
            stack(67043331);
            IF_SETGRAPHIC();
            break;
        }
        case 1: {
            stack(1549);
            stack(67043331);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            stack(1550);
            stack(67043331);
            IF_SETGRAPHIC();
            break;
        }
        case 3: {
            stack(1551);
            stack(67043331);
            IF_SETGRAPHIC();
            break;
        }
    };
    IF_SETHIDE(false, comp(1023, 0));
    IF_SETHIDE(true, comp(1023, 16));
    IF_SETTEXT("<col=00FFFF>NEW Deadly Highwayman's (Master) Outfit</col> and <col=89CFF0>Deadly Highwayman's Outfits</col>. Available from the Assassin Chest!", comp(1023, 4));
    IF_SETTEXT("", comp(1023, 15));
    IF_SETTEXT("Find the <col=8d52e5>Deadly Highwayman</col> for <col=8d52e5>Rare Walk Override, Auras and more!", comp(1023, 10));
    IF_SETNPCMODEL(31871 as npc, comp(1023, 5));
    IF_SETMODELANGLE(0, 0, 0, 150, 0, 500, comp(1023, 5));
    IF_SETMODELANIM(27102 as seq, comp(1023, 5));
    IF_SETMODELZOOM(600, comp(1023, 5));
    IF_SETNPCMODEL(31648 as npc, comp(1023, 7));
    IF_SETMODELANGLE(-80, -10, 0, 0, 0, 500, comp(1023, 7));
    IF_SETMODELANIM(31343 as seq, comp(1023, 7));
    IF_SETMODELZOOM((600 - 25), comp(1023, 7));
    IF_SETNPCMODEL(31874 as npc, comp(1023, 8));
    IF_SETMODELANGLE(0, 0, 0, 1900, 0, 500, comp(1023, 8));
    IF_SETMODELANIM(27114 as seq, comp(1023, 8));
    IF_SETMODELZOOM(600, comp(1023, 8));
    return;
}