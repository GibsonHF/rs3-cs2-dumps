//
function script5346(): void {
    IF_SETTEXT(inttostring(varbitplayer_5545, 10), comp(1180, 84));
    IF_SETTEXT(inttostring(varclient_1732, 10), comp(1180, 70));
    IF_SETTEXT(`${inttostring(varbitplayer_5557, 10)}%`, comp(1180, 56));
    if ((varclient_1731 != 1)) {
        IF_SETTEXT(`${inttostring(varclient_1731, 10)} sets`, comp(1180, 77));
    } else {
        IF_SETTEXT("1 set", comp(1180, 77));
    };
    switch (varclient_1731) {
        case 0: {
            IF_SETCOLOUR(12857645, comp(1180, 77));
            break;
        }
        case 1: {
            IF_SETCOLOUR(12857645, comp(1180, 77));
            break;
        }
        case 2: {
            IF_SETCOLOUR(13681696, comp(1180, 77));
            break;
        }
        case 3: {
            IF_SETCOLOUR(13681696, comp(1180, 77));
            break;
        }
        case 4: {
            IF_SETCOLOUR(13681696, comp(1180, 77));
            break;
        }
        case 5: {
            IF_SETCOLOUR(2672721, comp(1180, 77));
            break;
        }
        case 6: {
            IF_SETCOLOUR(2672721, comp(1180, 77));
            break;
        }
    };
    if ((varclient_1732 < 3)) {
        IF_SETCOLOUR(12857645, comp(1180, 70));
    } else {
        IF_SETCOLOUR(2672721, comp(1180, 70));
    };
    switch (varclient_1730) {
        case 0: {
            IF_SETTEXT("None", comp(1180, 63));
            IF_SETCOLOUR(12857645, comp(1180, 63));
            break;
        }
        case 1: {
            IF_SETTEXT("A", comp(1180, 63));
            IF_SETCOLOUR(13681696, comp(1180, 63));
            break;
        }
        case 2: {
            IF_SETTEXT("B", comp(1180, 63));
            IF_SETCOLOUR(13681696, comp(1180, 63));
            break;
        }
        case 3: {
            IF_SETTEXT("A & B", comp(1180, 63));
            IF_SETCOLOUR(2672721, comp(1180, 63));
            break;
        }
    };
    IF_SETTEXT(`${inttostring(varbitplayer_5548, 10)} mins`, comp(1180, 49));
    if ((varbitplayer_5548 < 4)) {
        IF_SETCOLOUR(12857645, comp(1180, 49));
    } else {
        IF_SETCOLOUR(2672721, comp(1180, 49));
    };
    if ((varclient_1733 == 0)) {
        stack(3302);
        stack(77332510);
        IF_SETGRAPHIC();
        IF_SETHIDE(0, 77332491);
    } else {
        stack(3303);
        stack(77332510);
        IF_SETGRAPHIC();
        IF_SETHIDE(1, 77332491);
    };
    return;
}