//
function script1291(): void {
    switch (MAP_LANG()) {
        case 1: {
            IF_SETGRAPHIC(20382, 8585230);
            IF_SETGRAPHIC(20383, 8585233);
            break;
        }
        case 3: {
            IF_SETGRAPHIC(20379, 8585230);
            IF_SETGRAPHIC(20380, 8585233);
            break;
        }
        case 6: {
            IF_SETGRAPHIC(20373, 8585230);
            IF_SETGRAPHIC(20374, 8585233);
            break;
        }
        default: {
            IF_SETGRAPHIC(20370, 8585230);
            IF_SETGRAPHIC(20371, 8585233);
            break;
        }
    };
    return;
}