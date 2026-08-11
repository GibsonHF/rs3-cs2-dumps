//
function script621(): void {
    script622();
    if ((varplayer_138 == -1)) {
        IF_SETHIDE(false, comp(105, 11));  // stockmarket:choosebuy0_button_layer ?
        script628();
        IF_SETONINVTRANSMIT(callback(), comp(105, 197));  // stockmarket:com_197 ?
        varclient_83 = 0;
        varclient_82 = 0;
        return;
    } else if (((STOCKMARKET_ISOFFEREMPTY(varplayer_138, 0) == 1) && (varplayer_139 == -1))) {
        IF_SETHIDE(false, comp(105, 11));  // stockmarket:choosebuy0_button_layer ?
        script628();
        IF_SETONINVTRANSMIT(callback(), comp(105, 197));  // stockmarket:com_197 ?
        varclient_83 = 0;
        varclient_82 = 0;
        return;
    };
    script20887();
    if ((STOCKMARKET_ISOFFEREMPTY(varplayer_138, 0) == 0)) {
        IF_SETHIDE(false, comp(105, 130));  // stockmarket:choosesell5_button_over_layer ?
        IF_SETHIDE(false, comp(105, 197));  // stockmarket:com_197 ?
        script594(STOCKMARKET_GETOFFERTYPE(varplayer_138, 0), STOCKMARKET_GETOFFERITEM(varplayer_138, 0), STOCKMARKET_GETOFFERCOUNT(varplayer_138, 0), STOCKMARKET_GETOFFERPRICE(varplayer_138, 0));
        script593(varplayer_138);
        if ((STOCKMARKET_ISOFFERFINISHED(varplayer_138, 0) == 1)) {
            IF_SETENABLED(false, comp(105, 212));  // stockmarket:box1 ?
            IF_SETENABLED(false, comp(105, 213));  // stockmarket:item_description ?
            IF_SETHIDE(true, comp(105, 161));  // stockmarket:label_layer_6 ?
            IF_SETHIDE(true, comp(105, 163));  // stockmarket:labelsell6 ?
            IF_SETHIDE(true, comp(105, 212));  // stockmarket:box1 ?
            IF_SETHIDE(true, comp(105, 213));  // stockmarket:item_description ?
        } else {
            IF_SETENABLED(false, comp(105, 212));  // stockmarket:box1 ?
            IF_SETENABLED(false, comp(105, 213));  // stockmarket:item_description ?
            IF_SETHIDE(false, comp(105, 161));  // stockmarket:label_layer_6 ?
            IF_SETHIDE(false, comp(105, 163));  // stockmarket:labelsell6 ?
            IF_SETHIDE(true, comp(105, 212));  // stockmarket:box1 ?
            IF_SETHIDE(false, comp(105, 213));  // stockmarket:item_description ?
        };
        script15021();
        if (((varclient_83 > 0) || (varclient_82 > 0))) {
            script15038(varclient_84, varclient_85, 0);
        } else {
            script15038(varplayer_136, varplayer_137, 0);
        };
    } else {
        if ((varplayer_135 == -1 as obj)) {
            varclient_6789 = 0;
            varclient_6790 = 0;
            IF_SETHIDE(true, comp(105, 142));  // stockmarket:offersummary6 ?
        } else {
            script15021();
        };
        IF_SETHIDE(false, comp(105, 130));  // stockmarket:choosesell5_button_over_layer ?
        IF_SETHIDE(false, comp(105, 9));  // stockmarket:editmode0 ?
        IF_SETENABLED(false, comp(105, 212));  // stockmarket:box1 ?
        IF_SETENABLED(false, comp(105, 213));  // stockmarket:item_description ?
        IF_SETHIDE(false, comp(105, 212));  // stockmarket:box1 ?
        IF_SETHIDE(true, comp(105, 213));  // stockmarket:item_description ?
        IF_SETHIDE(false, comp(105, 161));  // stockmarket:label_layer_6 ?
        IF_SETHIDE(false, comp(105, 163));  // stockmarket:labelsell6 ?
        if ((varplayer_139 == 0)) {
            IF_SETHIDE(false, comp(105, 10));  // stockmarket:offerchoosetype0 ?
        };
        if (((varclient_83 > 0) || (varclient_82 > 0))) {
            script15038(varclient_84, varclient_85, 0);
        } else {
            script15038(varplayer_136, varplayer_137, 0);
        };
    };
    return;
}