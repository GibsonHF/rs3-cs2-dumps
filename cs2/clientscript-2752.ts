//[proc,meslayer_setupdynamicbutton]
function script2752(): void {
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETCOLOUR(255);
    CC_SETTEXTSHADOW(false);
    CC_SETSIZE(0, (IF_GETHEIGHT(CC_GETLAYER()) - (IF_GETY(comp(1469, 4)) + IF_GETHEIGHT(comp(1469, 4)))), 1, 0);
    CC_SETPOSITION(0, 0, 1, 2);
    CC_SETONMOUSEOVER(callback(script1356, -2147483645, -2147483643, 16777215));
    CC_SETONMOUSELEAVE(callback(script1356, -2147483645, -2147483643, 255));
    return;
}