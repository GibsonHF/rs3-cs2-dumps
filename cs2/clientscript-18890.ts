//
function script18890(): void {
    var int0 = 0;
    var int1 = 0;
    [int0, int1] = script10900(DATE_MINUTES());
    stack(PUSH_CONSTANT_INT[16]("<col=", script10495(2)));
    stack(inttostring());
    stack(">");
    stack(script10901(int0, int1, 1));
    stack(PUSH_CONSTANT_INT[16](" <col=", script10495(3)));
    IF_SETTEXT(`${stack()}${inttostring()}>(UTC)`, comp(1284, 37));
    return;
}