//
function script20270(): void {
    var int0 = script20117(varplayer_12314);
    if ((script20132(int0) == 0)) {
        return;
    };
    stack(int0);
    script20938();
    var int1 = [];
    var int2 = dbrow_getfield(int1, 1339392, varbitplayer_58407);
    if ((int2 == -1)) {
        return;
    };
    var int3 = dbrow_getfield(int2, 1343536, 0);
    var string0 = "Relic choices are permanent.<br><br>This is your final chance to change your mind.<br><br>You are about to activate:";
    if ((varbitplayer_61493 == 1)) {
        string0 = "You will have limited opportunities to reset your choice of Blessings.<br><br>This is your final chance to change your mind.<br><br>You are about to activate:";
    };
    var string1 = "Activate";
    if (((PLAYERMEMBER() == 1) || (int3 == 0))) {
        IF_SETHIDE(false, comp(1443, 27));  // league_parent_relics:passives_relic_title
        IF_SETHIDE(true, comp(1443, 26));  // league_parent_relics:bg_passive
        IF_SETTEXT(string0, comp(1443, 42));  // league_parent_relics:overview_confirm_unlock_spinner
        stack(21096);
        stack(CLIENTCLOCK());
        stack(94568493);
        stack(94568494);
        stack(string1);
        IF_SETONTIMER("iiis", 94568493);
        IF_SETHIDE(false, comp(1443, 46));
        IF_SETTEXT("5...", comp(1443, 45));
        IF_SETENABLED(false, comp(1443, 45));
        IF_SETENABLED(false, comp(1443, 38));  // league_parent_relics:body_confirm
    } else {
        stack(int2);
        script21097();
        return;
    };
    return;
}