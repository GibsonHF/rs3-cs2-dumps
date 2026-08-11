//
function script941(int0: number): void {
    IF_SETHIDE(true, comp(193, 24));  // ariane1_organ_keyboard:basement_key
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
    if ((varbitplayer_16863 >= 70)) {
        if ((varbitplayer_16863 < 100)) {
            if ((INV_TOTAL(93 as inv, 26114 as obj) > 0)) {
                if ((INV_TOTAL(93 as inv, 26114 as obj) > 0)) {
                    IF_SETHIDE(false, comp(193, 154));  // ariane1_organ_keyboard:pages_layer
                    switch (MAP_LANG()) {
                        case 1: {
                            IF_SETGRAPHIC(15348 as graphic, comp(193, 157));  // ariane1_organ_keyboard:pages_graphic
                            break;
                        }
                        case 2: {
                            IF_SETGRAPHIC(15349 as graphic, comp(193, 157));  // ariane1_organ_keyboard:pages_graphic
                            break;
                        }
                        default: {
                            IF_SETGRAPHIC(15345 as graphic, comp(193, 157));  // ariane1_organ_keyboard:pages_graphic
                            break;
                        }
                    };
                } else {
                    IF_SETHIDE(true, comp(193, 154));  // ariane1_organ_keyboard:pages_layer
                };
            } else {
                IF_SETHIDE(true, comp(193, 154));  // ariane1_organ_keyboard:pages_layer
            };
        } else {
            IF_SETHIDE(true, comp(193, 154));  // ariane1_organ_keyboard:pages_layer
        };
    } else {
        IF_SETHIDE(true, comp(193, 154));  // ariane1_organ_keyboard:pages_layer
    };
    return;
}