//
function script19260(int0: unknown_int): void {
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
            stack(34427);
            stack(58064968);
            IF_SETGRAPHIC();
            break;
        }
        case 1: {
            stack(34426);
            stack(58064968);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            stack(34428);
            stack(58064968);
            IF_SETGRAPHIC();
            break;
        }
        case 3: {
            stack(34429);
            stack(58064968);
            IF_SETGRAPHIC();
            break;
        }
    };
    IF_SETTEXT("New Rewards!", comp(886, 83));
    if ((int0 == 1)) {
        script17960(int2, -1 as obj, -1 as cs2enum, comp(886, 77), comp(886, 76), comp(886, 75), comp(886, 73), comp(886, 77), -1 as dbrow);
        IF_SETTEXT("Get your hands on the NEW Hallowe'en Mask, the NEW Ripper Outfit, the NEW Bloodthirsty Walk Override and a lot more!", comp(886, 84));
        IF_SETNPCMODEL(32416 as npc, comp(886, 86));
        IF_SETMODELANIM(struct_getparam(52398, 2535), comp(886, 86));
        IF_SETMODELANGLE(0, -10, 0, 1900, 0, 500, comp(886, 86));
        IF_SETMODELLIGHTING(2000, 1024, 0, 255, 255, 255, 0, 0, 0, 3224 as material, comp(886, 86));
        IF_SETOBJECT_HIGHRES(59820 as obj, comp(886, 80));
        IF_SETOBJECT_HIGHRES(54939 as obj, comp(886, 81));
        IF_SETOBJECT_HIGHRES(52555 as obj, comp(886, 82));
    } else {
        IF_SETTEXT("NEW Soul Dyed Hallowe'en Mask and NEW H'oddment store stock!", comp(886, 84));
        IF_SETHIDE(true, comp(886, 73));
        IF_SETNPCMODEL(32417 as npc, comp(886, 86));
        IF_SETMODELANIM(-1 as seq, comp(886, 86));
        IF_SETMODELANGLE(-90, 150, 0, 1750, 0, 0, comp(886, 86));
        IF_SETMODELLIGHTING(2000, 1024, 0, 255, 255, 255, 0, 0, 0, 3224 as material, comp(886, 86));
        IF_SETOBJECT_HIGHRES(59815 as obj, comp(886, 80));
        IF_SETPOSITION(66, 92, 1, 0, comp(886, 80));
        IF_SETOBJECT_HIGHRES(59813 as obj, comp(886, 81));
        IF_SETPOSITION(106, 177, 1, 0, comp(886, 81));
        IF_SETOBJECT_HIGHRES(59817 as obj, comp(886, 82));
        IF_SETPOSITION(166, 92, 1, 0, comp(886, 82));
    };
    return;
}