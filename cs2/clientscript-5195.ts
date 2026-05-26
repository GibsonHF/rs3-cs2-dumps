//
function script5195(): void {
    IF_SETHIDE(true, comp(1122, 57));
    IF_SETHIDE(true, comp(1122, 94));
    IF_SETHIDE(true, comp(1122, 95));
    IF_SETHIDE(true, comp(1122, 96));
    IF_SETCOLOUR(11902313, comp(1122, 59));
    IF_SETCOLOUR(7890507, comp(1122, 81));
    IF_SETCOLOUR(7890507, comp(1122, 85));
    IF_SETCOLOUR(7890507, comp(1122, 89));
    IF_SETCOLOUR(7890507, comp(1122, 93));
    IF_SETGRAPHIC(7653 as graphic, comp(1122, 50));
    IF_SETGRAPHIC(7652 as graphic, comp(1122, 79));
    IF_SETGRAPHIC(7652 as graphic, comp(1122, 83));
    IF_SETGRAPHIC(7652 as graphic, comp(1122, 87));
    IF_SETGRAPHIC(7652 as graphic, comp(1122, 91));
    IF_SETHIDE(true, comp(1122, 51));
    IF_SETHIDE(true, comp(1122, 80));
    IF_SETHIDE(true, comp(1122, 84));
    IF_SETHIDE(true, comp(1122, 88));
    IF_SETHIDE(true, comp(1122, 92));
    if ((varclient_1595 >= 1)) {
        IF_SETHIDE(false, comp(1122, 57));
        IF_SETGRAPHIC(7653 as graphic, comp(1122, 79));
        IF_SETCOLOUR(11902313, comp(1122, 81));
    };
    if ((varclient_1595 >= 2)) {
        IF_SETHIDE(false, comp(1122, 94));
        IF_SETGRAPHIC(7653 as graphic, comp(1122, 83));
        IF_SETCOLOUR(11902313, comp(1122, 85));
    };
    if ((varclient_1595 >= 3)) {
        IF_SETHIDE(false, comp(1122, 95));
        IF_SETGRAPHIC(7653 as graphic, comp(1122, 87));
        IF_SETCOLOUR(11902313, comp(1122, 89));
    };
    if ((varclient_1595 >= 4)) {
        IF_SETHIDE(false, comp(1122, 96));
        IF_SETGRAPHIC(7653 as graphic, comp(1122, 91));
        IF_SETCOLOUR(11902313, comp(1122, 93));
    };
    switch (varclient_1595) {
        case 0: {
            IF_SETHIDE(false, comp(1122, 51));
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(1122, 80));
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1122, 84));
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1122, 88));
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(1122, 92));
            break;
        }
    };
    return;
}