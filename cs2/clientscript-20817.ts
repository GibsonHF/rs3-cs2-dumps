//
function script20817(int0: number, int1: number): number {
    var int2 = WORLDMAP_LISTELEMENT_START(1515520, 0, 4, 0);
    int2 = IF_SETPLAYERHEAD_SELF(int2, WORLDMAP_LISTELEMENT_START(1515664, int0, 5, 0));
    int2 = IF_SETPLAYERHEAD_SELF(int2, WORLDMAP_LISTELEMENT_START(1515664, int1, 2, 0));
    return int2;
}