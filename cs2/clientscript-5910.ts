//
function script5910(): void {
    if ((varbitplayer_28041 == 0)) {
        IF_SETTEXT("You need to select a skybox first", comp(623, 7));  // machinima_skybox_filter:skybox_base
        IF_SETCOLOUR(16711680, comp(623, 7));  // machinima_skybox_filter:skybox_base
    } else {
        IF_SETTEXT(`Skybox base values : ${enum_getvalue(0, 36, 15005 as cs2enum, varbitplayer_28041)}`, comp(623, 7));  // machinima_skybox_filter:skybox_base
        IF_SETCOLOUR(16777215, comp(623, 7));  // machinima_skybox_filter:skybox_base
    };
    var int0 = (IF_GETY(comp(623, 6)) + IF_GETHEIGHT(comp(623, 6)));  // machinima_skybox_filter:volumetric_density
    if ((int0 >= IF_GETHEIGHT(comp(623, 13)))) {  // machinima_skybox_filter:scroll_layer
        IF_SETSCROLLSIZE(0, int0, comp(623, 13));  // machinima_skybox_filter:scroll_layer
        script7791(40828940, 40828941);
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(623, 13));  // machinima_skybox_filter:scroll_layer
        IF_SETSCROLLPOS(0, 0, comp(623, 13));  // machinima_skybox_filter:scroll_layer
        CC_DELETEALL(comp(623, 13));  // machinima_skybox_filter:scroll_layer
    };
    IF_SETTEXT(inttostring(varbitplayer_42898, 10), comp(623, 52));  // machinima_skybox_filter:sun_ambient_colour_r
    IF_SETTEXT(inttostring(varbitplayer_42899, 10), comp(623, 55));  // machinima_skybox_filter:sun_ambient_colour_g
    IF_SETTEXT(inttostring(varbitplayer_42900, 10), comp(623, 58));  // machinima_skybox_filter:sun_ambient_colour_b
    IF_SETTEXT(inttostring(varbitplayer_42901, 10), comp(623, 81));  // machinima_skybox_filter:fog_colour_r
    IF_SETTEXT(inttostring(varbitplayer_42902, 10), comp(623, 77));  // machinima_skybox_filter:fog_colour_g
    IF_SETTEXT(inttostring(varbitplayer_42903, 10), comp(623, 73));  // machinima_skybox_filter:fog_colour_b
    IF_SETTEXT(inttostring(varbitplayer_42907, 10), comp(623, 62));  // machinima_skybox_filter:sun_ambient_text
    IF_SETTEXT(inttostring(varbitplayer_42909, 10), comp(623, 89));  // machinima_skybox_filter:fog_depth_text
    IF_SETTEXT(inttostring(varbitplayer_42904, 10), comp(623, 102));  // machinima_skybox_filter:volumetric_colour_r
    IF_SETTEXT(inttostring(varbitplayer_42905, 10), comp(623, 98));  // machinima_skybox_filter:volumetric_colour_g
    IF_SETTEXT(inttostring(varbitplayer_42906, 10), comp(623, 94));  // machinima_skybox_filter:volumetric_colour_b
    IF_SETTEXT(inttostring(varbitplayer_42908, 10), comp(623, 110));  // machinima_skybox_filter:volumetric_density_text
    return;
}