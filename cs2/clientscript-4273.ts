//
function script4273(): void {
    IF_SETHIDE(true, comp(1083, 93));
    IF_SETHIDE(true, comp(1083, 94));
    IF_SETHIDE(false, comp(1083, 95));
    IF_SETHIDE(true, comp(1083, 90));
    IF_SETHIDE(true, comp(1083, 91));
    IF_SETHIDE(false, comp(1083, 92));
    IF_SETHIDE(true, comp(1083, 219));
    IF_SETHIDE(true, comp(1083, 227));
    IF_SETHIDE(false, comp(1083, 235));
    IF_SETHIDE(true, comp(1083, 96));
    IF_SETTEXT(inttostring((2 * 10), 10), comp(1083, 107));
    if ((STAT_BASE(6 as stat) < 83)) {
        IF_SETTEXT(`${inttostring(((2 / 2) * 10), 10)} (halved)`, comp(1083, 108));
    } else {
        IF_SETTEXT(inttostring((2 * 10), 10), comp(1083, 108));
    };
    if ((STAT_BASE(6 as stat) < 80)) {
        IF_SETTEXT(`${inttostring(((12 / 2) * 10), 10)} (halved)`, comp(1083, 109));
    } else {
        IF_SETTEXT(inttostring((12 * 10), 10), comp(1083, 109));
    };
    if ((STAT_BASE(6 as stat) < 86)) {
        IF_SETTEXT(`${inttostring(((2 / 2) * 10), 10)} (halved)`, comp(1083, 110));
    } else {
        IF_SETTEXT(inttostring((2 * 10), 10), comp(1083, 110));
    };
    IF_SETTEXT(inttostring((10 * 10), 10), comp(1083, 111));
    IF_SETTEXT("Magic and Farming", comp(1083, 112));
    if ((STAT_BASE(6 as stat) < 83)) {
        IF_SETTEXT("Farming (no Magic)", comp(1083, 113));
    } else {
        IF_SETTEXT("Magic and Farming", comp(1083, 113));
    };
    if ((STAT_BASE(6 as stat) < 80)) {
        IF_SETTEXT("Crafting (no Magic)", comp(1083, 114));
    } else {
        IF_SETTEXT("Magic and Crafting", comp(1083, 114));
    };
    if ((STAT_BASE(6 as stat) < 86)) {
        IF_SETTEXT("Construction (no Magic)", comp(1083, 115));
    } else {
        IF_SETTEXT("Magic and Construction", comp(1083, 115));
    };
    IF_SETTEXT("Agility", comp(1083, 116));
    return;
}