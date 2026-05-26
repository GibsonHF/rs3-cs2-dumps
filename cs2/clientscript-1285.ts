//
function script1285(): void {
    switch (varbitplayer_39986) {
        case 2: {
            IF_SETGRAPHIC(33116 as graphic, comp(501, 10));
            IF_SETGRAPHIC(33114 as graphic, comp(501, 12));
            IF_SETGRAPHIC(33111 as graphic, comp(501, 14));
            IF_SETHIDE(true, comp(501, 6));
            IF_SETHIDE(true, comp(501, 11));
            IF_SETHIDE(false, comp(501, 13));
            break;
        }
        case 3: {
            IF_SETGRAPHIC(33116 as graphic, comp(501, 10));
            IF_SETGRAPHIC(33113 as graphic, comp(501, 12));
            IF_SETGRAPHIC(33112 as graphic, comp(501, 14));
            IF_SETHIDE(true, comp(501, 6));
            IF_SETHIDE(false, comp(501, 11));
            IF_SETHIDE(true, comp(501, 13));
            break;
        }
        case 4: {
            IF_SETGRAPHIC(33115 as graphic, comp(501, 10));
            IF_SETGRAPHIC(33114 as graphic, comp(501, 12));
            IF_SETGRAPHIC(33112 as graphic, comp(501, 14));
            IF_SETHIDE(false, comp(501, 6));
            IF_SETHIDE(true, comp(501, 11));
            IF_SETHIDE(true, comp(501, 13));
            break;
        }
        default: {
            IF_SETGRAPHIC(33116 as graphic, comp(501, 10));
            IF_SETGRAPHIC(33114 as graphic, comp(501, 12));
            IF_SETGRAPHIC(33112 as graphic, comp(501, 14));
            IF_SETHIDE(true, comp(501, 6));
            IF_SETHIDE(true, comp(501, 11));
            IF_SETHIDE(true, comp(501, 13));
            break;
        }
    };
    switch (varbitplayer_39988) {
        case 2: {
            IF_SETGRAPHIC(33108 as graphic, comp(501, 22));
            IF_SETGRAPHIC(33106 as graphic, comp(501, 24));
            IF_SETGRAPHIC(33109 as graphic, comp(501, 26));
            IF_SETHIDE(true, comp(501, 21));
            IF_SETHIDE(true, comp(501, 23));
            IF_SETHIDE(false, comp(501, 25));
            break;
        }
        case 3: {
            IF_SETGRAPHIC(33108 as graphic, comp(501, 22));
            IF_SETGRAPHIC(33105 as graphic, comp(501, 24));
            IF_SETGRAPHIC(33110 as graphic, comp(501, 26));
            IF_SETHIDE(true, comp(501, 21));
            IF_SETHIDE(false, comp(501, 23));
            IF_SETHIDE(true, comp(501, 25));
            break;
        }
        case 4: {
            IF_SETGRAPHIC(33107 as graphic, comp(501, 22));
            IF_SETGRAPHIC(33106 as graphic, comp(501, 24));
            IF_SETGRAPHIC(33110 as graphic, comp(501, 26));
            IF_SETHIDE(false, comp(501, 21));
            IF_SETHIDE(true, comp(501, 23));
            IF_SETHIDE(true, comp(501, 25));
            break;
        }
        default: {
            IF_SETGRAPHIC(33108 as graphic, comp(501, 22));
            IF_SETGRAPHIC(33106 as graphic, comp(501, 24));
            IF_SETGRAPHIC(33110 as graphic, comp(501, 26));
            IF_SETHIDE(true, comp(501, 21));
            IF_SETHIDE(true, comp(501, 23));
            IF_SETHIDE(true, comp(501, 25));
            break;
        }
    };
    return;
}