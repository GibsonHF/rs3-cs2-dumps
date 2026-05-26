//
function script6160(): void {
    script6162();
    switch (MAP_LANG()) {
        case 1: {
            IF_SETGRAPHIC(10719 as graphic, comp(1273, 40));
            break;
        }
        case 2: {
            IF_SETGRAPHIC(10720 as graphic, comp(1273, 40));
            break;
        }
        case 3: {
            IF_SETGRAPHIC(10718 as graphic, comp(1273, 40));
            break;
        }
        case 6: {
            IF_SETGRAPHIC(17052 as graphic, comp(1273, 40));
            break;
        }
        default: {
            IF_SETGRAPHIC(10717 as graphic, comp(1273, 40));
            break;
        }
    };
    IF_SETONTIMER(callback(script6164, 83427341, 0), comp(1273, 13));
    if ((MAP_MEMBERS() == 0)) {
        IF_SETHIDE(false, comp(1273, 30));
    };
    return;
}