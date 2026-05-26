//
function script88(int0: number): number {
    var int1 = -1;
    switch (int0) {
        case 1: {
            int1 = WORLDMAP_LISTELEMENT_START(1470560, 1, 3, 0);
            break;
        }
        case 2:
        case 3: {
            int1 = WORLDMAP_LISTELEMENT_START(1470560, 2, 3, 0);
            break;
        }
        default: {
            unk11017(`PVM portal ID ${inttostring(int0, 10)} is missing from switch case.`);
            break;
        }
    };
    return int1;
}