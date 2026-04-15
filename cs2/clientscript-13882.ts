//
function script13882(): void {
    ACTIVECLANSETTINGS_GETAFFINEDMUTED(0);
    stack(299);
    stack(5);
    stack(0);
    POP_INT_DISCARD();
    ACTIVECLANCHANNEL_FIND_AFFINED(1);
    script3407(0);
    stack(600);
    IF_SETFEEDBACKMODE();
    return;
}