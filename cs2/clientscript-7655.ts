//
function script7655(): void {
    var int0 = IF_GETFONTMETRICS(comp(709, 13));  // modal_choice_details:desc_text
    var int1 = (script11432(int0) * PARAHEIGHT(IF_GETTEXT(comp(709, 13) /*modal_choice_details:desc_text*/), IF_GETWIDTH(comp(709, 11) /*modal_choice_details:desc*/), int0));
    if ((int1 > IF_GETHEIGHT(comp(709, 11)))) {  // modal_choice_details:desc
        IF_SETSIZE((IF_GETWIDTH(comp(709, 10) /*modal_choice_details:desc_text_holder*/) - 18), IF_GETHEIGHT(comp(709, 10) /*modal_choice_details:desc_text_holder*/), 0, 0, comp(709, 11) /*modal_choice_details:desc*/);
        IF_SETSCROLLSIZE(0, (int1 + 4), comp(709, 11));  // modal_choice_details:desc
        IF_SETSCROLLPOS(0, 0, comp(709, 11));  // modal_choice_details:desc
        script7791(46465036, 46465035);
    } else {
        IF_SETSIZE(0, 0, 1, 1, comp(709, 11));  // modal_choice_details:desc
        IF_SETSCROLLPOS(0, 0, comp(709, 11));  // modal_choice_details:desc
        IF_SETSCROLLSIZE(0, 0, comp(709, 11));  // modal_choice_details:desc
        CC_DELETEALL(comp(709, 12));  // modal_choice_details:desc_scrollbar
    };
    return;
}