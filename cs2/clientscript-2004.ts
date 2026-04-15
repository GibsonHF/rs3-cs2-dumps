//[clientscript,loginscreen_slider_click_icon]
function script2004(): void {
    var int0 = CLIENTOPTION_GET(26);
    if ((int0 == 0)) {
        if (((varclient_1394 > 0) && (varclient_1394 <= 255))) {
            CLIENTOPTION_SET(26, varclient_1394);
            CLIENTOPTION_SET(22, varclient_6888);
        } else {
            CLIENTOPTION_SET(26, 127);
            CLIENTOPTION_SET(22, 127);
        };
    } else if ((int0 > 0)) {
        CLIENTOPTION_SET(26, 0);
        CLIENTOPTION_SET(22, 0);
    };
    varclient_6888 = CLIENTOPTION_GET(26);
    var int1 = comp(744, 233);
    switch (IF_GETTOP()) {
        case 906: {
            int1 = comp(911, 10);
            break;
        }
    };
    script10452(int1, 0, 255, varclient_6888);
    script15657();
    return;
}