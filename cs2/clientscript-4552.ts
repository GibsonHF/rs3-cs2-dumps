//[proc,friend_init]
function script4552(int0: component): void {
    var int1 = script3099(int0);
    IF_SETTEXT(`Friends List<br>RuneScape ${inttostring(MAP_WORLD(), 10)}`, script10587(int0));
    IF_SETONFRIENDTRANSMIT(callback(script124, int0), int1);
    stack(124);
    stack(int0);
    stack("i");
    stack(int1);
    IF_SETONPLAYERGROUPTRANSMIT();
    if ((WORLDLIST_FETCH() == 0)) {
        IF_SETONTIMER(callback(script6260, int0), int1);
    };
    varclient_5113 = "";
    CC_DELETEALL(script3099(int0));
    CC_DELETEALL(script10588(int0));
    CC_DELETEALL(script10589(int0));
    CC_DELETEALL(script11297(int0));
    CC_DELETEALL(script3098(int0));
    return;
}