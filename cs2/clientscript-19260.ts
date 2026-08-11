//
function script19260(int0: number): void {
    var int1 = struct_getparam(45877, 5409);
    if (((struct_getparam(45877, 9200) == true) && (PLAYERMEMBER() == false))) {
        int1 = struct_getparam(45877, 9194);
    };
    var int2 = item_getparam(int1, 5405);
    if ((int2 == -1 as struct)) {
        if ((script444() == 1)) {
            script19258();
        };
        return;
    };
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 180);
    switch (MAP_LANG()) {
        case 0: {
            IF_SETGRAPHIC(34427 as graphic, comp(886, 72));  // trh175_overlay:splash_title
            break;
        }
        case 1: {
            IF_SETGRAPHIC(34426 as graphic, comp(886, 72));  // trh175_overlay:splash_title
            break;
        }
        case 2: {
            IF_SETGRAPHIC(34428 as graphic, comp(886, 72));  // trh175_overlay:splash_title
            break;
        }
        case 3: {
            IF_SETGRAPHIC(34429 as graphic, comp(886, 72));  // trh175_overlay:splash_title
            break;
        }
    };
    IF_SETTEXT("New Rewards!", comp(886, 83));  // trh175_overlay:splash_preview_title
    if ((int0 == 1)) {
        script17960(int2, -1, -1, 58064973, 58064972, 58064971, 58064969, 58064973, -1);
        IF_SETTEXT("Get your hands on the NEW Hallowe'en Mask, the NEW Ripper Outfit, the NEW Bloodthirsty Walk Override and a lot more!", comp(886, 84));  // trh175_overlay:splash_preview_desc
        IF_SETNPCMODEL(32416 as npc, comp(886, 86));  // trh175_overlay:npc_model_1
        IF_SETMODELANIM(struct_getparam(52398, 2535), comp(886, 86));  // trh175_overlay:npc_model_1
        IF_SETMODELANGLE(0, -10, 0, 1900, 0, 500, comp(886, 86));  // trh175_overlay:npc_model_1
        IF_SETMODELLIGHTING(2000, 1024, 0, 255, 255, 255, 0, 0, 0, 3224 as material, comp(886, 86));  // trh175_overlay:npc_model_1
        IF_SETOBJECT_HIGHRES(59820 as obj, 58064976);
        IF_SETOBJECT_HIGHRES(54939 as obj, 58064977);
        IF_SETOBJECT_HIGHRES(52555 as obj, 58064978);
    } else {
        IF_SETTEXT("NEW Soul Dyed Hallowe'en Mask and NEW H'oddment store stock!", comp(886, 84));  // trh175_overlay:splash_preview_desc
        IF_SETHIDE(true, comp(886, 73));  // trh175_overlay:splash_preview
        IF_SETNPCMODEL(32417 as npc, comp(886, 86));  // trh175_overlay:npc_model_1
        IF_SETMODELANIM(-1 as seq, comp(886, 86));  // trh175_overlay:npc_model_1
        IF_SETMODELANGLE(-90, 150, 0, 1750, 0, 0, comp(886, 86));  // trh175_overlay:npc_model_1
        IF_SETMODELLIGHTING(2000, 1024, 0, 255, 255, 255, 0, 0, 0, 3224 as material, comp(886, 86));  // trh175_overlay:npc_model_1
        IF_SETOBJECT_HIGHRES(59815 as obj, 58064976);
        IF_SETPOSITION(66, 92, 1, 0, comp(886, 80));  // trh175_overlay:mask_obj
        IF_SETOBJECT_HIGHRES(59813 as obj, 58064977);
        IF_SETPOSITION(106, 177, 1, 0, comp(886, 81));  // trh175_overlay:dye_obj
        IF_SETOBJECT_HIGHRES(59817 as obj, 58064978);
        IF_SETPOSITION(166, 92, 1, 0, comp(886, 82));  // trh175_overlay:hoddments_obj
    };
    return;
}