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
    IF_SETHIDE(0, 67043328);
    IF_SETHIDE(1, 67043344);
    IF_SETTEXT("<col=00FFFF>NEW Deadly Highwayman's (Master) Outfit</col> and <col=89CFF0>Deadly Highwayman's Outfits</col>. Available from the Assassin Chest!", 67043332);
    IF_SETTEXT("", 67043343);
    IF_SETTEXT("Find the <col=8d52e5>Deadly Highwayman</col> for <col=8d52e5>Rare Walk Override, Auras and more!", 67043338);
    IF_SETNPCMODEL(31871, 67043333);
    IF_SETMODELANGLE(0, 0, 0, 150, 0, 500, 67043333);
    IF_SETMODELANIM(27102, 67043333);
    IF_SETMODELZOOM(600, 67043333);
    IF_SETNPCMODEL(31648, 67043335);
    IF_SETMODELANGLE(-80, -10, 0, 0, 0, 500, 67043335);
    IF_SETMODELANIM(31343, 67043335);
    IF_SETMODELZOOM((600 - 25), 67043335);
    IF_SETNPCMODEL(31874, 67043336);
    IF_SETMODELANGLE(0, 0, 0, 1900, 0, 500, 67043336);
    IF_SETMODELANIM(27114, 67043336);
    IF_SETMODELZOOM(600, 67043336);
    return;
}