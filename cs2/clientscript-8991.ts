//
function script8991(): void {
    switch (script8984()) {
        case 1: {
            if ((varbitplayer_18730 == 1)) {
                IF_SETGRAPHIC(20142 as graphic, comp(1497, 70));  // 6awe1_vote:choice1_icon
                IF_SETGRAPHIC(20143 as graphic, comp(1497, 151));  // 6awe1_vote:choice2_icon
            } else {
                IF_SETGRAPHIC(20139 as graphic, comp(1497, 70));  // 6awe1_vote:choice1_icon
                IF_SETGRAPHIC(20140 as graphic, comp(1497, 151));  // 6awe1_vote:choice2_icon
            };
            break;
        }
        case 3: {
            if ((varbitplayer_18730 == 1)) {
                IF_SETGRAPHIC(20143 as graphic, comp(1497, 70));  // 6awe1_vote:choice1_icon
                IF_SETGRAPHIC(20144 as graphic, comp(1497, 151));  // 6awe1_vote:choice2_icon
            } else {
                IF_SETGRAPHIC(20140 as graphic, comp(1497, 70));  // 6awe1_vote:choice1_icon
                IF_SETGRAPHIC(20141 as graphic, comp(1497, 151));  // 6awe1_vote:choice2_icon
            };
            break;
        }
        default: {
            return;
        }
    };
    return;
}