//
function script99(): void {
    var int0 = 0;
    if ((varbitplayer_10049 < 5)) {
        IF_SETSIZE(160, 30, 0, 0, comp(629, 6));  // pnr_family_conflict:pnr_family_conflict_progress2
        if ((IF_FIND(comp(629, 5)) == 1)) {  // pnr_family_conflict:pnr_family_conflict_progress1
            int0 = (varbitplayer_10049 * 32);
            if ((CC_GETWIDTH() < int0)) {
                IF_SETSIZE((CC_GETWIDTH() + 1), 30, 0, 0, comp(629, 5));  // pnr_family_conflict:pnr_family_conflict_progress1
            } else if ((CC_GETWIDTH() > int0)) {
                IF_SETSIZE((CC_GETWIDTH() - 1), 30, 0, 0, comp(629, 5));  // pnr_family_conflict:pnr_family_conflict_progress1
            };
        };
    } else if ((varbitplayer_10049 > 5)) {
        IF_SETSIZE(160, 30, 0, 0, comp(629, 5));  // pnr_family_conflict:pnr_family_conflict_progress1
        if ((IF_FIND(comp(629, 6)) == 1)) {  // pnr_family_conflict:pnr_family_conflict_progress2
            int0 = ((10 - varbitplayer_10049) * 32);
            if ((CC_GETWIDTH() < int0)) {
                IF_SETSIZE((CC_GETWIDTH() + 1), 30, 0, 0, comp(629, 6));  // pnr_family_conflict:pnr_family_conflict_progress2
            } else if ((CC_GETWIDTH() > int0)) {
                IF_SETSIZE((CC_GETWIDTH() - 1), 30, 0, 0, comp(629, 6));  // pnr_family_conflict:pnr_family_conflict_progress2
            };
        };
    } else {
        if ((IF_FIND(comp(629, 5)) == 1)) {  // pnr_family_conflict:pnr_family_conflict_progress1
            if ((CC_GETWIDTH() < 157)) {
                IF_SETSIZE((CC_GETWIDTH() + 1), 30, 0, 0, comp(629, 5));  // pnr_family_conflict:pnr_family_conflict_progress1
            } else if ((CC_GETWIDTH() > 157)) {
                IF_SETSIZE((CC_GETWIDTH() - 1), 30, 0, 0, comp(629, 5));  // pnr_family_conflict:pnr_family_conflict_progress1
            };
        };
        if ((IF_FIND(comp(629, 6)) == 1)) {  // pnr_family_conflict:pnr_family_conflict_progress2
            if ((CC_GETWIDTH() < 157)) {
                IF_SETSIZE((CC_GETWIDTH() + 1), 30, 0, 0, comp(629, 6));  // pnr_family_conflict:pnr_family_conflict_progress2
            } else if ((CC_GETWIDTH() > 157)) {
                IF_SETSIZE((CC_GETWIDTH() - 1), 30, 0, 0, comp(629, 6));  // pnr_family_conflict:pnr_family_conflict_progress2
            };
        };
    };
    return;
}