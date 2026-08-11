//
function script18890(): void {
    var int0 = 0;
    var int1 = 0;
    [int0, int1] = script10900(DATE_MINUTES());
    IF_SETTEXT(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", script10495(2)))}>${script10901(int0, int1, 1)}${inttostring(PUSH_CONSTANT_INT[16](" <col=", script10495(3)))}>(UTC)`, comp(1284, 37));  // calendar_main:time_text
    return;
}