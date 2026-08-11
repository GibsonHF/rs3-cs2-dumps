//
function script3585(): void {
    switch (MAP_LANG()) {
        case 1: {
            IF_SETGRAPHIC(14194 as graphic, comp(612, 8));  // farming_rep:reward_graphic
            break;
        }
        case 2: {
            IF_SETGRAPHIC(14196 as graphic, comp(612, 8));  // farming_rep:reward_graphic
            break;
        }
        case 3: {
            IF_SETGRAPHIC(14195 as graphic, comp(612, 8));  // farming_rep:reward_graphic
            break;
        }
        case 6: {
            IF_SETGRAPHIC(14195 as graphic, comp(612, 8));  // farming_rep:reward_graphic
            break;
        }
    };
    IF_SETHIDE(true, comp(612, 4));  // farming_rep:info_layer
    var int0 = script13431(6);
    var int1 = script13432(6);
    script3592(int1);
    var int2 = script3586(int1, int0);
    var int3 = (int1 * 64);
    IF_SETSIZE(MAX(1, int3), 9, 0, 0, comp(612, 12));  // farming_rep:overall_progress_front
    IF_SETSIZE(MAX(1, SCALE(int2, 100, 320)), 25, 0, 0, comp(612, 33));  // farming_rep:progress_bar
    IF_SETTEXT(`Current reputation: ${TOSTRING_LOCALISED((int0 / 10), 1)}/${TOSTRING_LOCALISED((script13434(6) / 10), 1)}`, comp(612, 34));  // farming_rep:rep_total_text
    IF_SETTEXT(`Current rank:<br>${enum_getvalue(0, 36, 15780 as cs2enum, int1)}`, comp(612, 27));  // farming_rep:next_unlock_text
    return;
}