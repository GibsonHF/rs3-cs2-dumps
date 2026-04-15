//
function script18845(): void {
    switch (MAP_LANG()) {
        case 0: {
            stack(33749);
            stack(14090311);
            IF_SETGRAPHIC();
            break;
        }
        case 1: {
            stack(33750);
            stack(14090311);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            stack(33751);
            stack(14090311);
            IF_SETGRAPHIC();
            break;
        }
        case 3: {
            stack(33752);
            stack(14090311);
            IF_SETGRAPHIC();
            break;
        }
    };
    IF_SETNPCMODEL(31431 as npc, comp(215, 68));
    IF_SETMODELANGLE(0, 0, 100, 100, 0, 550, comp(215, 68));
    IF_SETMODELANIM(27114 as seq, comp(215, 68));
    return;
}