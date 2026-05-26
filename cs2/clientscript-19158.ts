//
function script19158(): void {
    IF_SETHIDE(false, comp(1288, 5));
    IF_SETHIDE(false, comp(1288, 3));
    IF_SETHIDE(false, comp(1288, 51));
    IF_SETHIDE(false, comp(1288, 7));
    IF_SETHIDE(true, comp(1288, 10));
    switch (MAP_LANG()) {
        case 0: {
            if ((IF_GETGRAPHIC(comp(1288, 8)) == -1 as graphic)) {
                IF_SETGRAPHIC(25141 as graphic, comp(1288, 8));
            };
            IF_SETGRAPHIC(20602 as graphic, comp(1288, 5));
            break;
        }
        case 2: {
            if ((IF_GETGRAPHIC(comp(1288, 8)) == -1 as graphic)) {
                IF_SETGRAPHIC(25167 as graphic, comp(1288, 8));
            };
            IF_SETGRAPHIC(20602 as graphic, comp(1288, 5));
            break;
        }
        case 1: {
            if ((IF_GETGRAPHIC(comp(1288, 8)) == -1 as graphic)) {
                IF_SETGRAPHIC(25165 as graphic, comp(1288, 8));
            };
            IF_SETGRAPHIC(20601 as graphic, comp(1288, 5));
            break;
        }
        case 3: {
            if ((IF_GETGRAPHIC(comp(1288, 8)) == -1 as graphic)) {
                IF_SETGRAPHIC(25233 as graphic, comp(1288, 8));
            };
            IF_SETGRAPHIC(20601 as graphic, comp(1288, 5));
            break;
        }
    };
    return;
}