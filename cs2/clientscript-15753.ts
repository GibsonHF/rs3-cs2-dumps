//
function script15753(): void {
    if ((script6431() == 1)) {
        SHOP_REQUESTDATA();
        IF_SETONTIMER(callback(script1219), comp(840, 2));  // free_trial_prompt:base
        IF_SETHIDE(true, comp(840, 21));  // free_trial_prompt:button
        IF_SETHIDE(true, comp(840, 19));  // free_trial_prompt:start_trial_second_title
    } else {
        IF_SETTEXT("Try For Free", comp(840, 26));  // free_trial_prompt:button_text
        IF_SETTEXT("Then monthly recurring billing. Cancel any time.", comp(840, 19));  // free_trial_prompt:start_trial_second_title
    };
    IF_SETHIDE(true, comp(840, 7));  // free_trial_prompt:policy_popup
    script8841(95, 1);
    var int0 = comp(840, 78);  // free_trial_prompt:terms_title_text
    var int1 = (STRINGWIDTH(IF_GETTEXT(int0), IF_GETFONTMETRICS(int0)) + 10);
    IF_SETSIZE(int1, IF_GETHEIGHT(int0), 0, 0, int0);
    IF_SETSIZE((IF_GETX(int0) + IF_GETWIDTH(int0)), IF_GETHEIGHT(comp(840, 76)), 0, 0, comp(840, 76));  // free_trial_prompt:terms_title_background
    IF_SETPOSITION(IF_GETWIDTH(comp(840, 76) /*free_trial_prompt:terms_title_background*/), IF_GETY(comp(840, 77) /*free_trial_prompt:terms_title_background_r*/), 0, 0, comp(840, 77) /*free_trial_prompt:terms_title_background_r*/);
    return;
}