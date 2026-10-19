//
function script4752(): void {
    var int0 = 300;
    var int1 = 0;
    var string0 = "You'll soon need the Jagex Launcher and a Jagex Account to play. To avoid losing access, download the Launcher and follow the prompts to migrate. Your character and progress will carry over safely.";
    stack(48759156);
    stack(int1);
    int1 = (int1 + 1);
    var int2 = script5347(0, 0, 1, 0, 0, 1, 2196, "The move is almost here!");
    script20484(2196, -1, 1, 0);
    var int3 = (int2 + 10);
    stack(48759156);
    stack(int1);
    int1 = (int1 + 1);
    int2 = script5347(0, int3, 0, 0, 0, 1, 2100, string0);
    script20484(2100, -1, 1, 0);
    int3 = ((int3 + int2) + 10);
    stack(48759156);
    stack(int1);
    int1 = (int1 + 1);
    script7852(0, int3, 0, 0, 0, 36, 1, 0, 17062, "Learn more");
    CC_SETONBUTTONCLICK(callback(script15228, 32));
    int3 = ((int3 + 36) + 10);
    stack(48759156);
    stack(int1);
    int1 = (int1 + 1);
    script7852(0, int3, 0, 0, 0, 36, 1, 0, 17062, "Download Launcher");
    CC_SETONBUTTONCLICK(callback(script15228, 31));
    int3 = (int3 + 36);
    IF_SETTEXT("Login", comp(744, 373));
    IF_SETSIZE(300, int3, 0, 0, comp(744, 372));  // loginscreen:launcher_warning_later
    return;
}