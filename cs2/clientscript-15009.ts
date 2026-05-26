//
function script15009(): void {
    if ((IF_FIND(127533057) == 1)) {
        if (((varbitplayer_21685 != 1) || (varbitplayer_27168 == 1))) {
            CC_SETGRAPHIC(10091);
            script14990(0, "Revolution (inactive)<br><br>When active the abilities on this bar will be used automatically in combat.");
        } else {
            CC_SETGRAPHIC(10092);
            script14990(0, "Revolution (active)<br><br>When active the abilities on this bar will be used automatically in combat.");
        };
    };
    return;
}