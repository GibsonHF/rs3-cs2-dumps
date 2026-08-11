//
function script6463(): void {
    IF_SETHIDE(true, comp(243, 14));  // sliske1_notebook:sliske1_notebook_contents
    IF_SETHIDE(false, comp(243, 26));  // sliske1_notebook:sliske1_notebook_monks_core
    script6980();
    if ((varbitplayer_20631 == 0)) {
        IF_SETHIDE(true, comp(243, 29));  // sliske1_notebook:sliske1_notebook_monks_core_clue1
        IF_SETHIDE(true, comp(243, 32));  // sliske1_notebook:sliske1_notebook_monks_core_return
    };
    if ((varbitplayer_20632 == 0)) {
        IF_SETHIDE(true, comp(243, 30));  // sliske1_notebook:sliske1_notebook_monks_core_clue2
        IF_SETHIDE(true, comp(243, 32));  // sliske1_notebook:sliske1_notebook_monks_core_return
    };
    if ((varbitplayer_20633 == 0)) {
        IF_SETHIDE(true, comp(243, 31));  // sliske1_notebook:sliske1_notebook_monks_core_clue3
        IF_SETHIDE(true, comp(243, 32));  // sliske1_notebook:sliske1_notebook_monks_core_return
    };
    return;
}