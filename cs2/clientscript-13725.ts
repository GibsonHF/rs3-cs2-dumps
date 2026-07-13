//
function script13725(int0: number, string0: string): number {
    if ((script16260() == 0)) {
        return WORLDMAP_LISTELEMENT_START(1515520, 261, 3, 0);
    };
    var int1 = IF_SETONDROPDOWNSELECT(1515536, string0, 0);
    int1 = unk11018(int1, IF_SETONDROPDOWNSELECT(1515760, string0, 0));
    if ((int0 == 1)) {
        int1 = IF_SETPLAYERHEAD_SELF(int1, WORLDMAP_LISTELEMENT_START(1515904, 0, 3, 0));
    };
    if ((int0 == 2)) {
        int1 = IF_SETPLAYERHEAD_SELF(int1, WORLDMAP_LISTELEMENT_START(1515936, 0, 3, 0));
    };
    if ((int0 == 3)) {
        int1 = IF_SETPLAYERHEAD_SELF(int1, WORLDMAP_LISTELEMENT_START(1515920, 0, 3, 0));
    };
    return int1;
}