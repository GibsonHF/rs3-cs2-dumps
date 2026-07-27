//
function script621(): void {
    script622();
    if (((varplayer_138 == -1) || ((STOCKMARKET_ISOFFEREMPTY(varplayer_138, 0) == 1) && (varplayer_139 == -1)))) {
        IF_SETHIDE(false, comp(105, 11));
        script628();
        IF_SETONINVTRANSMIT(callback(), comp(105, 197));
        varclient_83 = 0;
        varclient_82 = 0;
        return;
    };
    script20887();
    if ((STOCKMARKET_ISOFFEREMPTY(varplayer_138, 0) == 0)) {
        IF_SETHIDE(false, comp(105, 130));
        IF_SETHIDE(false, comp(105, 197));
        script594(STOCKMARKET_GETOFFERTYPE(varplayer_138, 0), STOCKMARKET_GETOFFERITEM(varplayer_138, 0), STOCKMARKET_GETOFFERCOUNT(varplayer_138, 0), STOCKMARKET_GETOFFERPRICE(varplayer_138, 0));
        script593(varplayer_138);
        if ((STOCKMARKET_ISOFFERFINISHED(varplayer_138, 0) == 1)) {
            IF_SETENABLED(false, comp(105, 212));
            IF_SETENABLED(false, comp(105, 213));
            IF_SETHIDE(true, comp(105, 161));
            IF_SETHIDE(true, comp(105, 163));
            IF_SETHIDE(true, comp(105, 212));
            IF_SETHIDE(true, comp(105, 213));
        } else {
            IF_SETENABLED(false, comp(105, 212));
            IF_SETENABLED(false, comp(105, 213));
            IF_SETHIDE(false, comp(105, 161));
            IF_SETHIDE(false, comp(105, 163));
            IF_SETHIDE(true, comp(105, 212));
            IF_SETHIDE(false, comp(105, 213));
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
            IF_SETHIDE(true, comp(105, 142));
        } else {
            script15021();
        };
        IF_SETHIDE(false, comp(105, 130));
        IF_SETHIDE(false, comp(105, 9));
        IF_SETENABLED(false, comp(105, 212));
        IF_SETENABLED(false, comp(105, 213));
        IF_SETHIDE(false, comp(105, 212));
        IF_SETHIDE(true, comp(105, 213));
        IF_SETHIDE(false, comp(105, 161));
        IF_SETHIDE(false, comp(105, 163));
        if ((varplayer_139 == 0)) {
            IF_SETHIDE(false, comp(105, 10));
        };
        if (((varclient_83 > 0) || (varclient_82 > 0))) {
            script15038(varclient_84, varclient_85, 0);
        } else {
            script15038(varplayer_136, varplayer_137, 0);
        };
    };
    return;
}