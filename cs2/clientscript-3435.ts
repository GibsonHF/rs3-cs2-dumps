//
function script3435(int0: number): void {
    var int1 = 13764 as graphic;
    var int2 = 13760 as graphic;
    var int3 = 13756 as graphic;
    var int4 = 13752 as graphic;
    switch (int0) {
        case 1: {
            int1 = 13767 as graphic;
            break;
        }
        case 2: {
            int2 = 13763 as graphic;
            break;
        }
        case 3: {
            int3 = 13759 as graphic;
            break;
        }
        case 4: {
            int4 = 13755 as graphic;
            break;
        }
    };
    IF_SETGRAPHIC(int1, comp(1358, 3));  // sizzling_choose_your_fate:deposit_box_graphic
    IF_SETGRAPHIC(int2, comp(1358, 2));  // sizzling_choose_your_fate:instakill_dart_graphic
    IF_SETGRAPHIC(int3, comp(1358, 1));  // sizzling_choose_your_fate:healing_box_graphic
    IF_SETGRAPHIC(int4, comp(1358, 0));  // sizzling_choose_your_fate:dodging_death_graphic
    return;
}