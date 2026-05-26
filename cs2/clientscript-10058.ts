//
function script10058(): void {
    IF_SETTEXT(CHAT_PLAYERNAME(), 59375734);
    if (((IF_FIND(59375733) == 1) && (IF_FIND[1](59375734) == 1))) {
        CC_SETSIZE(PARAWIDTH(CC_GETTEXT(), IF_GETWIDTH(CC_GETLAYER()), CC_GETFONTMETRICS()), CC_GETHEIGHT(), 0, 0);
        CC_SETSIZE[1]((CC_GETWIDTH() + 12), CC_GETHEIGHT[1](), 1, 0);
        if ((PARAHEIGHT(CC_GETTEXT[1](), CC_GETWIDTH[1](), CC_GETFONTMETRICS[1]()) > 1)) {
            CC_SETHIDE[1](1);
        } else {
            CC_SETHIDE[1](0);
        };
    };
    var int0 = script13749();
    IF_SETHIDE(int0, 59375732);
    IF_SETHIDE(int0, 59375736);
    IF_SETHIDE(int0, 59375755);
    IF_SETHIDE(script12585(int0), 59375756);
    if ((int0 == 0)) {
        script2601();
        script2649();
        script2670();
        script2676();
        IF_SETONVARTRANSMIT(callback(script2691, 4053, 1), 59375743);
        script2695();
        IF_SETPOSITION(((IF_GETX(59375736) - 5) - IF_GETWIDTH(59375755)), IF_GETY(59375755), 0, 0, 59375755);
    } else {
        IF_SETPOSITION(20, IF_GETY(59375755), 2, 0, 59375755);
    };
    script16903();
    script3001();
    return;
}