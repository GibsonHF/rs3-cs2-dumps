//
function script20773(int0: number): void {
    var int1 = 99352592;
    var int2 = comp(1516, 14);  // house_furniture_makex:side_panel_model_container
    var int3 = ((((IF_GETY(int2) + IF_GETHEIGHT(comp(1516, 19) /*house_furniture_makex:quantity_wrapper*/)) + IF_GETHEIGHT(comp(1516, 23) /*house_furniture_makex:make_button*/)) + 192) + (4 * 4));
    IF_SETSIZE(216, 192, 0, 0, comp(1516, 14));  // house_furniture_makex:side_panel_model_container
    IF_SETSIZE((4 * 2), int3, 1, 1, comp(1516, 17));  // house_furniture_makex:side_panel_scrolling
    IF_SETSIZE(16, int3, 0, 1, comp(1516, 18));  // house_furniture_makex:side_panel_scrollbar
    var int4 = 0;
    var int5 = -1 as obj;
    var int6 = -1;
    if ((varbitclient_61228 != -1)) {
        int6 = script11651(varbitclient_61228);
        if ((int6 != -1)) {
            int5 = dbrow_getfield(int6, 1515584, 0);
        };
    };
    var int7 = (script11432(IF_GETFONTMETRICS(comp(1516, 37))) + 4);  // house_furniture_makex:info_requirements_header
    IF_SETTEXT(OC_NAME(int5), comp(1516, 13));  // house_furniture_makex:info_object_name
    IF_SETMAXLINES(1, comp(1516, 13));  // house_furniture_makex:info_object_name
    script16925(99352589, 16356, 1, 14, 12);
    IF_SETOBJECT_HIGHRES(int5, int1);
    script7126(99352596, int5);
    var int8 = (IF_GETY(comp(1516, 20)) + IF_GETHEIGHT(comp(1516, 20)));  // house_furniture_makex:info_value
    var int9 = (int8 + 4);
    var int10 = script7127(int5, int7, 99352597);
    var int11 = script7129(int5, int7, 99352598);
    if ((int10 <= int7)) {
        IF_SETHIDE(true, comp(1516, 21));  // house_furniture_makex:info_requirements
    } else {
        IF_SETHIDE(false, comp(1516, 21));  // house_furniture_makex:info_requirements
        IF_SETPOSITION(0, int9, 1, 0, comp(1516, 21));  // house_furniture_makex:info_requirements
        int9 = ((int9 + int10) + 4);
    };
    if ((int11 <= int7)) {
        IF_SETHIDE(true, comp(1516, 22));  // house_furniture_makex:info_materials
    } else {
        IF_SETHIDE(false, comp(1516, 22));  // house_furniture_makex:info_materials
        IF_SETPOSITION(0, int9, 1, 0, comp(1516, 22));  // house_furniture_makex:info_materials
        int9 = ((int9 + int11) + 4);
    };
    IF_SETSCROLLPOS(0, 0, comp(1516, 17));  // house_furniture_makex:side_panel_scrolling
    script19620(99352594, 99352593, int9, -1, -1, 0, -1, -1);
    var int12 = script7105(int5);
    var int13 = script7108(int5);
    if ((((int5 == -1 as obj) || (int12 == 0)) || (int13 <= 0))) {
        script10087(99352615, 99352616, 40049, 0, 1, 0, 1);
        IF_SETENABLED(false, comp(1516, 23));  // house_furniture_makex:make_button
        return;
    };
    if ((varplayer_12907 > 0)) {
        IF_SETENABLED(true, comp(1516, 23));  // house_furniture_makex:make_button
    } else {
        IF_SETENABLED(false, comp(1516, 23));  // house_furniture_makex:make_button
    };
    script10085(99352615, 99352616, 40049, 1, int13, varplayer_12907);
    return;
}