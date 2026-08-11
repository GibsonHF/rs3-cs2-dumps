//
function script2505(): void {
    CC_DELETEALL(comp(905, 67));  // pop_hud:people_scrollbar
    IF_SETSCROLLSIZE(0, 0, comp(905, 14));  // pop_hud:people_content
    IF_SETSCROLLPOS(0, 0, comp(905, 14));  // pop_hud:people_content
    var int0 = IF_GETY(comp(905, 13));  // pop_hud:people_layer
    var int1 = IF_GETHEIGHT(comp(905, 13));  // pop_hud:people_layer
    var int2 = IF_GETHEIGHT(comp(905, 100));  // pop_hud:container
    IF_SETSIZE(IF_GETWIDTH(comp(905, 14)), 0, 0, 1, comp(905, 14));  // pop_hud:people_content
    if (((int0 + int1) > int2)) {
        IF_SETSIZE(IF_GETWIDTH(comp(905, 14)), (int2 - int0), 0, 0, comp(905, 14));  // pop_hud:people_content
        IF_SETSIZE(16, (int2 - int0), 0, 0, comp(905, 67));  // pop_hud:people_scrollbar
        IF_SETSCROLLSIZE(0, int1, comp(905, 14));  // pop_hud:people_content
        script7791(59310147, 59310094);
    };
    IF_SETHIDE(false, comp(905, 13));  // pop_hud:people_layer
    IF_SETGRAPHIC(15558 as graphic, comp(905, 28));  // pop_hud:people_drop_left
    IF_SETGRAPHIC(15559 as graphic, comp(905, 29));  // pop_hud:people_drop_mid
    IF_SETGRAPHIC(15560 as graphic, comp(905, 30));  // pop_hud:people_drop_right
    return;
}