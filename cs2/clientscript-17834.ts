//
function script17834(int0: number, int1: number): void {
    IF_SETHIDE(false, comp(755, 87));  // area_task_sub:popup_window
    IF_SETTEXT(script3509(int1), comp(755, 95));  // area_task_sub:more_information_name
    IF_SETOBJECT_NONUM(int1, 1, comp(755, 98));  // area_task_sub:more_information_icon_graphic
    var string0 = `${script15321(int0)}<br><br>Reward:<br>${script19862(int0)}`;
    IF_SETTEXT(string0, comp(755, 101));  // area_task_sub:more_information_summary
    var int2 = (16 * PARAHEIGHT(string0, IF_GETWIDTH(comp(755, 101)), 207 as fontmetrics));  // area_task_sub:more_information_summary
    IF_SETSCROLLSIZE(0, int2, comp(755, 100));  // area_task_sub:more_information_summary_layer
    IF_SETSCROLLPOS(0, 0, comp(755, 100));  // area_task_sub:more_information_summary_layer
    script7791(49479782, 49479780);
    return;
}