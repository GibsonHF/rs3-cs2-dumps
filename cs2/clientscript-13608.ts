//
function script13608(): void {
    script13602();
    IF_SETHIDE(1, 124256261);
    CC_DELETEALL(124256260);
    CC_CREATE(124256260, 4, 0);
    CC_SETPOSITION(0, 25, 0, 0);
    CC_SETSIZE(0, 25, 1, 1);
    CC_SETTEXT("The person you were inspecting can no longer be found");
    CC_SETTEXTSHADOW(1);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETTEXTFONT(55);
    CC_SETCOLOUR(script10495(0));
    return;
}