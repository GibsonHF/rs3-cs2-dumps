//
function script3808(int0: number): void {
    var int1 = 0;
    if ((script15986(int0) == 1)) {
        if ((script3804(script16329(int0)) == 1)) {
            IF_SETGRAPHIC(8856, script16330(int0));
        } else {
            IF_SETGRAPHIC(8854, script16330(int0));
        };
        int1 = 1;
    } else if ((varplayer_3079 == int0)) {
        IF_SETGRAPHIC(17349, script16330(int0));
    } else {
        IF_SETGRAPHIC(8853, script16330(int0));
    };
    IF_SETHIDE(int1, script16331(int0));
    return;
}