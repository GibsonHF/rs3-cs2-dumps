//
function script18478(int0: number): void {
    var int1 = 0;
    var int2 = IF_GETWIDTH(int0);
    var int3 = 50;
    var string0 = "";
    stack(int0);
    stack(int1);
    int1 = (int1 + 1);
    script10047();
    string0 = "RuneCoins";
    stack(int0);
    stack(4);
    stack(int1);
    int1 = (int1 + 1);
    CC_CREATE();
    if ((varclient_4659 > -1)) {
        CC_SETTEXT(inttostring(varclient_4659, 10));
    };
    CC_SETONVARCTRANSMIT(callback(script10050, -2147483645, -2147483643, 3, 4659, 1));
    CC_SETPOSITION(int3, 0, 0, 2);
    CC_SETSIZE(((int2 / 2) - int3), 32, 0, 0);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETTEXTFONT(28 as fontmetrics);
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXTSHADOW(true);
    stack(int0);
    stack(5);
    stack(int1);
    int1 = (int1 + 1);
    CC_CREATE[1]();
    CC_SETGRAPHIC[1](23852 as graphic);
    CC_SETSIZE[1](40, 35, 0, 0);
    CC_SETPOSITION[1](((CC_GETX() - 20) - (CC_GETWIDTH[1]() / 2)), -1, 0, 2);
    CC_SETONMOUSEREPEAT[1](callback(script8799, string0, -2147483645, -2147483643));
    return;
}