//
function script18076(): void {
    script18077();
    var int0 = 0;
    if ((IF_FIND(comp(1226, 32)) == 1)) {
        script10485(1, int0, 60, 45, 0, 0, 0, 30, 1, 0, 7982 as dbrow, "No Mission Selected");
        int0 = (int0 + 1);
    };
    if ((IF_FIND(comp(1226, 30)) == 1)) {
        script17952(1, int0, 10, 120, 0, 0, (IF_GETWIDTH(comp(1226, 30)) - 20), 0, 8003 as dbrow, "Selected a mission for more information.", (IF_GETWIDTH(comp(1226, 30)) - 30), 209 as fontmetrics);
        int0 = (int0 + 1);
    };
    return;
}