//
function script6394(): void {
    if ((IF_GETHIDE(comp(1500, 1)) == true)) {  // quest_journal:journal_layer
        if (((IF_GETHIDE(comp(1500, 329)) == true) || (varplayer_3936 == 0))) {  // quest_journal:overview_layer
            IF_SETHIDE(false, comp(1500, 326));  // quest_journal:default_text
        } else {
            IF_SETHIDE(true, comp(1500, 326));  // quest_journal:default_text
        };
    } else if ((varplayer_3936 == 0)) {
        IF_SETHIDE(false, comp(1500, 326));  // quest_journal:default_text
    } else {
        IF_SETHIDE(true, comp(1500, 326));  // quest_journal:default_text
    };
    return;
}