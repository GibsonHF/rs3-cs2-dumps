//
function script18845(): void {
    switch (MAP_LANG()) {
        case 0: {
            IF_SETGRAPHIC(33749 as graphic, comp(215, 71));
            break;
        }
        case 1: {
            IF_SETGRAPHIC(33750 as graphic, comp(215, 71));
            break;
        }
        case 2: {
            IF_SETGRAPHIC(33751 as graphic, comp(215, 71));
            break;
        }
        case 3: {
            IF_SETGRAPHIC(33752 as graphic, comp(215, 71));
            break;
        }
    };
    IF_SETNPCMODEL(31431 as npc, comp(215, 68));
    IF_SETMODELANGLE(0, 0, 100, 100, 0, 550, comp(215, 68));
    IF_SETMODELANIM(27114 as seq, comp(215, 68));
    return;
}