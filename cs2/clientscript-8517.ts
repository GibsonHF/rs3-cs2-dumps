//
function script8517(int0: number): void {
    var int1 = -1;
    var int2 = comp(-1, 65535);
    if ((script6431() == 0)) {
        if ((varbitplayer_37056 == 0)) {
            IF_SETHIDE(false, comp(137, 78));  // chatdefault:wiki_button
        };
        script4539(varclient_2231);
    } else if ((IF_GETHIDE(comp(276, 28)) == false)) {  // toplevel_v2_mobile:chat_panel_overlay
        IF_SETHIDE(true, comp(276, 28));  // toplevel_v2_mobile:chat_panel_overlay
        switch (script8550(int0)) {
            case 100: {
                int1 = 19;
                int2 = comp(857, 9);  // mobile_chat_panel:private
                break;
            }
            case 1: {
                int1 = 20;
                int2 = comp(857, 10);  // mobile_chat_panel:friends
                break;
            }
            case 2: {
                int1 = 21;
                int2 = comp(857, 11);  // mobile_chat_panel:clan
                break;
            }
            case 3: {
                int1 = 22;
                int2 = comp(857, 12);  // mobile_chat_panel:guest_clan
                break;
            }
            case 4:
            case 5: {
                int1 = 25;
                int2 = comp(857, 14);  // mobile_chat_panel:group
                break;
            }
            case 102: {
                int1 = 46;
                int2 = comp(857, 15);  // mobile_chat_panel:group_ironman
                break;
            }
            default: {
                int1 = 18;
                int2 = comp(857, 8);  // mobile_chat_panel:local
                break;
            }
        };
        IF_TRIGGEROP(int2, -1, 1);
        script15881();
        script4539(int1);
    };
    varclient_6858 = false;
    script8522(int0, "");
    script8518();
    return;
}