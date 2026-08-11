//
function script19163(): void {
    IF_SETHIDE(false, comp(1288, 0));  // trh_academy_shared_overlay:splash_screen
    IF_SETHIDE(true, comp(1288, 1));  // trh_academy_shared_overlay:universe
    IF_SETHIDE(true, comp(1288, 151));  // trh_academy_shared_overlay:splash_screen_title
    IF_SETHIDE(false, comp(1288, 153));  // trh_academy_shared_overlay:splash_screen_title_graphic
    script4170(84410521, 34265, 34266, 34267, 34268);
    IF_SETPOSITION(0, 20, 1, 0, comp(1288, 152));  // trh_academy_shared_overlay:splash_screen_desc
    IF_SETSIZE(325, 200, 0, 0, comp(1288, 152));  // trh_academy_shared_overlay:splash_screen_desc
    IF_SETTEXTFONT(209 as fontmetrics, comp(1288, 152));  // trh_academy_shared_overlay:splash_screen_desc
    IF_SETHIDE(true, comp(1288, 149));  // trh_academy_shared_overlay:splash_screen_desc_shadow
    IF_SETTEXT(`Increase your skill level up to a maximum of <col=F0BE79>${inttostring(99, 10)}</col> by completing skilling locations.<br><br><br>Reach level milestones to get extra <col=F0BE79>Christmas wrapping paper</col>!`, comp(1288, 152));  // trh_academy_shared_overlay:splash_screen_desc
    IF_SETGRAPHIC(34244 as graphic, comp(1288, 85));  // trh_academy_shared_overlay:splash_screen_bg
    IF_SETPOSITION(0, 4, 1, 2, comp(1288, 85));  // trh_academy_shared_overlay:splash_screen_bg
    if ((script18365() == 0)) {
        IF_SETNPCMODEL(31245 as npc, comp(1288, 162));  // trh_academy_shared_overlay:splash_screen_npc_large_model_1
        IF_SETPOSITION(-29, -3, 1, 1, comp(1288, 162));  // trh_academy_shared_overlay:splash_screen_npc_large_model_1
        IF_SETMODELANGLE(-55, 72, 0, -230, 0, 400, comp(1288, 162));  // trh_academy_shared_overlay:splash_screen_npc_large_model_1
        IF_SETMODELANIM(18019 as seq, comp(1288, 162));  // trh_academy_shared_overlay:splash_screen_npc_large_model_1
        IF_SETNPCMODEL(31246 as npc, comp(1288, 163));  // trh_academy_shared_overlay:splash_screen_npc_large_model_2
        IF_SETPOSITION(29, -3, 1, 1, comp(1288, 163));  // trh_academy_shared_overlay:splash_screen_npc_large_model_2
        IF_SETMODELANGLE(55, 72, 0, 230, 0, 400, comp(1288, 163));  // trh_academy_shared_overlay:splash_screen_npc_large_model_2
        IF_SETMODELANIM(18019 as seq, comp(1288, 163));  // trh_academy_shared_overlay:splash_screen_npc_large_model_2
    } else {
        IF_SETNPCMODEL(31492 as npc, comp(1288, 162));  // trh_academy_shared_overlay:splash_screen_npc_large_model_1
        IF_SETPOSITION(-29, -3, 1, 1, comp(1288, 162));  // trh_academy_shared_overlay:splash_screen_npc_large_model_1
        IF_SETMODELANGLE(-55, 72, 0, -230, 0, 400, comp(1288, 162));  // trh_academy_shared_overlay:splash_screen_npc_large_model_1
        IF_SETMODELANIM(18019 as seq, comp(1288, 162));  // trh_academy_shared_overlay:splash_screen_npc_large_model_1
        IF_SETNPCMODEL(31493 as npc, comp(1288, 163));  // trh_academy_shared_overlay:splash_screen_npc_large_model_2
        IF_SETPOSITION(29, -3, 1, 1, comp(1288, 163));  // trh_academy_shared_overlay:splash_screen_npc_large_model_2
        IF_SETMODELANGLE(60, 50, 0, 150, 0, 300, comp(1288, 163));  // trh_academy_shared_overlay:splash_screen_npc_large_model_2
        IF_SETMODELANIM(22645 as seq, comp(1288, 163));  // trh_academy_shared_overlay:splash_screen_npc_large_model_2
    };
    return;
}