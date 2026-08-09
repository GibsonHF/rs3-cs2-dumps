//
function script4752(): void {
    var int0 = 300;
    var int1 = 0;
    var string0 = "Switch to a Jagex Account for improved security, account alerts, and easier access to multiple characters.";
    stack(48758875);
    stack(int1);
    int1 = (int1 + 1);
    var int2 = script5347(0, 0, 1, 0, 0, 1, 2196, "Upgrade to a Jagex Account");
    script20484(2196, -1, 1, 0);
    var int3 = (int2 + 10);
    stack(48758875);
    stack(int1);
    int1 = (int1 + 1);
    int2 = script5347(0, int3, 0, 0, 0, 1, 2100, string0);
    script20484(2100, -1, 1, 0);
    int3 = ((int3 + int2) + 10);
    stack(48758875);
    stack(int1);
    int1 = (int1 + 1);
    script7852(0, int3, 0, 0, 0, 36, 1, 0, 17062, "Download Launcher");
    CC_SETONBUTTONCLICK(callback(script15228, 31));
    int3 = (int3 + 36);
    IF_SETTEXT("Login", comp(744, 92));
    IF_SETSIZE(300, int3, 0, 0, comp(744, 91));
    return;
}