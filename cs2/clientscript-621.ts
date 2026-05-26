//
function script621(): void {
    var string0 = "";
    script622();
    if (((varplayer_138 == -1) || ((STOCKMARKET_ISOFFEREMPTY(varplayer_138, 0) == 1) && (varplayer_139 == -1)))) {
        IF_SETHIDE(0, 6881286);
        script628();
        IF_SETONINVTRANSMIT(callback(), 6881627);
        varclient_83 = 0;
        varclient_82 = 0;
        return;
    };
    if ((STOCKMARKET_ISOFFEREMPTY(varplayer_138, 0) == 0)) {
        IF_SETHIDE(0, 6881479);
        IF_SETHIDE(0, 6881627);
        script594(STOCKMARKET_GETOFFERTYPE(varplayer_138, 0), STOCKMARKET_GETOFFERITEM(varplayer_138, 0), STOCKMARKET_GETOFFERCOUNT(varplayer_138, 0), STOCKMARKET_GETOFFERPRICE(varplayer_138, 0));
        script593(varplayer_138);
        if (((STOCKMARKET_ISOFFERFINISHED(varplayer_138, 0) == 1) || (varplayer_9456 == 1))) {
            IF_SETHIDE(1, 6881500);
        } else {
            IF_SETHIDE(0, 6881500);
        };
        script15021();
    } else {
        if ((varplayer_135 == -1 as obj)) {
            varclient_6789 = 0;
            varclient_6790 = 0;
            IF_SETHIDE(1, 6881497);
        } else {
            script15021();
        };
        IF_SETHIDE(0, 6881479);
        IF_SETHIDE(0, 6881602);
        script13971(6881604, 6881605, 28553, "Confirm Offer", 1);
        IF_SETHIDE(0, 6881519);
        IF_SETHIDE(0, 6881560);
        switch (varplayer_9456) {
            case 0: {
                IF_SETHIDE(1, 6881500);
                break;
            }
            case 1: {
                IF_SETHIDE(1, 6881500);
                break;
            }
        };
        if ((varplayer_139 == 0)) {
            if ((varplayer_9456 == 0)) {
                IF_SETHIDE(0, 6881606);
            };
            string0 = "Maximum total cost of purchase";
        } else {
            string0 = "Minimum total value of sale";
        };
        if (((varclient_83 > 0) || (varclient_82 > 0))) {
            script15038(varclient_84, varclient_85, 0);
        } else {
            script15038(varplayer_136, varplayer_137, 0);
        };
    };
    return;
}