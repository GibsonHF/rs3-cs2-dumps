//
function script9843(): void {
    if ((MODULO(CLIENTCLOCK(), 50) == 0)) {
        varclient_4198 = (varclient_4198 - 1);
        if ((varclient_4198 <= 0)) {
            IF_SETONTIMER(callback(), comp(200, 69));  // sep2013_jobs:answer_question_text_layer
            IF_SETHIDE(true, comp(1350, 10));  // rhino_awareness:todays_rhino_wrong_answer
            IF_SETHIDE(true, comp(1350, 34));  // rhino_awareness:answer_1_btn_disabled_layer
            IF_SETHIDE(true, comp(1350, 42));  // rhino_awareness:answer_2_btn_disabled_layer
            IF_SETHIDE(true, comp(1350, 50));  // rhino_awareness:answer_3_btn_disabled_layer
            IF_SETHIDE(true, comp(1350, 58));  // rhino_awareness:answer_4_btn_disabled_layer
            IF_SETHIDE(true, comp(1350, 9));  // rhino_awareness:grey_out_layer
        };
    };
    IF_SETTEXT(`Time remaining until you can try again: ${inttostring(varclient_4198, 10)} seconds`, comp(1350, 10));  // rhino_awareness:todays_rhino_wrong_answer
    return;
}