//
function script17219(int0: number): void {
    var int1 = 0;
    var int2 = -1 as graphic;
    switch (int0) {
        case 0: {
            IF_SETHIDE(false, comp(1030, 25));  // quest_fort_casefile:tab_suspects_layer
            int2 = 10519 as graphic;
            int1 = IF_GETX(comp(1030, 25));  // quest_fort_casefile:tab_suspects_layer
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(1030, 27));  // quest_fort_casefile:tab_evidence_part1_layer
            int2 = 10516 as graphic;
            int1 = IF_GETX(comp(1030, 27));  // quest_fort_casefile:tab_evidence_part1_layer
            break;
        }
        case 2: {
            if ((script17214() == 0)) {
                IF_SETHIDE(true, comp(1030, 29));  // quest_fort_casefile:tab_evidence_part2_layer
                return;
            };
            IF_SETHIDE(false, comp(1030, 29));  // quest_fort_casefile:tab_evidence_part2_layer
            int2 = 10516 as graphic;
            int1 = IF_GETX(comp(1030, 29));  // quest_fort_casefile:tab_evidence_part2_layer
            break;
        }
    };
    IF_SETGRAPHIC(int2, comp(1030, 31));  // quest_fort_casefile:tab_active_bookmark_graphic
    IF_SETPOSITION(int1, 0, 0, 0, comp(1030, 31));  // quest_fort_casefile:tab_active_bookmark_graphic
    if ((int2 != -1 as graphic)) {
        script17224(int0);
    };
    return;
}