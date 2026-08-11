//
function script2537(int0: number): void {
    var int1 = 82837512;
    IF_SETTEXT(dbrow_getfield(int0, 1085440, 0), comp(1264, 10));  // q4_awareness_2023:info_box_title
    IF_SETTEXT(dbrow_getfield(int0, 1085456, 0), 82837515);
    IF_SETTEXT(dbrow_getfield(int0, 1085472, 0), int1);
    var int2 = script15891(IF_GETTEXT(int1), IF_GETWIDTH(int1), IF_GETFONTMETRICS(int1), 0);
    CC_DELETEALL(comp(1264, 6));  // q4_awareness_2023:info_box_description_scrollbar
    IF_SETSCROLLPOS(0, 0, comp(1264, 6));  // q4_awareness_2023:info_box_description_scrollbar
    IF_SETSCROLLSIZE(0, 0, comp(1264, 7));  // q4_awareness_2023:info_box_description_text_layer
    if ((int2 > 288)) {
        IF_SETSCROLLSIZE(0, int2, comp(1264, 7));  // q4_awareness_2023:info_box_description_text_layer
        script7791(82837510, 82837511);
    };
    script18315(int0, 0);
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 210);
    SOUND_VORBIS_VOLUME(10062 as vorbis, 1, 2, 250);
    IF_SETHIDE(false, comp(1264, 41));  // q4_awareness_2023:info_overlay
    return;
}