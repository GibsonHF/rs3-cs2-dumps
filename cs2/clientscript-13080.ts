//
function script13080(int0: number): void {
    if ((int0 == 1)) {
        IF_SETHIDE(false, comp(1829, 28));  // peng_bttf_mastermind:check_button_disabled_layer
        IF_SETHIDE(false, comp(1829, 36));  // peng_bttf_mastermind:reset_button_disabled_layer
    };
    CC_DELETEALL(comp(1829, 19));  // peng_bttf_mastermind:answer
    CC_CREATE(comp(1829, 19), 5, IF_GETNEXTSUBID(comp(1829, 19)));  // peng_bttf_mastermind:answer
    CC_SETSIZE(35, 35, 0, 0);
    CC_SETOBJECT(script13081(varbitplayer_35049), -1);
    CC_SETPOSITION(10, 0, 0, 1);
    CC_CREATE(comp(1829, 19), 5, IF_GETNEXTSUBID(comp(1829, 19)));  // peng_bttf_mastermind:answer
    CC_SETSIZE(35, 35, 0, 0);
    CC_SETOBJECT(script13081(varbitplayer_35050), -1);
    CC_SETPOSITION(35, 0, 0, 1);
    CC_CREATE(comp(1829, 19), 5, IF_GETNEXTSUBID(comp(1829, 19)));  // peng_bttf_mastermind:answer
    CC_SETSIZE(35, 35, 0, 0);
    CC_SETOBJECT(script13081(varbitplayer_35051), -1);
    CC_SETPOSITION(60, 0, 0, 1);
    CC_CREATE(comp(1829, 19), 5, IF_GETNEXTSUBID(comp(1829, 19)));  // peng_bttf_mastermind:answer
    CC_SETSIZE(35, 35, 0, 0);
    CC_SETOBJECT(script13081(varbitplayer_35052), -1);
    CC_SETPOSITION(85, 0, 0, 1);
    return;
}