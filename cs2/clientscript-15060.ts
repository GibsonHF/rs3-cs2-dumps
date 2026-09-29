//
function script15060(int0: number, int1: number, string0: string): void {
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = 0;
    switch (varbitplayer_19000) {
        case 1: {
            int2 = comp(105, 229);  // stockmarket:search_build ?
            int3 = comp(105, 230);  // stockmarket:search_obj ?
            int4 = comp(105, 224);  // stockmarket:search_warning_layer ?
            int5 = IF_GETSCROLLY(comp(105, 222));  // stockmarket:search_scrolling ?
            break;
        }
        case 4: {
            int2 = comp(707, 18);  // stock_favourites:search_build ?
            int3 = comp(707, 19);  // stock_favourites:search_obj ?
            int4 = comp(707, 8);  // stock_favourites:search_warning_layer ?
            break;
        }
    };
    if ((((int2 != comp(-1, 65535)) && (int3 != comp(-1, 65535))) && (int4 != comp(-1, 65535)))) {
        CC_DELETEALL(int2);
        CC_DELETEALL(int3);
        if ((STRING_LENGTH(string0) > 0)) {
            script11701(string0, int0, int2, int3, int1, int5);
            IF_SETHIDE(true, int4);
        } else {
            if ((script20898(0) == 1)) {
                return;
            };
            script11702(0, 0);
            IF_SETHIDE(false, int4);
        };
    };
    return;
}