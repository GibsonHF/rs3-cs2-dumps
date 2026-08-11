//
function script7188(int0: number): void {
    if ((int0 == 1)) {
        IF_SETHIDE(false, comp(1372, 2));  // cutscene_subtitle_panel:text_dropshadow
        IF_SETSIZE(IF_GETWIDTH(comp(1372, 3) /*cutscene_subtitle_panel:text*/), IF_GETHEIGHT(comp(1372, 3) /*cutscene_subtitle_panel:text*/), 0, 0, comp(1372, 2) /*cutscene_subtitle_panel:text_dropshadow*/);
        IF_SETPOSITION((1 + IF_GETX(comp(1372, 3) /*cutscene_subtitle_panel:text*/)), (1 + IF_GETY(comp(1372, 3) /*cutscene_subtitle_panel:text*/)), 0, 0, comp(1372, 2) /*cutscene_subtitle_panel:text_dropshadow*/);
        IF_SETTEXT(IF_GETTEXT(comp(1372, 3) /*cutscene_subtitle_panel:text*/), comp(1372, 2) /*cutscene_subtitle_panel:text_dropshadow*/);
        IF_SETTEXTALIGN(0, 1, 0, comp(1372, 2));  // cutscene_subtitle_panel:text_dropshadow
        IF_SETTEXTFONT(30 as fontmetrics, comp(1372, 2));  // cutscene_subtitle_panel:text_dropshadow
    } else {
        IF_SETHIDE(true, comp(1372, 2));  // cutscene_subtitle_panel:text_dropshadow
    };
    return;
}