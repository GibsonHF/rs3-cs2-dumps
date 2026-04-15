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
    stack(7653);
    stack(73531442);
    IF_SETGRAPHIC();
    stack(7652);
    stack(73531471);
    IF_SETGRAPHIC();
    stack(7652);
    stack(73531475);
    IF_SETGRAPHIC();
    stack(7652);
    stack(73531479);
    IF_SETGRAPHIC();
    stack(7652);
    stack(73531483);
    IF_SETGRAPHIC();
    IF_SETHIDE(1, 73531443);
    IF_SETHIDE(1, 73531472);
    IF_SETHIDE(1, 73531476);
    IF_SETHIDE(1, 73531480);
    IF_SETHIDE(1, 73531484);
    if ((varclient_1595 >= 1)) {
        IF_SETHIDE(false, comp(1122, 57));
        stack(7653);
        stack(73531471);
        IF_SETGRAPHIC();
        IF_SETCOLOUR(11902313, 73531473);
    };
    if ((varclient_1595 >= 2)) {
        IF_SETHIDE(false, comp(1122, 94));
        stack(7653);
        stack(73531475);
        IF_SETGRAPHIC();
        IF_SETCOLOUR(11902313, 73531477);
    };
    if ((varclient_1595 >= 3)) {
        IF_SETHIDE(false, comp(1122, 95));
        stack(7653);
        stack(73531479);
        IF_SETGRAPHIC();
        IF_SETCOLOUR(11902313, 73531481);
    };
    if ((varclient_1595 >= 4)) {
        IF_SETHIDE(false, comp(1122, 96));
        stack(7653);
        stack(73531483);
        IF_SETGRAPHIC();
        IF_SETCOLOUR(11902313, 73531485);
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