//
function script10118(): void {
    var int0 = TTV_LIBRARY_GETSTATE();
    IF_SETHIDE(true, comp(232, 76));
    IF_SETHIDE(true, comp(232, 72));
    IF_SETHIDE(true, comp(232, 73));
    IF_SETHIDE(true, comp(232, 69));
    IF_SETHIDE(true, comp(232, 64));
    IF_SETHIDE(true, comp(232, 66));
    IF_SETHIDE(true, comp(232, 17));
    IF_SETHIDE(true, comp(232, 22));
    if ((HAS_NXT() == 1)) {
        IF_SETTEXT("Twitch integration won't work in NXT.", comp(232, 19));
        IF_SETHIDE(false, comp(232, 17));
        IF_SETHIDE(false, comp(232, 19));
        IF_SETHIDE(true, comp(232, 20));
        IF_SETHIDE(true, comp(232, 21));
        IF_SETHIDE(true, comp(232, 76));
        return;
    };
    if ((USERDETAIL_QUICKCHAT() == 1)) {
        IF_SETTEXT("You can't access this feature.", comp(232, 19));
        IF_SETHIDE(false, comp(232, 17));
        IF_SETHIDE(false, comp(232, 19));
        IF_SETHIDE(true, comp(232, 20));
        IF_SETHIDE(true, comp(232, 21));
        IF_SETHIDE(true, comp(232, 76));
        return;
    };
    if (((TTV_HASPREREQUISITES() == 0) && (varbitclient_23076 == 0))) {
        if ((OS_ISWINDOWS() == 1)) {
            IF_SETHIDE(false, comp(232, 20));
            IF_SETHIDE(true, comp(232, 21));
            IF_SETTEXT("Before you can use Twitch features you must install additional software. Once you have done this, please restart your browser/client.", comp(232, 19));
            IF_SETHIDE(false, comp(232, 76));
        } else if ((OS_ISMAC() == 1)) {
            IF_SETHIDE(true, comp(232, 20));
            IF_SETHIDE(false, comp(232, 21));
            IF_SETTEXT("Before you can use Twitch features you must install additional software. Once you have done this, please restart your browser/client.", comp(232, 19));
            IF_SETHIDE(false, comp(232, 76));
        } else if ((OS_ISLINUX() == 1)) {
            IF_SETHIDE(true, comp(232, 20));
            IF_SETHIDE(true, comp(232, 21));
            IF_SETTEXT("Twitch integration requires additional software that is not available on Linux.", comp(232, 19));
            IF_SETHIDE(true, comp(232, 76));
            return;
        };
        IF_SETHIDE(false, comp(232, 76));
        IF_SETTEXT("Before you begin:", comp(232, 23));
        IF_SETHIDE(false, comp(232, 17));
        return;
    };
    if ((int0 != 2)) {
        IF_SETONTIMER(callback(script3106), comp(232, 36));
        IF_SETHIDE(0, 15204416);
        return;
    };
    IF_SETTEXT("Watch current broadcasts", comp(232, 23));
    IF_SETHIDE(true, comp(232, 17));
    IF_SETHIDE(false, comp(232, 22));
    var int1 = TTV_LOGIN_GETSTATE();
    var int2 = 0;
    if ((int1 == 0)) {
        IF_SETHIDE(true, comp(232, 73));
        IF_SETHIDE(false, comp(232, 72));
        if ((STRING_LENGTH(varclient_4285) > 0)) {
            IF_SETTEXT(varclient_4285, comp(232, 87));
        };
        varclient_4287 = "";
        script10121(comp(232, 87), -1, -1, comp(232, 86));
        IF_SETTEXT("", comp(232, 93));
        IF_SETHIDE(false, comp(232, 38));
        IF_SETHIDE(true, comp(232, 37));
    } else {
        IF_SETHIDE(false, comp(232, 73));
        IF_SETHIDE(true, comp(232, 72));
        script10130();
        IF_SETHIDE(true, comp(232, 38));
        IF_SETHIDE(false, comp(232, 37));
    };
    int2 = TTV_LIVESTREAMS_UPDATE();
    return;
}