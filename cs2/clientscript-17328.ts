//
function script17328(int0: obj, int1: int, string0: string): void {
    var string1 = "Complete the target progress bar to receive:<br>";
    if (((IF_FIND(comp(1152, 20)) == 1) && (script6431() == false))) {
        if ((item_getparam(int0, 4414) != -1 as struct)) {
            script14994(54777 as obj, -1 as inv, -1, int0, 819 as inv, 1);
        } else {
            string1 = strconcat(string1, `<col=89CFF0>${string0}</col>`);
            script3537(string1);
        };
    };
    return;
}