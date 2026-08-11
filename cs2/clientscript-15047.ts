//
function script15047(): void {
    if ((STRING_LENGTH(varclient_6788) == 0)) {
        if ((script20898(0) == 1)) {
            return;
        };
        IF_SETHIDE(false, comp(105, 224));  // stockmarket:offeritem_marketpriceicon ?
        script11704();
    } else {
        if ((IF_FIND(comp(105, 225)) == 1)) {  // stockmarket:offertype_icon ?
            varclient_6788 = CC_GETTEXT();
        };
        script20892();
        script15054();
    };
    return;
}