//
function script5733(): void {
    script5736(comp(1864, 8), comp(1864, 12), comp(1864, 48), 122159114);
    script5736(comp(1864, 7), comp(1864, 40), comp(1864, 45), 122159141);
    script5736(comp(1864, 6), comp(1864, 24), comp(1864, 18), 122159124);
    IF_SETONVARTRANSMIT(callback(script5737, 122159153, 122159159, varbitplayer_35819, 6944, 1), 122159152);
    IF_SETONVARTRANSMIT(callback(script5737, 122159150, 122159167, varbitplayer_35818, 6944, 1), 122159149);
    IF_SETONVARTRANSMIT(callback(script5737, 122159130, 122159175, varbitplayer_35817, 6944, 1), 122159122);
    var int0 = 0;
    CC_CREATE(122159109, 4, 0);
    CC_SETTEXT("Time Remaining:");
    CC_SETCOLOUR(script10495(0));
    CC_SETTEXTFONT(58);
    CC_SETSIZE(PARAWIDTH(CC_GETTEXT(), 1000, CC_GETFONTMETRICS()), 32, 0, 0);
    CC_SETPOSITION(40, 0, 0, 1);
    CC_SETTEXTALIGN(0, 1, 0);
    int0 = (32 + CC_GETWIDTH());
    CC_CREATE[1](122159109, 4, 1);
    CC_SETTEXT[1]("X days  XX Hours  XX Minutes");
    CC_SETTEXTFONT[1](58);
    CC_SETCOLOUR[1](script10495(0));
    CC_SETSIZE[1](PARAWIDTH(CC_GETTEXT[1](), 1000, CC_GETFONTMETRICS[1]()), 32, 0, 0);
    CC_SETPOSITION[1](((CC_GETX() + CC_GETWIDTH()) + 8), 0, 0, 1);
    CC_SETTEXTALIGN[1](0, 1, 0);
    int0 = ((int0 + 32) + CC_GETWIDTH[1]());
    IF_SETSIZE(int0, 32, 0, 0, 122159109);
    return;
}