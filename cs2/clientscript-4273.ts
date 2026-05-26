//
function script4273(): void {
    IF_SETHIDE(1, 70975581);
    IF_SETHIDE(1, 70975582);
    IF_SETHIDE(0, 70975583);
    IF_SETHIDE(1, 70975578);
    IF_SETHIDE(1, 70975579);
    IF_SETHIDE(0, 70975580);
    IF_SETHIDE(1, 70975707);
    IF_SETHIDE(1, 70975715);
    IF_SETHIDE(0, 70975723);
    IF_SETHIDE(1, 70975584);
    IF_SETTEXT(inttostring((2 * 10), 10), 70975595);
    if ((STAT_BASE(6) < 83)) {
        IF_SETTEXT(`${inttostring(((2 / 2) * 10), 10)} (halved)`, 70975596);
    } else {
        IF_SETTEXT(inttostring((2 * 10), 10), 70975596);
    };
    if ((STAT_BASE(6) < 80)) {
        IF_SETTEXT(`${inttostring(((12 / 2) * 10), 10)} (halved)`, 70975597);
    } else {
        IF_SETTEXT(inttostring((12 * 10), 10), 70975597);
    };
    if ((STAT_BASE(6) < 86)) {
        IF_SETTEXT(`${inttostring(((2 / 2) * 10), 10)} (halved)`, 70975598);
    } else {
        IF_SETTEXT(inttostring((2 * 10), 10), 70975598);
    };
    IF_SETTEXT(inttostring((10 * 10), 10), 70975599);
    IF_SETTEXT("Magic and Farming", 70975600);
    if ((STAT_BASE(6) < 83)) {
        IF_SETTEXT("Farming (no Magic)", 70975601);
    } else {
        IF_SETTEXT("Magic and Farming", 70975601);
    };
    if ((STAT_BASE(6) < 80)) {
        IF_SETTEXT("Crafting (no Magic)", 70975602);
    } else {
        IF_SETTEXT("Magic and Crafting", 70975602);
    };
    if ((STAT_BASE(6) < 86)) {
        IF_SETTEXT("Construction (no Magic)", 70975603);
    } else {
        IF_SETTEXT("Magic and Construction", 70975603);
    };
    IF_SETTEXT("Agility", 70975604);
    return;
}