'use strict';

let imageList =
    [
        "image1.png", "image2.png", "image3.png", "image4.png", "image5.png", "image6.png", "image7.png", "image8.png",
        "image9.png", "image10.png", "image11.png", "image12.png", "image13.png", "image14.png", "image15.png", "image16.png",
        "image17.png", "image18.png", "image19.png", "image20.png", "image21.png", "image22.png", "image23.png", "image24.png",
        "image25.png", "image26.png", "image27.png", "image28.png", "image29.png", "image30.png", "image31.png",
        "image32.png", "image33.png", "image34.png", "image35.png", "image36.png", "image37.png", "image38.png",
        "image39.png", "image40.png", "image41.png", "image42.png", "image43.png", "image44.png", "image45.png",
        "image46.png", "image47.png", "image48.png", "image49.png", "image50.png", "image51.png", "image52.png",
        "image53.png", "image54.png", "image55.png", "image56.png", "image57.png", "image58.png", "image59.png",
        "image60.png", "image61.png", "image62.png", "image63.png", "image64.png", "image65.png", "image66.png",
        "image67.png", "image68.png", "image69.png", "image70.png", "image71.png", "image72.png", "image73.png",
        "image74.png", "image75.png", "image76.png", "image77.png", "image78.png", "image79.png", "image80.png",
        "image81.png", "image82.png", "image83.png", "image84.png", "image85.png"
    ];

let textList = [
    "tree", "pig", "mouse", "cheese", "lime", "starfruit", "orange", "octopus", "fish", "chick", "himawari",
    "cat", "frog", "christmastree", "tonakai", "present", "mountain", "daruma", "maple", "blueberry", "cake",
    "kakigoori", "dolphin", "desk", "chair", "penguin", "computer", "ball", "bat", "keyboard", "cola",
    "icecream", "rainbow", "television", "girl", "boy", "printer", "coffee", "eraser", "pencil", "glasses",
    "gloves", "hat", "sweater", "shoes", "clock", "tea", "bag", "book", "ruler", "baseball", "football",
    "towel", "coat", "pants", "tissue", "refrigerator", "microwave", "slot", "pachinko", "wallet",
    "microphone", "tiger", "phone", "controller", "apple", "grape", "strawberry", "dog", "car", "train",
    "airplane", "gun", "tennis", "badminton", "bowling", "darts", "river", "sea", "flower", "bird", "dragon",
    "ramen", "curry", "turtle",

    "pig",
]

let symbolTextList = [
    "!", "?", "$", "@", "*"
]



//初期設定
//$(function(){
// target = "#textfield2";
//  });

//文字入力
//function put_string(chr){
//    $(target).shizukey('put_string', {chr: chr});
//  };

//入力先のフォーム変更
//let switch_target = (obj)=>{
//    target = "#" + obj.attr("id");
//  };

