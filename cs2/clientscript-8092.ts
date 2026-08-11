//
function script8092(): void {
    switch (varclient_3518) {
        case 2: {
            IF_SETSIZE(0, 53, 1, 1, comp(310, 2));  // clan_keep_theatre_actors:list
            if ((IF_GETHIDE(comp(310, 1)) == true)) {  // clan_keep_theatre_actors:scrollbar_layer
                IF_SETHIDE(false, comp(310, 1));  // clan_keep_theatre_actors:scrollbar_layer
                IF_SETSIZE(16, 0, 1, 1, comp(310, 0));  // clan_keep_theatre_actors:scrolling_layer
            };
            script72(20316161, 20316160, IF_GETSCROLLY(comp(310, 0)));  // clan_keep_theatre_actors:scrolling_layer
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(319, 9));  // clan_keep_theatre_sounds:main_layer
            IF_SETHIDE(true, comp(1429, 24));  // clan_keep_theatre_container:warning_interface
            IF_SETSIZE(16, 45, 1, 1, comp(319, 7));  // clan_keep_theatre_sounds:lists
            if ((IF_GETHIDE(comp(319, 2)) == false)) {  // clan_keep_theatre_sounds:scroll_bar1
                IF_SETHIDE(false, comp(319, 2));  // clan_keep_theatre_sounds:scroll_bar1
            };
            if ((IF_GETHIDE(comp(319, 3)) == false)) {  // clan_keep_theatre_sounds:scroll_bar2
                IF_SETHIDE(false, comp(319, 3));  // clan_keep_theatre_sounds:scroll_bar2
            };
            script72(20905987, 20905984, IF_GETSCROLLY(comp(319, 0)));  // clan_keep_theatre_sounds:bm_list
            script72(20905986, 20905985, IF_GETSCROLLY(comp(319, 1)));  // clan_keep_theatre_sounds:sound_list
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(824, 31));  // clan_keep_theatre_spotlight:main_layer
            IF_SETHIDE(true, comp(1429, 24));  // clan_keep_theatre_container:warning_interface
            IF_SETSIZE(16, 0, 1, 1, comp(824, 0));  // clan_keep_theatre_spotlight:list
            IF_SETSCROLLSIZE(0, 255, comp(824, 0));  // clan_keep_theatre_spotlight:list
            if ((IF_GETHIDE(comp(824, 1)) == false)) {  // clan_keep_theatre_spotlight:scrollbar
                IF_SETHIDE(false, comp(824, 1));  // clan_keep_theatre_spotlight:scrollbar
            };
            script72(54001665, 54001664, IF_GETSCROLLY(comp(824, 0)));  // clan_keep_theatre_spotlight:list
            break;
        }
        case 5: {
            script5308();
            break;
        }
    };
    return;
}