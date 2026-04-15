//[proc,login_open]
function script2940(int0: int): void {
    var int1 = script2948();
    if (((((int1 == -3) && (int0 != 10)) || (int1 == 21)) || (int1 == 1))) {
        return;
    };
    IF_SETTEXT(script1346(varclient_2576), comp(744, 106));
    IF_SETTEXT(script2949(varclient_2577), comp(744, 129));
    if ((IF_GETHIDE(comp(744, 307)) == false)) {
        script15651(113);
        varclient_1099 = STRING_LENGTH(varclient_6896);
        script3237(comp(744, 326), comp(744, 327), comp(744, 328), varclient_6896, 113, 212 as fontmetrics);
    } else if ((IF_GETHIDE(comp(744, 142)) == false)) {
        script15651(114);
        varclient_1099 = STRING_LENGTH(varclient_4192);
        script3237(comp(744, 159), comp(744, 160), comp(744, 161), varclient_4192, 114, 212 as fontmetrics);
    } else if ((IF_GETHIDE(comp(744, 88)) == false)) {
        if ((STRING_LENGTH(varclient_2576) > 0)) {
            script15651(101);
        } else {
            script15651(100);
        };
        if ((varclient_174 == 100)) {
            varclient_1099 = STRING_LENGTH(varclient_2576);
            script3237(comp(744, 105), comp(744, 106), comp(744, 107), varclient_2576, 100, 212 as fontmetrics);
        } else {
            varclient_1099 = STRING_LENGTH(script2949(varclient_2577));
            script3237(comp(744, 128), comp(744, 129), comp(744, 130), script2949(varclient_2577), 101, 212 as fontmetrics);
        };
    };
    return;
}