//
function script13758(int0: number, int1: number): void {
    if ((int0 > IF_GETHEIGHT(int1))) {
        IF_SETSCROLLSIZE(0, int0, int1);
        IF_SETSCROLLPOS(0, 0, int1);
        if ((int1 == comp(1029, 71))) {  // polls:polls_survey_results_layer
            IF_SETSIZE(0, int0, 1, 0, comp(1029, 72));  // polls:polls_survey_results_content
        } else {
            IF_SETSIZE(0, int0, 1, 0, comp(1029, 65));  // polls:polls_survey_options_content
        };
        script31(67436620, int1, -1, -1, -1, -1, -1, -1);
        IF_SETHIDE(false, comp(1029, 76));  // polls:polls_survey_scroll_layer
    } else {
        if ((int1 == comp(1029, 71))) {  // polls:polls_survey_results_layer
            IF_SETSIZE(0, int0, 1, 0, comp(1029, 72));  // polls:polls_survey_results_content
        } else {
            IF_SETSIZE(0, int0, 1, 0, comp(1029, 65));  // polls:polls_survey_options_content
        };
        IF_SETSCROLLSIZE(0, 0, int1);
        IF_SETHIDE(true, comp(1029, 76));  // polls:polls_survey_scroll_layer
    };
    return;
}