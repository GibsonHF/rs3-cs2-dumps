//
function script6669(): void {
    IF_SETHIDE(true, comp(243, 14));  // sliske1_notebook:sliske1_notebook_contents
    IF_SETHIDE(false, comp(243, 46));  // sliske1_notebook:sliske1_notebook_elf_additional
    script6980();
    if ((varbitplayer_20629 == 0)) {
        IF_SETHIDE(true, comp(243, 50));  // sliske1_notebook:sliske1_notebook_elf_additional_clue1
    };
    if ((varbitplayer_20630 == 0)) {
        IF_SETHIDE(true, comp(243, 51));  // sliske1_notebook:sliske1_notebook_elf_additional_clue2
    };
    if ((varbitplayer_20621 < 11)) {
        IF_SETHIDE(true, comp(243, 53));  // sliske1_notebook:sliske1_notebook_elf_interrogations
        IF_SETHIDE(true, comp(243, 52));  // sliske1_notebook:sliske1_notebook_elf_additional_title3
    };
    return;
}