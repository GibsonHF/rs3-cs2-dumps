//
function script13034(int0: number): void {
    switch (MAP_LANG()) {
        case 1: {
            IF_SETGRAPHIC(29369 as graphic, comp(1731, 1));  // bxp_countdown:background
            break;
        }
        case 2: {
            IF_SETGRAPHIC(29370 as graphic, comp(1731, 1));  // bxp_countdown:background
            break;
        }
        case 3: {
            IF_SETGRAPHIC(29371 as graphic, comp(1731, 1));  // bxp_countdown:background
            break;
        }
        default: {
            IF_SETGRAPHIC(9392 as graphic, comp(1731, 1));  // bxp_countdown:background
            break;
        }
    };
    varplayer_9116 = int0;
    script13036();
    return;
}