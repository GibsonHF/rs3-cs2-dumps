//
function script6766(): void {
    switch (MAP_LANG()) {
        case 0: {
            IF_SETGRAPHIC(32498, 41353287);
            break;
        }
        case 1: {
            IF_SETGRAPHIC(32499, 41353287);
            break;
        }
        case 2: {
            IF_SETGRAPHIC(32500, 41353287);
            break;
        }
        case 3: {
            IF_SETGRAPHIC(32501, 41353287);
            break;
        }
    };
    IF_SETHIDE(0, 41353216);
    IF_SETHIDE(1, 41353217);
    script16509(7060, 41353294, 41353296, 41353297, 41353295, 50, -1);
    IF_SETNPCMODEL(26126, 41353292);
    IF_SETMODELANGLE(0, 0, 0, 0, 0, 550, 41353292);
    IF_SETMODELANIM(18019, 41353292);
    IF_SETNPCMODEL(21799, 41353293);
    IF_SETMODELANGLE(0, 0, 0, 0, 0, 300, 41353293);
    IF_SETMODELANIM(27477, 41353293);
    return;
}