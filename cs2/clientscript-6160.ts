//
function script6160(): void {
    script6162();
    switch (MAP_LANG()) {
        case 1: {
            IF_SETGRAPHIC(10719, 83427368);
            break;
        }
        case 2: {
            IF_SETGRAPHIC(10720, 83427368);
            break;
        }
        case 3: {
            IF_SETGRAPHIC(10718, 83427368);
            break;
        }
        case 6: {
            IF_SETGRAPHIC(17052, 83427368);
            break;
        }
        default: {
            IF_SETGRAPHIC(10717, 83427368);
            break;
        }
    };
    IF_SETONTIMER(callback(script6164, 83427341, 0), 83427341);
    if ((MAP_MEMBERS() == 0)) {
        IF_SETHIDE(0, 83427358);
    };
    return;
}