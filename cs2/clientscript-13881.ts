//
function script13881(): void {
    varbitclient_42113 = 1;
    ACTIVECLANSETTINGS_GETAFFINEDMUTED(script13749());
    stack(20926);
    stack(1);
    stack(1);
    POP_INT_DISCARD();
    ACTIVECLANCHANNEL_FIND_AFFINED(0);
    script3407(25);
    stack(500);
    IF_SETFEEDBACKMODE();
    varbitplayer_44849 = 0;
    if ((varbitplayer_27169 == 1)) {
        varbitplayer_44849 = 1;
        varbitplayer_27169 = 0;
        varbitplayer_22852 = 1;
    } else if ((varbitplayer_22875 != 2)) {
        varbitplayer_22852 = varbitplayer_22875;
    };
    varbitplayer_22875 = 2;
    if (((varclient_6910 < 0) || (varclient_6910 > 1))) {
        varclient_6910 = 0;
    };
    return;
}