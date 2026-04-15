//
function script3408(int0: component, string0: string): void {
    var string1 = `<u=88FFFF>${string0}</u>`;
    var string2 = `<u=64C8FA>${string0}</u>`;
    IF_SETOP(1, "Open link", int0);
    IF_SETOPCURSOR(1, 146 as cursor, int0);
    IF_SETONMOUSEOVER(callback(script2381, int0, 8978431, string1), int0);
    IF_SETONMOUSELEAVE(callback(script2381, int0, 6605050, string2), int0);
    return;
}