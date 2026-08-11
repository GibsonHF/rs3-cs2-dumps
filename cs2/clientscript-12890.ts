//
function script12890(int0: number, int1: number, string0: string): void {
    var int2 = comp(1803, 5);  // timed_event_noticeboard:button_layer
    var int3 = comp(1803, 13);  // timed_event_noticeboard:button_text
    var int4 = comp(1803, 10);  // timed_event_noticeboard:button_active_layer
    switch (int1) {
        case 1: {
            break;
        }
        case 2: {
            int2 = comp(1803, 4);  // timed_event_noticeboard:button_layer_right_align
            int3 = comp(1803, 23);  // timed_event_noticeboard:button_text_right
            int4 = comp(1803, 20);  // timed_event_noticeboard:button_active_layer_right
            break;
        }
    };
    if ((STRING_LENGTH(string0) > 0)) {
        IF_SETHIDE(false, int2);
    };
    var int5 = -1 as graphic;
    int5 = enum_getvalue(0, 23, int0, MAP_LANG());
    IF_SETTEXT(string0, int3);
    IF_SETOP(1, string0, int4);
    IF_SETGRAPHIC(int5, comp(1803, 0));  // timed_event_noticeboard:bg_graphic
    return;
}