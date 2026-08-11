//
function script12486(string0: string): void {
    if ((strcmp("", varclient_5191) != 0)) {
        IF_SETTEXT(`${string0}<br>${varclient_5191}`, comp(1757, 0));  // mm16_cases:task_popup_info
    } else {
        IF_SETTEXT(string0, comp(1757, 0));  // mm16_cases:task_popup_info
    };
    var int0 = (12 * PARAHEIGHT(IF_GETTEXT(comp(1757, 0) /*mm16_cases:task_popup_info*/), IF_GETWIDTH(comp(1757, 7) /*mm16_cases:text_layer*/), IF_GETFONTMETRICS(comp(1757, 0) /*mm16_cases:task_popup_info*/)));
    if ((int0 > IF_GETHEIGHT(comp(1757, 7)))) {  // mm16_cases:text_layer
        IF_SETSCROLLSIZE(0, int0, comp(1757, 7));  // mm16_cases:text_layer
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(1757, 7));  // mm16_cases:text_layer
        IF_SETSCROLLPOS(0, 0, comp(1757, 7));  // mm16_cases:text_layer
    };
    script7791(115146762, 115146759);
    return;
}