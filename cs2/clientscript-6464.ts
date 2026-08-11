//
function script6464(): void {
    IF_SETHIDE(true, comp(243, 14));  // sliske1_notebook:sliske1_notebook_contents
    IF_SETHIDE(false, comp(243, 33));  // sliske1_notebook:sliske1_notebook_monks_additional
    script6980();
    if ((varbitplayer_20625 == 0)) {
        IF_SETHIDE(true, comp(243, 36));  // sliske1_notebook:sliske1_notebook_monks_additional_clue
    };
    if ((varbitplayer_20621 < 6)) {
        IF_SETHIDE(true, comp(243, 37));  // sliske1_notebook:sliske1_notebook_monks_additional_title3
    };
    if ((varbitplayer_20621 < 7)) {
        IF_SETHIDE(true, comp(243, 38));  // sliske1_notebook:sliske1_notebook_monks_interrogations
    };
    return;
}