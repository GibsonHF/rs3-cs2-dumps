//
function script941(int0: unknown_int): void {
    IF_SETHIDE(true, comp(193, 24));
    varclient_2582 = 0;
    varclient_2583 = 0;
    varclient_2584 = 0;
    varclient_2585 = 0;
    varclient_2586 = 0;
    varclient_2587 = 0;
    varclient_2588 = 0;
    varclient_2589 = 0;
    varclient_2590 = 0;
    varclient_2591 = 0;
    varclient_2592 = 0;
    varclient_2593 = 0;
    varclient_2594 = 0;
    varclient_2595 = 0;
    varclient_2596 = 0;
    varclient_2597 = 0;
    varclient_2598 = 0;
    varclient_2599 = 0;
    varclient_2600 = 0;
    if (((((varbitplayer_16863 >= 70) && (varbitplayer_16863 < 100)) && (INV_TOTAL(93 as inv, 26114 as obj) > 0)) && (INV_TOTAL(93 as inv, 26114 as obj) > 0))) {
        IF_SETHIDE(false, comp(193, 154));
        switch (MAP_LANG()) {
            case 1: {
                stack(15348);
                stack(12648605);
                IF_SETGRAPHIC();
                break;
            }
            case 2: {
                stack(15349);
                stack(12648605);
                IF_SETGRAPHIC();
                break;
            }
            default: {
                stack(15345);
                stack(12648605);
                IF_SETGRAPHIC();
                break;
            }
        };
    } else {
        IF_SETHIDE(true, comp(193, 154));
    };
    return;
}