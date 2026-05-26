//
function script5195(): void {
    IF_SETHIDE(1, 73531449);
    IF_SETHIDE(1, 73531486);
    IF_SETHIDE(1, 73531487);
    IF_SETHIDE(1, 73531488);
    IF_SETCOLOUR(11902313, 73531451);
    IF_SETCOLOUR(7890507, 73531473);
    IF_SETCOLOUR(7890507, 73531477);
    IF_SETCOLOUR(7890507, 73531481);
    IF_SETCOLOUR(7890507, 73531485);
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
        IF_SETHIDE(0, 73531449);
        stack(7653);
        stack(73531471);
        IF_SETGRAPHIC();
        IF_SETCOLOUR(11902313, 73531473);
    };
    if ((varclient_1595 >= 2)) {
        IF_SETHIDE(0, 73531486);
        stack(7653);
        stack(73531475);
        IF_SETGRAPHIC();
        IF_SETCOLOUR(11902313, 73531477);
    };
    if ((varclient_1595 >= 3)) {
        IF_SETHIDE(0, 73531487);
        stack(7653);
        stack(73531479);
        IF_SETGRAPHIC();
        IF_SETCOLOUR(11902313, 73531481);
    };
    if ((varclient_1595 >= 4)) {
        IF_SETHIDE(0, 73531488);
        stack(7653);
        stack(73531483);
        IF_SETGRAPHIC();
        IF_SETCOLOUR(11902313, 73531485);
    };
    switch (varclient_1595) {
        case 0: {
            IF_SETHIDE(0, 73531443);
            break;
        }
        case 1: {
            IF_SETHIDE(0, 73531472);
            break;
        }
        case 2: {
            IF_SETHIDE(0, 73531476);
            break;
        }
        case 3: {
            IF_SETHIDE(0, 73531480);
            break;
        }
        case 4: {
            IF_SETHIDE(0, 73531484);
            break;
        }
    };
    return;
}