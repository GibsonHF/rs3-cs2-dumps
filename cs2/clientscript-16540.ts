//
function script16540(): void {
    script16541();
    var int0 = script8403(37814273);
    if (((int0 < 0) || (int0 > IF_GETWIDTH(comp(577, 1))))) {  // inv_drop_areas:content_layer
        return;
    };
    var int1 = script8404(37814273);
    if (((int1 < 0) || (int1 > IF_GETHEIGHT(comp(577, 1))))) {  // inv_drop_areas:content_layer
        script16541();
        return;
    };
    if ((int1 >= IF_GETY(comp(577, 2)))) {  // inv_drop_areas:drop_layer
        if ((int1 <= (IF_GETY(comp(577, 2)) + IF_GETHEIGHT(comp(577, 2))))) {  // inv_drop_areas:drop_layer
            if ((IF_GETGRAPHIC(comp(577, 4)) != 9802 as graphic)) {  // inv_drop_areas:drop_bg
                script16542(37814277, 37814276, -1, 1, 1);
            };
        } else if ((int1 >= IF_GETY(comp(577, 6)))) {  // inv_drop_areas:alch_layer
            if ((int1 <= (IF_GETY(comp(577, 6)) + IF_GETHEIGHT(comp(577, 6))))) {  // inv_drop_areas:alch_layer
                if ((IF_GETGRAPHIC(comp(577, 8)) != 9802 as graphic)) {  // inv_drop_areas:alch_bg
                    script16542(37814281, 37814280, -1, 1, 1);
                };
            } else if ((((int1 >= IF_GETY(comp(577, 10) /*inv_drop_areas:diss_layer*/)) && (int1 <= (IF_GETY(comp(577, 10) /*inv_drop_areas:diss_layer*/) + IF_GETHEIGHT(comp(577, 10) /*inv_drop_areas:diss_layer*/)))) && (IF_GETGRAPHIC(comp(577, 12) /*inv_drop_areas:diss_bg*/) != 9802 as graphic))) {
                script16542(37814285, 37814284, -1, 1, 1);
            };
        } else if ((((int1 >= IF_GETY(comp(577, 10) /*inv_drop_areas:diss_layer*/)) && (int1 <= (IF_GETY(comp(577, 10) /*inv_drop_areas:diss_layer*/) + IF_GETHEIGHT(comp(577, 10) /*inv_drop_areas:diss_layer*/)))) && (IF_GETGRAPHIC(comp(577, 12) /*inv_drop_areas:diss_bg*/) != 9802 as graphic))) {
            script16542(37814285, 37814284, -1, 1, 1);
        };
    } else if ((int1 >= IF_GETY(comp(577, 6)))) {  // inv_drop_areas:alch_layer
        if ((int1 <= (IF_GETY(comp(577, 6)) + IF_GETHEIGHT(comp(577, 6))))) {  // inv_drop_areas:alch_layer
            if ((IF_GETGRAPHIC(comp(577, 8)) != 9802 as graphic)) {  // inv_drop_areas:alch_bg
                script16542(37814281, 37814280, -1, 1, 1);
            };
        } else if ((((int1 >= IF_GETY(comp(577, 10) /*inv_drop_areas:diss_layer*/)) && (int1 <= (IF_GETY(comp(577, 10) /*inv_drop_areas:diss_layer*/) + IF_GETHEIGHT(comp(577, 10) /*inv_drop_areas:diss_layer*/)))) && (IF_GETGRAPHIC(comp(577, 12) /*inv_drop_areas:diss_bg*/) != 9802 as graphic))) {
            script16542(37814285, 37814284, -1, 1, 1);
        };
    } else if ((((int1 >= IF_GETY(comp(577, 10) /*inv_drop_areas:diss_layer*/)) && (int1 <= (IF_GETY(comp(577, 10) /*inv_drop_areas:diss_layer*/) + IF_GETHEIGHT(comp(577, 10) /*inv_drop_areas:diss_layer*/)))) && (IF_GETGRAPHIC(comp(577, 12) /*inv_drop_areas:diss_bg*/) != 9802 as graphic))) {
        script16542(37814285, 37814284, -1, 1, 1);
    };
    return;
}