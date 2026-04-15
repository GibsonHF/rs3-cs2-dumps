//
function script3585(): void {
    switch (MAP_LANG()) {
        case 1: {
            stack(14194);
            stack(40108040);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            stack(14196);
            stack(40108040);
            IF_SETGRAPHIC();
            break;
        }
        case 3: {
            stack(14195);
            stack(40108040);
            IF_SETGRAPHIC();
            break;
        }
        case 6: {
            stack(14195);
            stack(40108040);
            IF_SETGRAPHIC();
            break;
        }
    };
    IF_SETHIDE(true, comp(612, 4));
    var int0 = script13431(6);
    var int1 = script13432(6);
    script3592(int1);
    var int2 = script3586(int1, int0);
    var int3 = (int1 * 64);
    IF_SETSIZE(MAX(1, int3), 9, 0, 0, comp(612, 12));
    IF_SETSIZE(MAX(1, SCALE(int2, 100, 320)), 25, 0, 0, comp(612, 33));
    IF_SETTEXT(`Current reputation: ${TOSTRING_LOCALISED((int0 / 10), 1)}/${TOSTRING_LOCALISED((script13434(6) / 10), 1)}`, comp(612, 34));
    IF_SETTEXT(`Current rank:<br>${enum_getvalue(0, 36, 15780 as cs2enum, int1)}`, comp(612, 27));
    return;
}