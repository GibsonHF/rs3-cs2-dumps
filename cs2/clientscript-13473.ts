//
function script13473(): void {
    IF_SETTEXT(`${inttostring(MIN(varbitplayer_36045, varbitplayer_36046), 10)} / ${inttostring(varbitplayer_36046, 10)}`, comp(1877, 4));  // tomb_overlay:sarcophagus_text
    IF_SETTEXT(`${inttostring(MIN(varbitplayer_36025, varbitplayer_36024), 10)} / ${inttostring(varbitplayer_36024, 10)}`, comp(1877, 2));  // tomb_overlay:chest_text
    IF_SETTEXT(`${inttostring(MIN(varbitplayer_36023, varbitplayer_36022), 10)} / ${inttostring(varbitplayer_36022, 10)}`, comp(1877, 11));  // tomb_overlay:corruption_bar_text
    if ((varbitplayer_36022 > 0)) {
        IF_SETSIZE(SCALE(varbitplayer_36023, varbitplayer_36022, 90), 14, 0, 0, comp(1877, 12));  // tomb_overlay:progress_bar
    } else {
        IF_SETSIZE(0, 14, 0, 0, comp(1877, 12));  // tomb_overlay:progress_bar
    };
    IF_SETTEXT(`${inttostring(varbitplayer_36044, 10)} / 3`, comp(1877, 32));  // tomb_overlay:tier_text
    if ((varbitplayer_36033 == 1)) {
        IF_SETTRANS(0, comp(1877, 37));  // tomb_overlay:dungeoneering_icon
    } else {
        IF_SETTRANS(200, comp(1877, 37));  // tomb_overlay:dungeoneering_icon
    };
    if ((varbitplayer_36032 == 1)) {
        IF_SETTRANS(0, comp(1877, 41));  // tomb_overlay:divination_icon
    } else {
        IF_SETTRANS(200, comp(1877, 41));  // tomb_overlay:divination_icon
    };
    if ((varbitplayer_36031 == 1)) {
        IF_SETTRANS(0, comp(1877, 36));  // tomb_overlay:construction_icon
    } else {
        IF_SETTRANS(200, comp(1877, 36));  // tomb_overlay:construction_icon
    };
    if ((varbitplayer_36030 == 1)) {
        IF_SETTRANS(0, comp(1877, 40));  // tomb_overlay:crafting_icon
    } else {
        IF_SETTRANS(200, comp(1877, 40));  // tomb_overlay:crafting_icon
    };
    if ((varbitplayer_36027 == 1)) {
        IF_SETTRANS(0, comp(1877, 34));  // tomb_overlay:agility_icon
    } else {
        IF_SETTRANS(200, comp(1877, 34));  // tomb_overlay:agility_icon
    };
    if ((varbitplayer_36026 == 1)) {
        IF_SETTRANS(0, comp(1877, 38));  // tomb_overlay:prayer_icon
    } else {
        IF_SETTRANS(200, comp(1877, 38));  // tomb_overlay:prayer_icon
    };
    if ((varbitplayer_36029 == 1)) {
        IF_SETTRANS(0, comp(1877, 35));  // tomb_overlay:thieving_icon
    } else {
        IF_SETTRANS(200, comp(1877, 35));  // tomb_overlay:thieving_icon
    };
    if ((varbitplayer_36028 == 1)) {
        IF_SETTRANS(0, comp(1877, 39));  // tomb_overlay:runecrafting_icon
    } else {
        IF_SETTRANS(200, comp(1877, 39));  // tomb_overlay:runecrafting_icon
    };
    return;
}