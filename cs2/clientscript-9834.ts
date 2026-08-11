//
function script9834(): void {
    script9836();
    IF_SETONVARCTRANSMIT(callback(script9835, 4200, 1), comp(1350, 26));  // rhino_awareness:mainmodal_window_content
    if ((varclient_4199 > CLIENTCLOCK())) {
        IF_SETHIDE(false, comp(1350, 9));  // rhino_awareness:grey_out_layer
        IF_SETHIDE(false, comp(1350, 10));  // rhino_awareness:todays_rhino_wrong_answer
        IF_SETHIDE(false, comp(1350, 34));  // rhino_awareness:answer_1_btn_disabled_layer
        IF_SETHIDE(false, comp(1350, 42));  // rhino_awareness:answer_2_btn_disabled_layer
        IF_SETHIDE(false, comp(1350, 50));  // rhino_awareness:answer_3_btn_disabled_layer
        IF_SETHIDE(false, comp(1350, 58));  // rhino_awareness:answer_4_btn_disabled_layer
        varclient_4198 = ((varclient_4199 - CLIENTCLOCK()) / 50);
        script9842();
    } else {
        IF_SETONTIMER(callback(), comp(200, 69));  // sep2013_jobs:answer_question_text_layer
        IF_SETHIDE(true, comp(1350, 9));  // rhino_awareness:grey_out_layer
        IF_SETHIDE(true, comp(1350, 10));  // rhino_awareness:todays_rhino_wrong_answer
        IF_SETHIDE(true, comp(1350, 34));  // rhino_awareness:answer_1_btn_disabled_layer
        IF_SETHIDE(true, comp(1350, 42));  // rhino_awareness:answer_2_btn_disabled_layer
        IF_SETHIDE(true, comp(1350, 50));  // rhino_awareness:answer_3_btn_disabled_layer
        IF_SETHIDE(true, comp(1350, 58));  // rhino_awareness:answer_4_btn_disabled_layer
    };
    return;
}