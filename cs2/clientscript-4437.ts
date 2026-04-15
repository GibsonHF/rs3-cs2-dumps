//[proc,clan_chat_clearlist]
function script4437(int0: component): void {
    var int1 = script411(int0);
    var int2 = struct_getparam(int1, 7304);
    var int3 = struct_getparam(int1, 7305);
    var int4 = struct_getparam(int1, 7291);
    var int5 = struct_getparam(int1, 7306);
    var int6 = struct_getparam(int1, 7307);
    var int7 = struct_getparam(int1, 7308);
    var int8 = struct_getparam(int1, 7309);
    IF_SETHIDE(true, int4);
    IF_CLEAROPS(int4);
    IF_SETSCROLLPOS(0, 0, int2);
    IF_SETHIDE(false, int3);
    script31(int3, int2, 5666 as graphic, 5663 as graphic, 5664 as graphic, 5665 as graphic, 5686 as graphic, 5685 as graphic);
    stack(6256);
    stack(int5);
    IF_SETGRAPHIC();
    IF_SETHIDE(1, int6);
    var int9 = 19;
    if ((script6431() == 1)) {
        int9 = 27;
    };
    IF_SETSIZE(1, int9, 0, 0, int7);
    varclient_1518 = -1;
    varclient_2353 = "";
    IF_SETTEXT("", int8);
    return;
}