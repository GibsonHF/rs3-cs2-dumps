//[proc,login_open]
function script2940(int0: number): void {
    var int1 = script2948();
    if ((int1 == -3)) {
        if ((((int0 != 10) || (int1 == 21)) || (int1 == 1))) {
            return;
        };
    } else if (((int1 == 21) || (int1 == 1))) {
        return;
    };
    IF_SETTEXT(script1346(varclient_2576), comp(744, 111));
    IF_SETTEXT(script2949(varclient_2577), comp(744, 134));
    if ((IF_GETHIDE(comp(744, 319)) == 0)) {
        script15651(113);
        varclient_1099 = STRING_LENGTH(varclient_6896);
        script3237(48759122, 48759123, 48759124, varclient_6896, 113, 212);
    } else if ((IF_GETHIDE(comp(744, 147)) == 0)) {
        script15651(114);
        varclient_1099 = STRING_LENGTH(varclient_4192);
        script3237(48758948, 48758949, 48758950, varclient_4192, 114, 212);
    } else if ((IF_GETHIDE(comp(744, 93)) == 0)) {
        if ((STRING_LENGTH(varclient_2576) > 0)) {
            script15651(101);
        } else {
            script15651(100);
        };
        if ((varclient_174 == 100)) {
            varclient_1099 = STRING_LENGTH(varclient_2576);
            script3237(48758894, 48758895, 48758896, varclient_2576, 100, 212);
        } else {
            varclient_1099 = STRING_LENGTH(script2949(varclient_2577));
            script3237(48758917, 48758918, 48758919, script2949(varclient_2577), 101, 212);
        };
    };
    return;
}