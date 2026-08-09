//[clientscript,loginscreen_load]
function script1172(): void {
    script15717();
    if ((script13749() == 1)) {
        varbitclient_43686 = 1;
        varbitplayer_22875 = 2;
        varbitclient_22876 = 2;
    } else {
        varbitclient_43686 = 1;
        varbitplayer_22875 = 0;
        varbitclient_22876 = 0;
    };
    script15247();
    script2593();
    if (((varclient_6799 == true) && (IF_CRMVIEW_INIT() == false))) {
        CAM2_REMOVEEFFECT(1);
        varclient_6799 = 0;
    };
    script14175();
    SETUP_MESSAGEBOX(0, 0, 4, 3, 135, 30, 3791, 3792, 6127, 16753152, 26);
    if (((varclient_3698 < 0) || (varclient_3698 > 1))) {
        varclient_3698 = 1;
    };
    if ((script13749() == 1)) {
        IF_SETONRESIZE(callback(script15677), comp(744, 26));
        script15678();
        IF_SETHIDE(false, comp(744, 1));
        IF_SETONCLICK(callback(), comp(744, 140));
    };
    IF_SETONRESIZE(callback(script3229), comp(744, 0));
    script3230();
    varclient_6886 = 0;
    if ((varclient_1099 == -1)) {
        varclient_1099 = 0;
    };
    script9083();
    varclient_2577 = "";
    script15699();
    varclient_4192 = "";
    script15700();
    varclient_4193 = 0;
    varclient_6908 = -1;
    varclient_1100 = -1;
    if ((varclient_6406 == -1)) {
        varclient_6406 = 0;
    };
    if ((varclient_3681 == -1)) {
        varclient_3681 = 0;
    };
    script15706();
    VIDEO_ADVERT_FORCE_REMOVE();
    script15668(48758976);
    script51();
    script316();
    script53();
    varclient_547 = 0;
    varclient_1093 = 0;
    script1129();
    script4142(-1);
    if ((varclient_1701 == -1)) {
        varclient_1701 = 1;
    };
    script6720();
    script15694(48759032);
    if ((script6431() == 1)) {
        IF_SETHIDE(true, comp(744, 30));
        IF_SETHIDE(false, comp(744, 60));
        IF_SETHIDE(false, comp(744, 40));
        IF_SETHIDE(true, comp(744, 54));
        IF_SETHIDE(false, comp(744, 209));
        IF_SETHIDE(true, comp(744, 225));
        IF_SETHIDE(false, comp(744, 31));
        IF_SETHIDE(true, comp(744, 35));
        IF_SETHIDE(false, comp(744, 358));
    } else {
        IF_SETSIZE(0, 0, 1, 1, comp(744, 29));
        IF_SETSIZE(0, 0, 1, 1, comp(744, 39));
        IF_SETPOSITION(0, 0, 0, 0, comp(744, 39));
        IF_SETHIDE(true, comp(744, 60));
        IF_SETHIDE(true, comp(744, 40));
        IF_SETHIDE(false, comp(744, 54));
        IF_SETPOSITION(10, 10, 2, 0, comp(744, 191));
        IF_SETSIZE(364, 392, 0, 0, comp(744, 52));
        IF_SETPOSITION(0, 0, 1, 1, comp(744, 52));
        IF_SETSIZE(0, 0, 1, 1, comp(744, 173));
        IF_SETPOSITION(0, 0, 1, 1, comp(744, 173));
        IF_SETPOSITION(0, 32, 1, 0, comp(744, 180));
        IF_SETSIZE(40, 130, 1, 1, comp(744, 180));
        IF_SETPOSITION(0, 20, 1, 2, comp(744, 185));
        IF_SETPOSITION(0, 0, 0, 0, comp(744, 93));
        IF_SETSIZE(0, 0, 1, 1, comp(744, 93));
        IF_SETPOSITION(0, 20, 1, 2, comp(744, 146));
        IF_SETSIZE(300, 36, 0, 0, comp(744, 146));
        IF_SETPOSITION(0, 0, 1, 2, comp(744, 186));
        IF_SETSIZE(0, 70, 1, 0, comp(744, 186));
        IF_SETHIDE(false, comp(744, 187));
        IF_SETHIDE(false, comp(744, 225));
        IF_SETHIDE(true, comp(744, 209));
        IF_SETHIDE(true, comp(744, 31));
        IF_SETHIDE(false, comp(744, 35));
        IF_SETHIDE(true, comp(744, 358));
    };
    varclient_6712 = 1;
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    [int0, int1, int2] = DATE_RUNEDAY_TODATE(DATE_RUNEDAY());
    if ((int1 == 11)) {
        CONSOLE_ENABLESNOW();
    } else if (((int1 == 0) && (int0 <= 10))) {
        CONSOLE_ENABLESNOW();
    };
    return;
}