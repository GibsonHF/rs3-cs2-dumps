//
function script15059(int0: number): void {
    switch (int0) {
        case 6881290: {
            if ((strcmp(varclient_6788, "") != 0)) {
                script15060(varclient_6788, varplayer_135, 1);
            };
            break;
        }
        case 46333966: {
            if ((strcmp(varclient_6788, "") != 0)) {
                script15060(varclient_6788, varplayer_135, 1);
                script20640();
            };
            break;
        }
        case 43384839: {
            script11688();
            break;
        }
        case 43384878: {
            if ((IF_GETHEIGHT(int0) == 4)) {
                CC_DELETEALL(int0);
                CC_DELETEALL(comp(662, 47));  // lore_stats_side:info_popup_bg
                CC_DELETEALL(comp(662, 48));  // lore_stats_side:info_popup_text
                IF_SETSCROLLPOS(0, 0, comp(662, 48));  // lore_stats_side:info_popup_text
                IF_SETSCROLLSIZE(0, 0, comp(662, 48));  // lore_stats_side:info_popup_text
                CC_DELETEALL(comp(662, 49));  // lore_stats_side:info_popup_scrollbar
            } else {
                script13785();
            };
            break;
        }
        case 33882248: {
            if ((IF_GETWIDTH(comp(517, 136)) <= 1)) {  // bank:more_storage_container
                IF_SETHIDE(true, comp(517, 136));  // bank:more_storage_container
            };
            break;
        }
    };
    return;
}