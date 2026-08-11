//
function script18770(string0: string): void {
    if ((IF_FIND(comp(764, 3)) == 1)) {  // combatv2_channel_bar:title_text
        CC_SETTEXT(string0);
        CC_SETTEXTALIGN(1, 1, 12);
        if ((PARAHEIGHT(CC_GETTEXT(), CC_GETWIDTH(), CC_GETFONTMETRICS()) > 1)) {
            IF_SETSIZE(0, ((2 * 12) + 4), 1, 0, comp(764, 2));  // combatv2_channel_bar:header_layer
            IF_SETSIZE(0, 0, 1, 1, comp(764, 1));  // combatv2_channel_bar:background_layer
        };
    };
    return;
}