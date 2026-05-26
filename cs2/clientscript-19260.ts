//
function script19260(int0: number): void {
    var int1 = struct_getparam(45877, 5409);
    if (((struct_getparam(45877, 9200) == true) && (PLAYERMEMBER() == 0))) {
        int1 = struct_getparam(45877, 9194);
    };
    var int2 = item_getparam(int1, 5405);
    if ((int2 == -1 as struct)) {
        if ((script444() == 1)) {
            script19258();
        };
        return;
    };
    SOUND_VORBIS_VOLUME(36961, 1, 0, 180);
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
    IF_SETTEXT("New Rewards!", 58064979);
    if ((int0 == 1)) {
        script17960(int2, -1, -1, 58064973, 58064972, 58064971, 58064969, 58064973, -1);
        IF_SETTEXT("Get your hands on the NEW Hallowe'en Mask, the NEW Ripper Outfit, the NEW Bloodthirsty Walk Override and a lot more!", 58064980);
        IF_SETNPCMODEL(32416, 58064982);
        IF_SETMODELANIM(struct_getparam(52398, 2535), 58064982);
        IF_SETMODELANGLE(0, -10, 0, 1900, 0, 500, 58064982);
        IF_SETMODELLIGHTING(2000, 1024, 0, 255, 255, 255, 0, 0, 0, 3224, 58064982);
        IF_SETOBJECT_HIGHRES(59820, 58064976);
        IF_SETOBJECT_HIGHRES(54939, 58064977);
        IF_SETOBJECT_HIGHRES(52555, 58064978);
    } else {
        IF_SETTEXT("NEW Soul Dyed Hallowe'en Mask and NEW H'oddment store stock!", 58064980);
        IF_SETHIDE(1, 58064969);
        IF_SETNPCMODEL(32417, 58064982);
        IF_SETMODELANIM(-1 as seq, 58064982);
        IF_SETMODELANGLE(-90, 150, 0, 1750, 0, 0, 58064982);
        IF_SETMODELLIGHTING(2000, 1024, 0, 255, 255, 255, 0, 0, 0, 3224, 58064982);
        IF_SETOBJECT_HIGHRES(59815, 58064976);
        IF_SETPOSITION(66, 92, 1, 0, 58064976);
        IF_SETOBJECT_HIGHRES(59813, 58064977);
        IF_SETPOSITION(106, 177, 1, 0, 58064977);
        IF_SETOBJECT_HIGHRES(59817, 58064978);
        IF_SETPOSITION(166, 92, 1, 0, 58064978);
    };
    return;
}