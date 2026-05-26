//
function script3585(): void {
    switch (MAP_LANG()) {
        case 1: {
            IF_SETGRAPHIC(14194, 40108040);
            break;
        }
        case 2: {
            IF_SETGRAPHIC(14196, 40108040);
            break;
        }
        case 3: {
            IF_SETGRAPHIC(14195, 40108040);
            break;
        }
        case 6: {
            IF_SETGRAPHIC(14195, 40108040);
            break;
        }
    };
    IF_SETHIDE(1, 40108036);
    var int0 = script13431(6);
    var int1 = script13432(6);
    script3592(int1);
    var int2 = script3586(int1, int0);
    var int3 = (int1 * 64);
    IF_SETSIZE(MAX(1, int3), 9, 0, 0, 40108044);
    IF_SETSIZE(MAX(1, SCALE(int2, 100, 320)), 25, 0, 0, 40108065);
    IF_SETTEXT(`Current reputation: ${TOSTRING_LOCALISED((int0 / 10), 1)}/${TOSTRING_LOCALISED((script13434(6) / 10), 1)}`, 40108066);
    IF_SETTEXT(`Current rank:<br>${enum_getvalue(0, 36, 15780 as cs2enum, int1)}`, 40108059);
    return;
}