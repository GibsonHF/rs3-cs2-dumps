//
function script1219(): void {
    var int0 = SHOP_REQUESTDATASTATUS();
    if ((int0 <= 0)) {
        return;
    };
    IF_SETONTIMER(callback(), comp(840, 2));
    if ((int0 == 2)) {
        IF_SETHIDE(false, comp(840, 28));
        return;
    };
    IF_SETHIDE(false, comp(840, 21));
    var string0 = script3148(script17963(2), "1 Month + Trial");
    IF_SETTEXT(`Then ${string0}/month recurring billing. Cancel at any time.`, comp(840, 19));
    IF_SETHIDE(false, comp(840, 19));
    IF_SETTEXT(`Subscribe for ${string0}/month`, comp(840, 26));
    var string1 = `By selecting 'Try 7 days free', you authorise us to charge ${string0} per month, plus taxes, after the introductory offer has ended. Your subscription will renew automatically after the end of the introductory offer (any unused portion of the free trial will be forfeited if you purchase a subscription before the end of the introductory offer). Cancel renewal any time by pressing on the 'How to cancel' button.`;
    IF_SETTEXT(string1, comp(840, 81));
    return;
}