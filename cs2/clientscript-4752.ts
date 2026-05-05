//
function script4752(): void {
    var int0 = 300;
    var int1 = 0;
    var string0 = "Switch to a Jagex Account for improved security, account alerts, and easier access to multiple characters.";
    var int2 = script5347(comp(744, 371), int1++, 0, 0, 1, 0, 0, 1, 2196 as dbrow, "Upgrade to a Jagex Account");
    script20484(2196 as dbrow, -1, 1, 0);
    var int3 = (int2 + 10);
    int2 = script5347(comp(744, 371), int1++, 0, int3, 0, 0, 0, 1, 2100 as dbrow, string0);
    script20484(2100 as dbrow, -1, 1, 0);
    int3 = ((int3 + int2) + 10);
    script7852(comp(744, 371), int1++, 0, int3, 0, 0, 0, 36, 1, 0, 17062 as dbrow, "Download Launcher");
    CC_SETONBUTTONCLICK(callback(script15228, 31));
    int3 = (int3 + 36);
    IF_SETTEXT("Login", 48759156);
    IF_SETSIZE(300, int3, 0, 0, 48759155);
    return;
}