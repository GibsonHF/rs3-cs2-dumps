//
function script18861(int0: int, int1: int): unknown_int {
    if ((int1 == -1)) {
        var int1 = script18854();
    };
    var int2 = script18855(int1);
    var int3 = IF_SETPLAYERHEAD_SELF(WORLDMAP_LISTELEMENT_START(1167392, varclient_7418, 1, 0), WORLDMAP_LISTELEMENT_START(1167408, varclient_7418, 1, 0));
    var int4 = IF_SETPLAYERHEAD_SELF(WORLDMAP_LISTELEMENT_START(1167392, int2, 5, 0), WORLDMAP_LISTELEMENT_START(1167408, int2, 5, 0));
    var int5 = IF_SETPLAYERHEAD_SELF(IF_SETPLAYERHEAD_SELF(int3), IF_SETPLAYERHEAD_SELF(int4));
    var int6 = IF_SETPLAYERHEAD_SELF(int5, WORLDMAP_LISTELEMENT_START(1167376, int0, 3, 0));
    var int7 = -1;
    var int8 = -1;
    var int9 = -1;
    if ((int0 == 5)) {
        int7 = WORLDMAP_LISTELEMENT_START(1167760, 100, 3, 0);
        int8 = WORLDMAP_LISTELEMENT_START(1167760, MAP_LANG(), 3, 0);
        int9 = IF_SETPLAYERHEAD_SELF(IF_SETPLAYERHEAD_SELF(int7), IF_SETPLAYERHEAD_SELF(int8));
        int6 = IF_SETPLAYERHEAD_SELF(int6, IF_SETPLAYERHEAD_SELF(int9));
    };
    return int6;
}