//htmlの書き変え
let OnButtonClick = () => {

    let intRandom = random(test_array, 85);
    //alert('test');
    //let hogehoge = buttonHtml[3];
    //alert('');
    $('#image1').attr({
        'src': imageList[intRandom[0]],
        'title': textList[intRandom[0]]
    });
    //クリックイベントを消す
    $('#image1').off('click');
    //再設定
    $('#image1').on('click', () => {
        //文字入力（追記）
        let addText = textList[intRandom[0]];
        // テキ'ストボックスのデータを取得
        let getData = String($(".hoge").val());
        // 取得データと追記文言を合わせて出力
        $(".hoge").val(getData + addText);
    });

    $('#image2').attr({
        'src': imageList[intRandom[1]],
        'title': textList[intRandom[1]]
    });
    $('#image2').off('click');
    $('#image2').on('click', () => {
        let addText = textList[intRandom[1]];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image3').attr({
        'src': imageList[intRandom[2]],
        'title': textList[intRandom[2]]
    });
    $('#image3').off('click');
    $('#image3').on('click', () => {
        let addText = textList[intRandom[2]];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image4').attr({
        'src': imageList[intRandom[3]],
        'title': textList[intRandom[3]]
    });
    $('#image4').off('click');
    $('#image4').on('click', () => {
        let addText = textList[intRandom[3]];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image5').attr({
        'src': imageList[intRandom[4]],
        'title': textList[intRandom[4]]
    });
    $('#image5').off('click');
    $('#image5').on('click', () => {
        let addText = textList[intRandom[4]];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image6').attr({
        'src': imageList[intRandom[5]],
        'title': textList[intRandom[5]]
    });
    $('#image6').off('click');
    $('#image6').on('click', () => {
        let addText = textList[intRandom[5]];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image7').attr({
        'src': imageList[intRandom[6]],
        'title': textList[intRandom[6]]
    });
    $('#image7').off('click');
    $('#image7').on('click', () => {
        let addText = textList[intRandom[6]];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image8').attr({
        'src': imageList[intRandom[7]],
        'title': textList[intRandom[7]]
    });
    $('#image8').off('click');
    $('#image8').on('click', () => {
        let addText = textList[intRandom[7]];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image9').attr({
        'src': imageList[intRandom[8]],
        'title': textList[intRandom[8]]
    });
    $('#image9').off('click');
    $('#image9').on('click', () => {
        let addText = textList[intRandom[8]];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image10').attr({
        'src': imageList[intRandom[9]],
        'title': textList[intRandom[9]]
    });
    $('#image10').off('click');
    $('#image10').on('click', () => {
        let addText = textList[intRandom[9]];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image11').attr({
        'src': imageList[intRandom[10]],
        'title': textList[intRandom[10]]
    });
    $('#image11').off('click');
    $('#image11').on('click', () => {
        let addText = textList[intRandom[10]];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image12').attr({
        'src': imageList[intRandom[11]],
        'title': textList[intRandom[11]]
    });
    $('#image12').off('click');
    $('#image12').on('click', () => {
        let addText = textList[intRandom[11]];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image13').attr({
        'src': imageList[intRandom[12]],
        'title': textList[intRandom[12]]
    });
    $('#image13').off('click');
    $('#image13').on('click', () => {
        let addText = textList[intRandom[12]];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image14').attr({
        'src': imageList[intRandom[13]],
        'title': textList[intRandom[13]]
    });
    $('#image14').off('click');
    $('#image14').on('click', () => {
        let addText = textList[intRandom[13]];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image15').attr({
        'src': imageList[intRandom[14]],
        'title': textList[intRandom[14]]
    });
    $('#image15').off('click');
    $('#image15').on('click', () => {
        let addText = textList[intRandom[14]];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image16').attr({
        'src': imageList[intRandom[15]],
        'title': textList[intRandom[15]]
    });
    $('#image16').off('click');
    $('#image16').on('click', () => {
        let addText = textList[intRandom[15]];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image17').attr({
        'src': imageList[intRandom[16]],
        'title': textList[intRandom[16]]
    });
    $('#image17').off('click');
    $('#image17').on('click', () => {
        let addText = textList[intRandom[16]];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image18').attr({
        'src': imageList[intRandom[17]],
        'title': textList[intRandom[17]]
    });
    $('#image18').off('click');
    $('#image18').on('click', () => {
        let addText = textList[intRandom[17]];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image19').attr({
        'src': imageList[intRandom[18]],
        'title': textList[intRandom[18]]
    });
    $('#image19').off('click');
    $('#image19').on('click', () => {
        let addText = textList[intRandom[18]];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image20').attr({
        'src': imageList[intRandom[19]],
        'title': textList[intRandom[19]]
    });
    $('#image20').off('click');
    $('#image20').on('click', () => {
        let addText = textList[intRandom[19]];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image21').attr({
        'src': imageList[intRandom[20]],
        'title': textList[intRandom[20]]
    });
    $('#image21').off('click');
    $('#image21').on('click', () => {
        let addText = textList[intRandom[20]];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image22').attr({
        'src': imageList[intRandom[21]],
        'title': textList[intRandom[21]]
    });
    $('#image22').off('click');
    $('#image22').on('click', () => {
        let addText = textList[intRandom[21]];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image23').attr({
        'src': imageList[intRandom[22]],
        'title': textList[intRandom[22]]
    });
    $('#image23').off('click');
    $('#image23').on('click', () => {
        let addText = textList[intRandom[22]];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image24').attr({
        'src': imageList[intRandom[23]],
        'title': textList[intRandom[23]]
    });
    $('#image24').off('click');
    $('#image24').on('click', () => {
        let addText = textList[intRandom[23]];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image25').attr({
        'src': imageList[intRandom[24]],
        'title': textList[intRandom[24]]
    });
    $('#image25').off('click');
    $('#image25').on('click', () => {
        let addText = textList[intRandom[24]];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

}




let snapshot = () => {
    alert(value);
}

let test = () => {
    alert(intRandom);
}



//jQuery記述
//初期設定
$(() => {
    //target = "#textfield2";
    $('#image1').on('click', () => {
        //文字入力（追記）
        let addText = textList[0];
        // テキ'ストボックスのデータを取得
        let getData = String($(".hoge").val());
        // 取得データと追記文言を合わせて出力
        $(".hoge").val(getData + addText);
    });

    $('#image2').on('click', () => {
        let addText = textList[1];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image3').on('click', () => {
        let addText = textList[2];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image4').on('click', () => {
        let addText = textList[3];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image5').on('click', () => {
        let addText = textList[4];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image6').on('click', () => {
        let addText = textList[5];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image7').on('click', () => {
        let addText = textList[6];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image8').on('click', () => {
        let addText = textList[7];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image9').on('click', () => {
        let addText = textList[8];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image10').on('click', () => {
        let addText = textList[9];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image11').on('click', () => {
        let addText = textList[10];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image12').on('click', () => {
        let addText = textList[11];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image13').on('click', () => {
        let addText = textList[12];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image14').on('click', () => {
        let addText = textList[13];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image15').on('click', () => {
        let addText = textList[14];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image16').on('click', () => {
        let addText = textList[15];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image17').on('click', () => {
        let addText = textList[16];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image18').on('click', () => {
        let addText = textList[17];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image19').on('click', () => {
        let addText = textList[18];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image20').on('click', () => {
        let addText = textList[19];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image21').on('click', () => {
        let addText = textList[20];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image22').on('click', () => {
        let addText = textList[21];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image23').on('click', () => {
        let addText = textList[22];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image24').on('click', () => {
        let addText = textList[23];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image25').on('click', () => {
        let addText = textList[24];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    //ここから記号
    $('#image01').on('click', () => {
        let addText = symbolTextList[0];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image02').on('click', () => {
        let addText = symbolTextList[1];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image03').on('click', () => {
        let addText = symbolTextList[2];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image04').on('click', () => {
        let addText = symbolTextList[3];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

    $('#image05').on('click', () => {
        let addText = symbolTextList[4];
        let getData = String($(".hoge").val());
        $(".hoge").val(getData + addText);
    });

});
