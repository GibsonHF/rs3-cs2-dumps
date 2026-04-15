//
function script11164(int0: component): void {
    var int1 = 0;
    var int2 = IF_GETWIDTH(int0);
    var int3 = 50;
    var string0 = "";
    script10047(int0, int1++);
    string0 = "Keys";
    CC_CREATE(int0, 4, int1++);
    if ((varclient_4266 > -1)) {
        CC_SETTEXT(inttostring(varclient_4266, 10));
    };
    CC_SETONVARCTRANSMIT(callback(script10050, -2147483645, -2147483643, 0, 4266, 1));
    CC_SETPOSITION(int3, 0, 0, 2);
    CC_SETSIZE(((int2 / 2) - int3), 32, 0, 0);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETTEXTFONT(28);
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXTSHADOW(1);
    CC_CREATE[1](int0, 5, int1++);
    CC_SETGRAPHIC[1](23854);
    CC_SETSIZE[1](40, 35, 0, 0);
    CC_SETPOSITION[1](((CC_GETX() - 20) - (CC_GETWIDTH[1]() / 2)), -1, 0, 2);
    CC_SETONMOUSEREPEAT[1](callback(script8799, string0, -2147483645, -2147483643));
    return;
}