import { sys, sys2, host } from "./lib";
import $ from "jquery";
import { sk, explore, watch, setState, hint} from "./skills";
import { checkStage } from "./lobby";

export default () => {
    sys("走出房間後，你在走廊上看到某個東西正逐漸像你靠近...，走近一看...是隻狒狒!");
    sys("When you leave the room, you found something is walking to you..., it's a baboon!");
    sys("Type 'sk()' to see skills.");
    var gate = {
        name: "gate",
        password: "guess"
    };
    var baboon = {
        name: "baboon",
        role: 'npc',
        nickName: "rainbow king",
        id: "f4bfbc5985a06c95008cdf39f9ba6592ce9f9686",
        receive: ''
    };
    var banana = {
        name: "banana",
        desc: "baboon like it! baboon eat it! baboon love you!"
    };

    var item = [gate, baboon, banana];

    var checkResult = () => {

        if (gate.password == '331361') {
            sys("你通過了關卡並繼續往前行走。")
            sys("You pass the gate, and keep walking.");
            // clear all objects in this stage
            item.forEach((element) => { element = null; });
            // go next stage
			localStorage.nowStage = 3;
			checkStage();
        }
        else if (baboon.receive == 'banana') {
            sys("看來不是這個密碼...")
            sys("不過狒狒愛你! 因為狒狒跟你是好朋友! 嗚吱!");
            sys("狒狒遞給你一張紙條：https://crackstation.net/");
            sys("Wrong password!");
            sys("baboon love you! you are now baboon's brother bu ~ bu!");
            sys("baboon show you a note: https://crackstation.net/");
            baboon.receive = "1/2 eaten banana";
            document.getElementById('image-egg-baboon').style.display = '';
        }
    };

    var ex = (itemName) => { explore (item, itemName); }
    var wa = (itemName) => { watch (item, itemName); }
    var se = (itemName, key, value) => { setState (item, itemName, key, value); checkResult (); }
    var ht = () => { hint(); }
    var gv = (itemName, value) => { setState (item, itemName, "receive", value);  checkResult();}

    window.e = ex;
    window.w = wa;
    window.s = se;
    window.sk = () => sk(2);
    window.h = ht;
    window.g = gv;
};