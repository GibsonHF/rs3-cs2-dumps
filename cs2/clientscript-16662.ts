//
function script16662(): void {
    var int0 = -1;
    switch (script16161()) {
        case 19622: {
            IF_SETTEXT("You open the plague chest and receive:", comp(984, 14));  // trh_generic_jackpot_claim:prize_claim_title
            IF_SETCOLOUR(65280, comp(984, 3));  // trh_generic_jackpot_claim:light_flare
            IF_SETCOLOUR(65280, comp(984, 4));  // trh_generic_jackpot_claim:light_flare_2
            IF_SETCOLOUR(65280, comp(984, 2));  // trh_generic_jackpot_claim:glow
            int0 = 6219;
            IF_SETONBUTTONCLICK(callback(script16367, 2, -1), 64487437);
            break;
        }
    };
    if (((int0 != -1) && (varplayer_10476 != -1 as obj))) {
        script16663(int0, varplayer_10476, varplayer_10477);
    };
    return;
}