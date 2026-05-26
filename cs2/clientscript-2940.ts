//[proc,login_open]
function script2940(int0: number): void {
    var int1 = script2948();
    if (((((int1 == -3) && (int0 != 10)) || (int1 == 21)) || (int1 == 1))) {
        return;
    };
    IF_SETTEXT(script1346(varclient_2576), 48758891);
    IF_SETTEXT(script2949(varclient_2577), 48758914);
    if ((IF_GETHIDE(48759092) == 0)) {
        script15651(113);
        varclient_1099 = STRING_LENGTH(varclient_6896);
        script3237(48759111, 48759112, 48759113, varclient_6896, 113, 212);
    } else if ((IF_GETHIDE(48758927) == 0)) {
        script15651(114);
        varclient_1099 = STRING_LENGTH(varclient_4192);
        script3237(48758944, 48758945, 48758946, varclient_4192, 114, 212);
    } else if ((IF_GETHIDE(48758873) == 0)) {
        if ((STRING_LENGTH(varclient_2576) > 0)) {
            script15651(101);
        } else {
            script15651(100);
        };
        if ((varclient_174 == 100)) {
            varclient_1099 = STRING_LENGTH(varclient_2576);
            script3237(48758890, 48758891, 48758892, varclient_2576, 100, 212);
        } else {
            varclient_1099 = STRING_LENGTH(script2949(varclient_2577));
            script3237(48758913, 48758914, 48758915, script2949(varclient_2577), 101, 212);
        };
    };
    return;
}