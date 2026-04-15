//
function script3236(int0: int, int1: component, int2: component, int3: unknown_int, int4: component): void {
    var string0 = "";
    var int5 = IF_GETFONTMETRICS(int1);
    switch (int3) {
        case 100: {
            string0 = script1346(varclient_2576);
            break;
        }
        case 101: {
            string0 = script2949(varclient_2577);
            break;
        }
        case 114: {
            string0 = varclient_4192;
            break;
        }
        case 113: {
            string0 = IF_GETTEXT(int1);
            break;
        }
    };
    if ((IF_GETHIDE(comp(744, 190)) == true)) {
        script315();
    };
    if ((script13749() == true)) {
        varclient_1099 = script1401(999, string0, int5, 0);
        script3237(int4, int1, int2, string0, int3, int5);
        return;
    };
    varclient_1099 = script1401(int0, string0, int5, 0);
    script3237(int4, int1, int2, string0, int3, int5);
    return;
}