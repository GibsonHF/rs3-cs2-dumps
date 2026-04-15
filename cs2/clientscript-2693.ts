//[proc,graphics_options_resolutions]
function script2693(int0: int): string {
    var int1 = 0;
    var int2 = 0;
    [int1, int2] = FULLSCREEN_GETMODE(int0);
    return `${inttostring(int1, 10)}x${inttostring(int2, 10)}`;
}