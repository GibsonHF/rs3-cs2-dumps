//
function script7123(): void {
    if (((varplayer_1170 == -1 as obj) || (varplayer_1170 == 0 as obj))) {
        return;
    };
    var int0 = varplayer_1170;
    if ((int0 == -1 as obj)) {
        IF_SETHIDE(true, comp(1370, 5));  // makex2012:info_overview
        IF_SETHIDE(true, comp(1370, 15));  // makex2012:info_listing
        IF_SETHIDE(true, comp(1370, 23));  // makex2012:info_scrollbar
        return;
    };
    IF_SETHIDE(false, comp(1370, 5));  // makex2012:info_overview
    IF_SETHIDE(false, comp(1370, 15));  // makex2012:info_listing
    IF_SETHIDE(false, comp(1370, 23));  // makex2012:info_scrollbar
    var int1 = item_getparam(int0, 2989);
    if ((int1 == -1 as obj)) {
        int1 = int0;
    };
    var int2 = item_getparam(int0, 3858);
    if ((int2 > -1)) {
        IF_SETHIDE(false, comp(1370, 9));  // makex2012:info_upgrade_0
        IF_SETHIDE(false, comp(1370, 8));  // makex2012:info_upgrade_1
        IF_SETHIDE(false, comp(1370, 7));  // makex2012:info_upgrade_2
        switch (int2) {
            case 0: {
                IF_SETGRAPHIC(15217 as graphic, comp(1370, 9));  // makex2012:info_upgrade_0
                IF_SETGRAPHIC(15218 as graphic, comp(1370, 8));  // makex2012:info_upgrade_1
                IF_SETGRAPHIC(15218 as graphic, comp(1370, 7));  // makex2012:info_upgrade_2
                break;
            }
            case 1: {
                IF_SETGRAPHIC(15217 as graphic, comp(1370, 9));  // makex2012:info_upgrade_0
                IF_SETGRAPHIC(15217 as graphic, comp(1370, 8));  // makex2012:info_upgrade_1
                IF_SETGRAPHIC(15218 as graphic, comp(1370, 7));  // makex2012:info_upgrade_2
                break;
            }
            case 2: {
                IF_SETGRAPHIC(15217 as graphic, comp(1370, 9));  // makex2012:info_upgrade_0
                IF_SETGRAPHIC(15217 as graphic, comp(1370, 8));  // makex2012:info_upgrade_1
                IF_SETGRAPHIC(15217 as graphic, comp(1370, 7));  // makex2012:info_upgrade_2
                break;
            }
        };
    } else {
        IF_SETHIDE(true, comp(1370, 9));  // makex2012:info_upgrade_0
        IF_SETHIDE(true, comp(1370, 8));  // makex2012:info_upgrade_1
        IF_SETHIDE(true, comp(1370, 7));  // makex2012:info_upgrade_2
    };
    if ((item_getparam(int0, 5491) != -1 as graphic)) {
        IF_SETGRAPHIC(item_getparam(int0, 5491), comp(1370, 12));  // makex2012:info_icon
        IF_SETSIZE(32, 32, 0, 0, comp(1370, 12));  // makex2012:info_icon
    } else {
        if ((item_getparam(int0, 2653) > 1)) {
            IF_SETOBJECT(int1, script18374(int0), comp(1370, 12));  // makex2012:info_icon
        } else if ((item_getparam(int0, 3860) > 1)) {
            IF_SETOBJECT(int1, item_getparam(int0, 3860), comp(1370, 12));  // makex2012:info_icon
        } else {
            IF_SETOBJECT_NONUM(int1, -1, comp(1370, 12));  // makex2012:info_icon
        };
        IF_SETSIZE(36, 32, 0, 0, comp(1370, 12));  // makex2012:info_icon
    };
    if ((STRING_LENGTH(item_getparam(int0, 3859)) > 0)) {
        if ((item_getparam(int0, 2989) != -1)) {
            stack(3584);
            stack(item_getparam(int0, 2989));
            stack(item_getparam(int0, 2989));
            stack(-1);
            stack(-2147483645);
            stack(-2147483643);
            stack(0);
            stack(callback(script1));
            IF_SETONMOUSEREPEAT("iiiiiiis", 89784325);
        } else {
            IF_SETONMOUSEREPEAT(callback(script14194, int0, -2147483645, -2147483643), comp(1370, 5));  // makex2012:info_overview
        };
    } else {
        IF_SETONMOUSEREPEAT(callback(script14194, int0, -2147483645, -2147483643), comp(1370, 5));  // makex2012:info_overview
    };
    var int3 = script7124(89784333, int0, script18374(int0));
    script7126(89784336, int0);
    var int4 = ((IF_GETY(comp(1370, 16)) + IF_GETHEIGHT(comp(1370, 16))) + 2);  // makex2012:info_value
    var int5 = 0;
    var int6 = ((IF_GETY(comp(1370, 20)) + IF_GETHEIGHT(comp(1370, 20))) + 2);  // makex2012:info_requirements_header
    IF_SETPOSITION(IF_GETX(comp(1370, 19)), int4, 0, 0, comp(1370, 19));  // makex2012:info_requirements
    int5 = script7127(int0, int6, 89784339);
    if ((int5 > int6)) {
        IF_SETHIDE(false, comp(1370, 19));  // makex2012:info_requirements
        int4 = ((int4 + int5) + 2);
    } else {
        IF_SETHIDE(true, comp(1370, 19));  // makex2012:info_requirements
    };
    IF_SETPOSITION(IF_GETX(comp(1370, 21)), int4, 0, 0, comp(1370, 21));  // makex2012:info_materials
    int6 = ((IF_GETY(comp(1370, 22)) + IF_GETHEIGHT(comp(1370, 22))) + 2);  // makex2012:info_materials_header
    int5 = script7129(int0, int6, 89784341);
    if ((int5 > int6)) {
        IF_SETHIDE(false, comp(1370, 21));  // makex2012:info_materials
        int4 = (int4 + int5);
    } else {
        IF_SETHIDE(true, comp(1370, 21));  // makex2012:info_materials
    };
    if ((IF_GETHEIGHT(comp(1370, 15)) < int4)) {  // makex2012:info_listing
        IF_SETSCROLLSIZE(IF_GETWIDTH(comp(1370, 15)), int4, comp(1370, 15));  // makex2012:info_listing
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(1370, 15));  // makex2012:info_listing
    };
    IF_SETSCROLLPOS(0, 0, comp(1370, 15));  // makex2012:info_listing
    script31(89784343, 89784335, 4343, 4340, 4341, 4342, 4337, 4336);
    return;
}