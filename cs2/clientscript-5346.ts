//
function script5346(): void {
    IF_SETTEXT(inttostring(varbitplayer_5545, 10), 77332564);
    IF_SETTEXT(inttostring(varclient_1732, 10), 77332550);
    IF_SETTEXT(`${inttostring(varbitplayer_5557, 10)}%`, 77332536);
    if ((varclient_1731 != 1)) {
        IF_SETTEXT(`${inttostring(varclient_1731, 10)} sets`, 77332557);
    } else {
        IF_SETTEXT("1 set", 77332557);
    };
    switch (varclient_1731) {
        case 0: {
            IF_SETCOLOUR(12857645, 77332557);
            break;
        }
        case 1: {
            IF_SETCOLOUR(12857645, 77332557);
            break;
        }
        case 2: {
            IF_SETCOLOUR(13681696, 77332557);
            break;
        }
        case 3: {
            IF_SETCOLOUR(13681696, 77332557);
            break;
        }
        case 4: {
            IF_SETCOLOUR(13681696, 77332557);
            break;
        }
        case 5: {
            IF_SETCOLOUR(2672721, 77332557);
            break;
        }
        case 6: {
            IF_SETCOLOUR(2672721, 77332557);
            break;
        }
    };
    if ((varclient_1732 < 3)) {
        IF_SETCOLOUR(12857645, 77332550);
    } else {
        IF_SETCOLOUR(2672721, 77332550);
    };
    switch (varclient_1730) {
        case 0: {
            IF_SETTEXT("None", 77332543);
            IF_SETCOLOUR(12857645, 77332543);
            break;
        }
        case 1: {
            IF_SETTEXT("A", 77332543);
            IF_SETCOLOUR(13681696, 77332543);
            break;
        }
        case 2: {
            IF_SETTEXT("B", 77332543);
            IF_SETCOLOUR(13681696, 77332543);
            break;
        }
        case 3: {
            IF_SETTEXT("A & B", 77332543);
            IF_SETCOLOUR(2672721, 77332543);
            break;
        }
    };
    IF_SETTEXT(`${inttostring(varbitplayer_5548, 10)} mins`, 77332529);
    if ((varbitplayer_5548 < 4)) {
        IF_SETCOLOUR(12857645, 77332529);
    } else {
        IF_SETCOLOUR(2672721, 77332529);
    };
    if ((varclient_1733 == 0)) {
        IF_SETGRAPHIC(3302, 77332510);
        IF_SETHIDE(0, 77332491);
    } else {
        IF_SETGRAPHIC(3303, 77332510);
        IF_SETHIDE(1, 77332491);
    };
    return;
}