//
function script18209(): unknown_int {
    var int0 = WORLDMAP_LISTELEMENT_START(667984, 0, 3, 0);
    switch (GENDER()) {
        case 0: {
            int0 = IF_SETPLAYERHEAD_SELF(int0, IF_SETPLAYERHEAD_SELF(WORLDMAP_LISTELEMENT_START(667952, 1, 3, 0)));
            break;
        }
        case 1: {
            int0 = IF_SETPLAYERHEAD_SELF(int0, IF_SETPLAYERHEAD_SELF(WORLDMAP_LISTELEMENT_START(667952, 0, 3, 0)));
            break;
        }
        case -1:
        case 2: {
            int0 = IF_SETPLAYERHEAD_SELF(int0, WORLDMAP_LISTELEMENT_START(667952, 2, 3, 0));
            break;
        }
    };
    return int0;
}