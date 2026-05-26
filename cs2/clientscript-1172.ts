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
    if (((varclient_6799 == true) && (IF_CRMVIEW_INIT() == 0))) {
        CAM2_REMOVEEFFECT(1);
        varclient_6799 = false;
    };
    script14175();
    SETUP_MESSAGEBOX(0, 0, 4, 3, 135, 30, 3791, 3792, 6127, 16753152, 26);
    if (((varclient_3698 < 0) || (varclient_3698 > 1))) {
        varclient_3698 = 1;
    };
    if ((script13749() == 1)) {
        IF_SETONRESIZE(callback(script15677), 48758810);
        script15678();
        IF_SETHIDE(0, 48758785);
        IF_SETONCLICK(callback(), 48758920);
    };
    IF_SETONRESIZE(callback(script3229), 48758784);
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
    varclient_4193 = false;
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
    script15668(48758972);
    script51();
    script316();
    script53();
    varclient_547 = 0;
    varclient_1093 = false;
    script1129();
    script4142(-1);
    if ((varclient_1701 == -1)) {
        varclient_1701 = 1;
    };
    script6720();
    script15694(48759028);
    if ((script6431() == 1)) {
        IF_SETHIDE(1, 48758814);
        IF_SETHIDE(0, 48758844);
        IF_SETHIDE(0, 48758824);
        IF_SETHIDE(1, 48758838);
        IF_SETHIDE(0, 48758989);
        IF_SETHIDE(1, 48759005);
        IF_SETHIDE(0, 48758815);
        IF_SETHIDE(1, 48758819);
        IF_SETHIDE(0, 48759131);
    } else {
        IF_SETSIZE(0, 0, 1, 1, 48758813);
        IF_SETSIZE(0, 0, 1, 1, 48758823);
        IF_SETPOSITION(0, 0, 0, 0, 48758823);
        IF_SETHIDE(1, 48758844);
        IF_SETHIDE(1, 48758824);
        IF_SETHIDE(0, 48758838);
        IF_SETPOSITION(10, 10, 2, 0, 48758971);
        IF_SETSIZE(364, 392, 0, 0, 48758836);
        IF_SETPOSITION(0, 0, 1, 1, 48758836);
        IF_SETSIZE(0, 0, 1, 1, 48758953);
        IF_SETPOSITION(0, 0, 1, 1, 48758953);
        IF_SETPOSITION(0, 32, 1, 0, 48758960);
        IF_SETSIZE(40, 130, 1, 1, 48758960);
        IF_SETPOSITION(0, 20, 1, 2, 48758965);
        IF_SETPOSITION(0, 0, 0, 0, 48758873);
        IF_SETSIZE(0, 0, 1, 1, 48758873);
        IF_SETPOSITION(0, 20, 1, 2, 48758926);
        IF_SETSIZE(300, 36, 0, 0, 48758926);
        IF_SETPOSITION(0, 0, 1, 2, 48758966);
        IF_SETSIZE(0, 70, 1, 0, 48758966);
        IF_SETHIDE(0, 48758967);
        IF_SETHIDE(0, 48759005);
        IF_SETHIDE(1, 48758989);
        IF_SETHIDE(1, 48758815);
        IF_SETHIDE(0, 48758819);
        IF_SETHIDE(1, 48759131);
    };
    varclient_6712 = 1;
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    [int0, int1, int2] = DATE_RUNEDAY_TODATE(DATE_RUNEDAY());
    if (((int1 == 11) || ((int1 == 0) && (int0 <= 10)))) {
        CONSOLE_ENABLESNOW();
    };
    return;
}