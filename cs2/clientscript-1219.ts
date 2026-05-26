//
function script1219(): void {
    var int0 = SHOP_REQUESTDATASTATUS();
    if ((int0 <= 0)) {
        return;
    };
    IF_SETONTIMER(callback(), 55050242);
    if ((int0 == 2)) {
        IF_SETHIDE(0, 55050268);
        return;
    };
    IF_SETHIDE(0, 55050261);
    var string0 = script3148(script17963(2), "1 Month + Trial");
    IF_SETTEXT(`Then ${string0}/month recurring billing. Cancel at any time.`, 55050259);
    IF_SETHIDE(0, 55050259);
    IF_SETTEXT(`Subscribe for ${string0}/month`, 55050266);
    var string1 = `By selecting 'Try 7 days free', you authorise us to charge ${string0} per month, plus taxes, after the introductory offer has ended. Your subscription will renew automatically after the end of the introductory offer (any unused portion of the free trial will be forfeited if you purchase a subscription before the end of the introductory offer). Cancel renewal any time by pressing on the 'How to cancel' button.`;
    IF_SETTEXT(string1, 55050321);
    return;
}