//
function script6160(): void {
    script6162();
    switch (MAP_LANG()) {
        case 1: {
            stack(10719);
            stack(83427368);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            stack(10720);
            stack(83427368);
            IF_SETGRAPHIC();
            break;
        }
        case 3: {
            stack(10718);
            stack(83427368);
            IF_SETGRAPHIC();
            break;
        }
        case 6: {
            stack(17052);
            stack(83427368);
            IF_SETGRAPHIC();
            break;
        }
        default: {
            stack(10717);
            stack(83427368);
            IF_SETGRAPHIC();
            break;
        }
    };
    IF_SETONTIMER(callback(script6164, 83427341, 0), comp(1273, 13));
    if ((MAP_MEMBERS() == 0)) {
        IF_SETHIDE(false, comp(1273, 30));
    };
    return;
}