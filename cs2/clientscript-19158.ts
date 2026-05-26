//
function script19158(): void {
    IF_SETHIDE(0, 84410373);
    IF_SETHIDE(0, 84410371);
    IF_SETHIDE(0, 84410419);
    IF_SETHIDE(0, 84410375);
    IF_SETHIDE(1, 84410378);
    switch (MAP_LANG()) {
        case 0: {
            if ((IF_GETGRAPHIC(84410376) == -1)) {
                IF_SETGRAPHIC(25141, 84410376);
            };
            IF_SETGRAPHIC(20602, 84410373);
            break;
        }
        case 2: {
            if ((IF_GETGRAPHIC(84410376) == -1)) {
                IF_SETGRAPHIC(25167, 84410376);
            };
            IF_SETGRAPHIC(20602, 84410373);
            break;
        }
        case 1: {
            if ((IF_GETGRAPHIC(84410376) == -1)) {
                IF_SETGRAPHIC(25165, 84410376);
            };
            IF_SETGRAPHIC(20601, 84410373);
            break;
        }
        case 3: {
            if ((IF_GETGRAPHIC(84410376) == -1)) {
                IF_SETGRAPHIC(25233, 84410376);
            };
            IF_SETGRAPHIC(20601, 84410373);
            break;
        }
    };
    return;
}