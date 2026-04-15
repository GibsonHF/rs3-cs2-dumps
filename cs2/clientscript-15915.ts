//
function script15915(): void {
    IF_SETOPCURSOR(1, 46 as cursor, comp(861, 6));
    varclient_6930 = MODULO(varclient_6930, 3000);
    var int0 = ((varplayer_9925 - DATE_MINUTES()) - 1);
    var int1 = 0;
    var string0 = "";
    var int2 = (varclient_6930 + MODULO(varclient_6932, 50));
    if (((varclient_6931 > 50) && (MODULO(int2, 50) != MODULO(varclient_6931, 50)))) {
        varclient_6932 = (varclient_6932 + (MODULO(varclient_6931, 50) - MODULO(int2, 50)));
    };
    int2 = (varclient_6930 + MODULO(varclient_6932, 50));
    int2 = ((3000 - int2) / 50);
    if ((int0 >= 60)) {
        [int1, int0] = script15907(int0, 60);
    };
    var string1 = inttostring(int2, 10);
    if ((int2 < 10)) {
        string1 = `0${string1}`;
    } else if ((int2 == 60)) {
        string1 = "00";
    };
    var string2 = inttostring(int0, 10);
    if ((int0 < 10)) {
        string2 = `0${string2}`;
    };
    var string3 = inttostring(int1, 10);
    if ((int1 > 0)) {
        if ((int0 == 60)) {
            string2 = "00";
        };
        if ((int1 < 10)) {
            string3 = `0${string3}`;
        };
        string0 = `${string3}:${string2}:${string1}`;
    } else if ((int0 < 0)) {
        string0 = "00:00";
        script3536("This instance has expired.", comp(861, 7), -1);
    } else {
        string0 = `${string2}:${string1}`;
    };
    IF_SETTEXT(string0, comp(861, 8));
    varclient_6930 = (varclient_6930 + 1);
    return;
}