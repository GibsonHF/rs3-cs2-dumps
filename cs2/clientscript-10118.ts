//
function script10118(): void {
    var int0 = TTV_LIBRARY_GETSTATE();
    IF_SETHIDE(1, 15204428);
    IF_SETHIDE(1, 15204424);
    IF_SETHIDE(1, 15204425);
    IF_SETHIDE(1, 15204421);
    IF_SETHIDE(1, 15204416);
    IF_SETHIDE(1, 15204418);
    IF_SETHIDE(1, 15204369);
    IF_SETHIDE(1, 15204374);
    if ((HAS_NXT() == 1)) {
        IF_SETTEXT("Twitch integration won't work in NXT.", 15204371);
        IF_SETHIDE(0, 15204369);
        IF_SETHIDE(0, 15204371);
        IF_SETHIDE(1, 15204372);
        IF_SETHIDE(1, 15204373);
        IF_SETHIDE(1, 15204428);
        return;
    };
    if ((USERDETAIL_QUICKCHAT() == 1)) {
        IF_SETTEXT("You can't access this feature.", 15204371);
        IF_SETHIDE(0, 15204369);
        IF_SETHIDE(0, 15204371);
        IF_SETHIDE(1, 15204372);
        IF_SETHIDE(1, 15204373);
        IF_SETHIDE(1, 15204428);
        return;
    };
    if (((TTV_HASPREREQUISITES() == 0) && (varbitclient_23076 == 0))) {
        if ((OS_ISWINDOWS() == 1)) {
            IF_SETHIDE(0, 15204372);
            IF_SETHIDE(1, 15204373);
            IF_SETTEXT("Before you can use Twitch features you must install additional software. Once you have done this, please restart your browser/client.", 15204371);
            IF_SETHIDE(0, 15204428);
        } else if ((OS_ISMAC() == 1)) {
            IF_SETHIDE(1, 15204372);
            IF_SETHIDE(0, 15204373);
            IF_SETTEXT("Before you can use Twitch features you must install additional software. Once you have done this, please restart your browser/client.", 15204371);
            IF_SETHIDE(0, 15204428);
        } else if ((OS_ISLINUX() == 1)) {
            IF_SETHIDE(1, 15204372);
            IF_SETHIDE(1, 15204373);
            IF_SETTEXT("Twitch integration requires additional software that is not available on Linux.", 15204371);
            IF_SETHIDE(1, 15204428);
            return;
        };
        IF_SETHIDE(0, 15204428);
        IF_SETTEXT("Before you begin:", 15204375);
        IF_SETHIDE(0, 15204369);
        return;
    };
    if ((int0 != 2)) {
        IF_SETONTIMER(callback(script3106), 15204388);
        IF_SETHIDE(0, 15204416);
        return;
    };
    IF_SETTEXT("Watch current broadcasts", 15204375);
    IF_SETHIDE(1, 15204369);
    IF_SETHIDE(0, 15204374);
    var int1 = TTV_LOGIN_GETSTATE();
    var int2 = 0;
    if ((int1 == 0)) {
        IF_SETHIDE(1, 15204425);
        IF_SETHIDE(0, 15204424);
        if ((STRING_LENGTH(varclient_4285) > 0)) {
            IF_SETTEXT(varclient_4285, 15204439);
        };
        varclient_4287 = "";
        script10121(15204439, -1, -1, 15204438);
        IF_SETTEXT("", 15204445);
        IF_SETHIDE(0, 15204390);
        IF_SETHIDE(1, 15204389);
    } else {
        IF_SETHIDE(0, 15204425);
        IF_SETHIDE(1, 15204424);
        script10130();
        IF_SETHIDE(1, 15204390);
        IF_SETHIDE(0, 15204389);
    };
    int2 = TTV_LIVESTREAMS_UPDATE();
    return;
}