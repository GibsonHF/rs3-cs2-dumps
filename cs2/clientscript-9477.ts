//
function script9477(): void {
    var int0 = script9471();
    var int1 = script9472();
    var string0 = "";
    var string1 = "";
    var string2 = "";
    IF_SETTEXT(TOSTRING_LOCALISED(varplayer_3981, 1), comp(748, 7));  // 6awe2_vote:votes_amount
    if ((varbitplayer_21113 == 0)) {
        switch (int0) {
            case 1: {
                IF_SETTEXT(TOSTRING_LOCALISED(varplayer_3956, 1), comp(748, 39));  // 6awe2_vote:choice1_myvotesofar_score
                IF_SETTEXT(TOSTRING_LOCALISED(varplayer_3957, 1), comp(748, 49));  // 6awe2_vote:choice2_myvotesofar_score
                break;
            }
            case 3: {
                IF_SETTEXT(TOSTRING_LOCALISED(varplayer_3958, 1), comp(748, 39));  // 6awe2_vote:choice1_myvotesofar_score
                IF_SETTEXT(TOSTRING_LOCALISED(varplayer_3959, 1), comp(748, 49));  // 6awe2_vote:choice2_myvotesofar_score
                break;
            }
            case 5: {
                IF_SETTEXT(TOSTRING_LOCALISED(varplayer_3960, 1), comp(748, 39));  // 6awe2_vote:choice1_myvotesofar_score
                IF_SETTEXT(TOSTRING_LOCALISED(varplayer_3961, 1), comp(748, 49));  // 6awe2_vote:choice2_myvotesofar_score
                break;
            }
            case 7: {
                IF_SETTEXT(TOSTRING_LOCALISED(varplayer_3962, 1), comp(748, 39));  // 6awe2_vote:choice1_myvotesofar_score
                IF_SETTEXT(TOSTRING_LOCALISED(varplayer_3963, 1), comp(748, 49));  // 6awe2_vote:choice2_myvotesofar_score
                break;
            }
            default: {
                varbitplayer_21113 = 1;
                break;
            }
        };
        [string1, string2, string0] = script9473();
        script9475();
        if ((((int1 != 1) && (int1 != 3)) && (int1 != 5))) {
            IF_SETHIDE(true, comp(748, 18));  // 6awe2_vote:escalation
            IF_SETHIDE(false, comp(748, 23));  // 6awe2_vote:escalation_blank
        };
    } else {
        switch (int1) {
            case 1: {
                IF_SETTEXT(TOSTRING_LOCALISED(varplayer_3964, 1), comp(748, 39));  // 6awe2_vote:choice1_myvotesofar_score
                IF_SETTEXT(TOSTRING_LOCALISED(varplayer_3965, 1), comp(748, 49));  // 6awe2_vote:choice2_myvotesofar_score
                break;
            }
            case 3: {
                IF_SETTEXT(TOSTRING_LOCALISED(varplayer_3966, 1), comp(748, 39));  // 6awe2_vote:choice1_myvotesofar_score
                IF_SETTEXT(TOSTRING_LOCALISED(varplayer_3967, 1), comp(748, 49));  // 6awe2_vote:choice2_myvotesofar_score
                break;
            }
            case 5: {
                IF_SETTEXT(TOSTRING_LOCALISED(varplayer_3968, 1), comp(748, 39));  // 6awe2_vote:choice1_myvotesofar_score
                IF_SETTEXT(TOSTRING_LOCALISED(varplayer_3969, 1), comp(748, 49));  // 6awe2_vote:choice2_myvotesofar_score
                break;
            }
        };
        [string0, string1, string2] = script9474();
        script9476();
        if (((((int0 != 1) && (int0 != 3)) && (int0 != 5)) && (int0 != 7))) {
            IF_SETHIDE(true, comp(748, 8));  // 6awe2_vote:microchange
            IF_SETHIDE(false, comp(748, 13));  // 6awe2_vote:microchange_blank
        };
    };
    IF_SETTEXT(string1, comp(748, 37));  // 6awe2_vote:choice1_text
    IF_SETTEXT(string2, comp(748, 47));  // 6awe2_vote:choice2_text
    IF_SETTEXT(string0, comp(748, 29));  // 6awe2_vote:vote_description_text
    if ((int1 == 0)) {
        IF_SETHIDE(true, comp(748, 18));  // 6awe2_vote:escalation
        IF_SETHIDE(false, comp(748, 23));  // 6awe2_vote:escalation_blank
    };
    return;
}