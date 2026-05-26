//
function script7123(): void {
    if (((varplayer_1170 == -1 as obj) || (varplayer_1170 == 0 as obj))) {
        return;
    };
    var int0 = varplayer_1170;
    if ((int0 == -1 as obj)) {
        IF_SETHIDE(1, 89784325);
        IF_SETHIDE(1, 89784335);
        IF_SETHIDE(1, 89784343);
        return;
    };
    IF_SETHIDE(0, 89784325);
    IF_SETHIDE(0, 89784335);
    IF_SETHIDE(0, 89784343);
    var int1 = item_getparam(int0, 2989);
    if ((int1 == -1 as obj)) {
        int1 = int0;
    };
    var int2 = item_getparam(int0, 3858);
    if ((int2 > -1)) {
        IF_SETHIDE(0, 89784329);
        IF_SETHIDE(0, 89784328);
        IF_SETHIDE(0, 89784327);
        switch (int2) {
            case 0: {
                IF_SETGRAPHIC(15217 as graphic, 89784329);
                IF_SETGRAPHIC(15218 as graphic, 89784328);
                IF_SETGRAPHIC(15218 as graphic, 89784327);
                break;
            }
            case 1: {
                IF_SETGRAPHIC(15217 as graphic, 89784329);
                IF_SETGRAPHIC(15217 as graphic, 89784328);
                IF_SETGRAPHIC(15218 as graphic, 89784327);
                break;
            }
            case 2: {
                IF_SETGRAPHIC(15217 as graphic, 89784329);
                IF_SETGRAPHIC(15217 as graphic, 89784328);
                IF_SETGRAPHIC(15217 as graphic, 89784327);
                break;
            }
        };
    } else {
        IF_SETHIDE(1, 89784329);
        IF_SETHIDE(1, 89784328);
        IF_SETHIDE(1, 89784327);
    };
    if ((item_getparam(int0, 5491) != -1 as graphic)) {
        IF_SETGRAPHIC(item_getparam(int0, 5491), 89784332);
        IF_SETSIZE(32, 32, 0, 0, 89784332);
    } else {
        if ((item_getparam(int0, 2653) > 1)) {
            IF_SETOBJECT(int1, script18374(int0), 89784332);
        } else if ((item_getparam(int0, 3860) > 1)) {
            IF_SETOBJECT(int1, item_getparam(int0, 3860), 89784332);
        } else {
            IF_SETOBJECT_NONUM(int1, -1, 89784332);
        };
        IF_SETSIZE(36, 32, 0, 0, 89784332);
    };
    if (((STRING_LENGTH(item_getparam(int0, 3859)) > 0) && (item_getparam(int0, 2989) != -1 as obj))) {
        IF_SETONMOUSEREPEAT(callback(script3584, item_getparam(int0, 2989), item_getparam(int0, 2989), -1, -2147483645, -2147483643, 0, 1, ""), 89784325);
    } else {
        IF_SETONMOUSEREPEAT(callback(script14194, int0, -2147483645, -2147483643), 89784325);
    };
    var int3 = script7124(89784333, int0, script18374(int0));
    script7126(89784336, int0);
    var int4 = ((IF_GETY(89784336) + IF_GETHEIGHT(89784336)) + 2);
    var int5 = 0;
    var int6 = ((IF_GETY(89784340) + IF_GETHEIGHT(89784340)) + 2);
    IF_SETPOSITION(IF_GETX(89784339), int4, 0, 0, 89784339);
    int5 = script7127(int0, int6, 89784339);
    if ((int5 > int6)) {
        IF_SETHIDE(0, 89784339);
        int4 = ((int4 + int5) + 2);
    } else {
        IF_SETHIDE(1, 89784339);
    };
    IF_SETPOSITION(IF_GETX(89784341), int4, 0, 0, 89784341);
    int6 = ((IF_GETY(89784342) + IF_GETHEIGHT(89784342)) + 2);
    int5 = script7129(int0, int6, 89784341);
    if ((int5 > int6)) {
        IF_SETHIDE(0, 89784341);
        int4 = (int4 + int5);
    } else {
        IF_SETHIDE(1, 89784341);
    };
    if ((IF_GETHEIGHT(89784335) < int4)) {
        IF_SETSCROLLSIZE(IF_GETWIDTH(89784335), int4, 89784335);
    } else {
        IF_SETSCROLLSIZE(0, 0, 89784335);
    };
    IF_SETSCROLLPOS(0, 0, 89784335);
    script31(89784343, 89784335, 4343, 4340, 4341, 4342, 4337, 4336);
    return;
}