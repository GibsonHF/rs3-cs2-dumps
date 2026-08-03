//
function script4752(): void {
    var int0 = 300;
    var int1 = 0;
    var string0 = "Switch to a Jagex Account for improved security, account alerts, and easier access to multiple characters.";
    var int2 = script5347(48758875, int1++, 0, 0, 1, 0, 0, 1, 2196, "Upgrade to a Jagex Account");
    script20484(2196, -1, 1, 0);
    var int3 = (int2 + 10);
    int2 = script5347(48758875, int1++, 0, int3, 0, 0, 0, 1, 2100, string0);
    script20484(2100, -1, 1, 0);
    int3 = ((int3 + int2) + 10);
    script7852(48758875, int1++, 0, int3, 0, 0, 0, 36, 1, 0, 17062, "Download Launcher");
    CC_SETONBUTTONCLICK(callback(script15228, 31));
    int3 = (int3 + 36);
    IF_SETTEXT("Login", 48758876);
    IF_SETSIZE(300, int3, 0, 0, 48758875);
    return;
}