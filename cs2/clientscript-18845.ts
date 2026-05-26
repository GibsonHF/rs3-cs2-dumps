//
function script18845(): void {
    switch (MAP_LANG()) {
        case 0: {
            IF_SETGRAPHIC(33749, 14090311);
            break;
        }
        case 1: {
            IF_SETGRAPHIC(33750, 14090311);
            break;
        }
        case 2: {
            IF_SETGRAPHIC(33751, 14090311);
            break;
        }
        case 3: {
            IF_SETGRAPHIC(33752, 14090311);
            break;
        }
    };
    IF_SETNPCMODEL(31431, 14090308);
    IF_SETMODELANGLE(0, 0, 100, 100, 0, 550, 14090308);
    IF_SETMODELANIM(27114, 14090308);
    return;
}