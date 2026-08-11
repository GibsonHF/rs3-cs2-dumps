//
function script6741(): void {
    if ((IF_GETHIDE(comp(243, 26)) == false)) {  // sliske1_notebook:sliske1_notebook_monks_core
        IF_SETHIDE(true, comp(243, 26));  // sliske1_notebook:sliske1_notebook_monks_core
        IF_SETHIDE(false, comp(243, 14));  // sliske1_notebook:sliske1_notebook_contents
        script6980();
        if ((varbitplayer_20621 < 10)) {
            IF_SETHIDE(true, comp(243, 21));  // sliske1_notebook:sliske1_notebook_contents_elf
            IF_SETHIDE(true, comp(243, 22));  // sliske1_notebook:sliske1_notebook_contents_elf_core
            IF_SETHIDE(true, comp(243, 23));  // sliske1_notebook:sliske1_notebook_contents_elf_additional
            IF_SETHIDE(true, comp(243, 24));  // sliske1_notebook:sliske1_notebook_contents_elf_interrogations
        };
        if ((varbitplayer_20621 < 13)) {
            IF_SETHIDE(true, comp(243, 25));  // sliske1_notebook:sliske1_notebook_contents_valina
        };
    } else if ((IF_GETHIDE(comp(243, 33)) == false)) {  // sliske1_notebook:sliske1_notebook_monks_additional
        IF_SETHIDE(true, comp(243, 33));  // sliske1_notebook:sliske1_notebook_monks_additional
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
    } else if ((IF_GETHIDE(comp(243, 39)) == false)) {  // sliske1_notebook:sliske1_notebook_elf_core
        IF_SETHIDE(true, comp(243, 39));  // sliske1_notebook:sliske1_notebook_elf_core
        IF_SETHIDE(false, comp(243, 33));  // sliske1_notebook:sliske1_notebook_monks_additional
        script6980();
        if ((varbitplayer_20625 == 0)) {
            IF_SETHIDE(true, comp(243, 36));  // sliske1_notebook:sliske1_notebook_monks_additional_clue
        };
        if ((varbitplayer_20621 < 7)) {
            IF_SETHIDE(true, comp(243, 38));  // sliske1_notebook:sliske1_notebook_monks_interrogations
        };
    } else if ((IF_GETHIDE(comp(243, 46)) == false)) {  // sliske1_notebook:sliske1_notebook_elf_additional
        IF_SETHIDE(true, comp(243, 46));  // sliske1_notebook:sliske1_notebook_elf_additional
        IF_SETHIDE(false, comp(243, 39));  // sliske1_notebook:sliske1_notebook_elf_core
        script6980();
        if ((varbitplayer_20635 == 0)) {
            IF_SETHIDE(true, comp(243, 42));  // sliske1_notebook:sliske1_notebook_elf_core_clue1
            IF_SETHIDE(true, comp(243, 45));  // sliske1_notebook:sliske1_notebook_elf_core_return
        };
        if ((varbitplayer_20636 == 0)) {
            IF_SETHIDE(true, comp(243, 43));  // sliske1_notebook:sliske1_notebook_elf_core_clue2
            IF_SETHIDE(true, comp(243, 45));  // sliske1_notebook:sliske1_notebook_elf_core_return
        };
        if ((varbitplayer_20634 == 0)) {
            IF_SETHIDE(true, comp(243, 44));  // sliske1_notebook:sliske1_notebook_elf_core_clue3
            IF_SETHIDE(true, comp(243, 45));  // sliske1_notebook:sliske1_notebook_elf_core_return
        };
    } else if ((IF_GETHIDE(comp(243, 47)) == false)) {  // sliske1_notebook:sliske1_notebook_valina
        IF_SETHIDE(true, comp(243, 47));  // sliske1_notebook:sliske1_notebook_valina
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
    };
    return;
}