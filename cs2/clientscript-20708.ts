//
function script20708(int0: number, int1: number, int2: number, int3: number): void {
    if ((script6431() == 1)) {
        ACTIVECLANCHANNEL_FIND_AFFINED(0);
    };
    IF_SETHIDE(true, comp(1499, 28));  // construction_house_furniture_portal_nexus_configure:available_delete
    if ((varclient_8440 == comp(-1, 65535))) {
        return;
    };
    var int4 = 1;
    switch (int2) {
        case 98238492: {
            script10544(UI_GETCATEGORY(int1));
            break;
        }
        case 98238490: {
            if ((int0 == 98238490)) {
                int4 = 0;
            } else {
                script10544(UI_GETCATEGORY(int1));
            };
            break;
        }
        case 98238500: {
            if ((int0 == 98238490)) {
                if ((script11067() != -1)) {
                    script10163(UI_GETCATEGORY(int1), UI_GETCATEGORY(int3));
                };
            } else {
                script10164(UI_GETCATEGORY(int1), UI_GETCATEGORY(int3));
                varbitplayer_61265 = 1;
            };
            break;
        }
        case 98238472: {
            if ((int0 == 98238500)) {
                varbitplayer_61311 = script11076(UI_GETCATEGORY(int1));
                script16297();
            };
            break;
        }
        default: {
            int4 = 0;
            break;
        }
    };
    script20709();
    varclient_8440 = comp(-1, 65535);
    varclient_8441 = -1;
    if ((int4 == 1)) {
        script16832();
        script16292();
    };
    return;
}