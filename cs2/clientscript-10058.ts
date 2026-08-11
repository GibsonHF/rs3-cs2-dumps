//
function script10058(): void {
    IF_SETTEXT(CHAT_PLAYERNAME(), comp(906, 118));  // lobbyscreen:name_text
    if (((IF_FIND(comp(906, 117) /*lobbyscreen:title_text*/) == 1) && (IF_FIND[1](comp(906, 118) /*lobbyscreen:name_text*/) == 1))) {
        CC_SETSIZE(PARAWIDTH(CC_GETTEXT(), IF_GETWIDTH(CC_GETLAYER()), CC_GETFONTMETRICS()), CC_GETHEIGHT(), 0, 0);
        CC_SETSIZE[1]((CC_GETWIDTH() + 12), CC_GETHEIGHT[1](), 1, 0);
        if ((PARAHEIGHT(CC_GETTEXT[1](), CC_GETWIDTH[1](), CC_GETFONTMETRICS[1]()) > 1)) {
            CC_SETHIDE[1](true);
        } else {
            CC_SETHIDE[1](false);
        };
    };
    var int0 = script13749();
    IF_SETHIDE(int0, comp(906, 116));  // lobbyscreen:title_layer
    IF_SETHIDE(int0, comp(906, 120));  // lobbyscreen:buttons_layer
    IF_SETHIDE(int0, comp(906, 139));  // lobbyscreen:clock
    IF_SETHIDE(script12585(int0), comp(906, 140));  // lobbyscreen:mobile_billing_info
    if ((int0 == false)) {
        script2601();
        script2649();
        script2670();
        script2676();
        IF_SETONVARTRANSMIT(callback(script2691, 4053, 1), comp(906, 127));  // lobbyscreen:authenticator_button_layer
        script2695();
        IF_SETPOSITION(((IF_GETX(comp(906, 120) /*lobbyscreen:buttons_layer*/) - 5) - IF_GETWIDTH(comp(906, 139) /*lobbyscreen:clock*/)), IF_GETY(comp(906, 139) /*lobbyscreen:clock*/), 0, 0, comp(906, 139) /*lobbyscreen:clock*/);
    } else {
        IF_SETPOSITION(20, IF_GETY(comp(906, 139)), 2, 0, comp(906, 139));  // lobbyscreen:clock
    };
    script16903();
    script3001();
    return;
}