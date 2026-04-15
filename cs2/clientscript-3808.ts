//
function script3808(int0: int): void {
    var int1 = false;
    if ((script15986(int0) == 1)) {
        if ((script3804(script16329(int0)) == 1)) {
            stack(8856);
            stack(script16330(int0));
            IF_SETGRAPHIC();
        } else {
            stack(8854);
            stack(script16330(int0));
            IF_SETGRAPHIC();
        };
        int1 = true;
    } else if ((varplayer_3079 == int0)) {
        stack(17349);
        stack(script16330(int0));
        IF_SETGRAPHIC();
    } else {
        stack(8853);
        stack(script16330(int0));
        IF_SETGRAPHIC();
    };
    IF_SETHIDE(int1, script16331(int0));
    return;
}