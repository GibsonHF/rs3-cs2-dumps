//
function script18440(int0: struct): void {
    switch (MAP_LANG()) {
        case 0: {
            IF_SETHIDE(false, comp(1280, 3));
            IF_SETHIDE(false, comp(1280, 4));
            IF_SETHIDE(true, comp(1280, 5));
            IF_SETTEXT("Birthday Buff", comp(1280, 3));
            IF_SETTEXT("Bonanza", comp(1280, 4));
            break;
        }
        default: {
            IF_SETHIDE(true, comp(1280, 3));
            IF_SETHIDE(true, comp(1280, 4));
            IF_SETHIDE(false, comp(1280, 5));
            IF_SETTEXT(struct_getparam(int0, 6135), comp(1280, 5));
            if ((MAP_LANG() == 1)) {
                IF_SETTEXTFONT(58 as fontmetrics, comp(1280, 5));
            } else {
                script16925(comp(1280, 5), 16355 as cs2enum, 3, 28, 14);
            };
            break;
        }
    };
    return;
}