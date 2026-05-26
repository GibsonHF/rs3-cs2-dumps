//
function script4707(): void {
    IF_SETTEXT(varclient_2743, 64553047);
    IF_SETTEXT(inttostring(varclient_2732, 10), 64552965);
    IF_SETTEXT(inttostring(varclient_2733, 10), 64552967);
    IF_SETTEXT(inttostring(varclient_2734, 10), 64552977);
    IF_SETTEXT(inttostring(varclient_2735, 10), 64552978);
    IF_SETTEXT(varclient_2744, 64552979);
    IF_SETTEXT(varclient_2745, 64552980);
    IF_SETTEXT(inttostring(varclient_2736, 10), 64552991);
    IF_SETTEXT(inttostring(varclient_2737, 10), 64552993);
    IF_SETTEXT(inttostring(varclient_2738, 10), 64552995);
    var int0 = STRINGWIDTH(IF_GETTEXT(64552995), IF_GETFONTMETRICS(64552995));
    IF_SETSIZE(int0, IF_GETHEIGHT(64552995), 0, 0, 64552995);
    var int1 = ((IF_GETX(64552995) + IF_GETWIDTH(64552995)) + 5);
    IF_SETPOSITION(int1, IF_GETHEIGHT(64552995), 0, 0, 64552996);
    var int2 = (IF_GETX(64552996) + IF_GETWIDTH(64552996));
    IF_SETPOSITION(int2, IF_GETHEIGHT(64552996), 0, 0, 64552997);
    IF_SETTEXT(inttostring(varclient_2739, 10), 64552997);
    int0 = STRINGWIDTH(IF_GETTEXT(64552997), IF_GETFONTMETRICS(64552997));
    IF_SETSIZE(int0, IF_GETHEIGHT(64552996), 0, 0, 64552997);
    int1 = ((IF_GETX(64552997) + IF_GETWIDTH(64552997)) + 5);
    IF_SETPOSITION(int1, IF_GETHEIGHT(64552997), 0, 0, 64552998);
    IF_SETTEXT(inttostring(varclient_2740, 10), 64552999);
    IF_SETTEXT(inttostring(varclient_2741, 10), 64553000);
    IF_SETTEXT(inttostring(varclient_2742, 10), 64553001);
    return;
}