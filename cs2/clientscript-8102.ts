//
function script8102(int0: maparea): void {
    if ((int0 == 28 as maparea)) {
        WORLDMAP_3DVIEW_SETLODDISTANCE(0, ((125000 + 167000) / 2));
        WORLDMAP_3DVIEW_SETLODDISTANCE(1, (500000 * 2));
        WORLDMAP_3DVIEW_SETLODDISTANCE(2, (500000 * 3));
    } else {
        WORLDMAP_3DVIEW_SETLODDISTANCE(0, (500000 * 2));
        WORLDMAP_3DVIEW_SETLODDISTANCE(1, (500000 * 3));
        WORLDMAP_3DVIEW_SETLODDISTANCE(2, (500000 * 4));
    };
    return;
}