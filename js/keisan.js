function keisan(){

	// 商品1
	var price1 = document.form1.goods1.selectedIndex * 500; // 単価を設定
	document.form1.field1.value = price1; // 小計を表示

	// 商品2
	var price2 = document.form1.goods2.selectedIndex * 400; // 単価を設定
	document.form1.field2.value = price2; // 小計を表示

	// 商品3
	var price3 = document.form1.goods3.selectedIndex * 500; // 単価を設定
	document.form1.field3.value = price3; // 小計を表示

	// 商品4
	var price4 = document.form1.goods4.selectedIndex * 500; // 単価を設定
	document.form1.field4.value = price4; // 小計を表示

	// 商品5
	var price5 = document.form1.goods5.selectedIndex * 700; // 単価を設定
	document.form1.field5.value = price5; // 小計を表示

	// 商品6
	var price6 = document.form1.goods6.selectedIndex * 800; // 単価を設定
	document.form1.field6.value = price6; // 小計を表示

	// 商品7
	var price7 = document.form1.goods7.selectedIndex * 800; // 単価を設定
	document.form1.field7.value = price7; // 小計を表示

	// 商品8
	var price8 = document.form1.goods8.selectedIndex * 300; // 単価を設定
	document.form1.field8.value = price8; // 小計を表示

	// 商品9
	var price9 = document.form1.goods9.selectedIndex * 500; // 単価を設定
	document.form1.field9.value = price9; // 小計を表示

	// 商品10
	var price10 = document.form1.goods10.selectedIndex * 600; // 単価を設定
	document.form1.field10.value = price10; // 小計を表示

	// 商品11
	var price11 = document.form1.goods11.selectedIndex * 500; // 単価を設定
	document.form1.field11.value = price11; // 小計を表示

	// 商品12
	var price12 = document.form1.goods12.selectedIndex * 500; // 単価を設定
	document.form1.field12.value = price12; // 小計を表示

	// 商品13
	var price13 = document.form1.goods13.selectedIndex * 500; // 単価を設定
	document.form1.field13.value = price13; // 小計を表示

	// 商品14
	var price14 = document.form1.goods14.selectedIndex * 500; // 単価を設定
	document.form1.field14.value = price14; // 小計を表示

	// 商品15
	var price15 = document.form1.goods15.selectedIndex * 600; // 単価を設定
	document.form1.field15.value = price15; // 小計を表示

	// 商品16
	var price16 = document.form1.goods16.selectedIndex * 500; // 単価を設定
	document.form1.field16.value = price16; // 小計を表示

	// 商品17
	var price17 = document.form1.goods17.selectedIndex * 500; // 単価を設定
	document.form1.field17.value = price17; // 小計を表示

	// 商品18
	var price18 = document.form1.goods18.selectedIndex * 450; // 単価を設定
	document.form1.field18.value = price18; // 小計を表示

	// 商品19
	var price19 = document.form1.goods19.selectedIndex * 500; // 単価を設定
	document.form1.field19.value = price19; // 小計を表示

	// 商品20
	var price20 = document.form1.goods20.selectedIndex * 500; // 単価を設定
	document.form1.field20.value = price20; // 小計を表示

	// 商品21
	var price21 = document.form1.goods21.selectedIndex * 500; // 単価を設定
	document.form1.field21.value = price21; // 小計を表示

	// 商品22
	var price22 = document.form1.goods22.selectedIndex * 700; // 単価を設定
	document.form1.field22.value = price22; // 小計を表示


	// 合計を計算
	var total = price1 + price2 + price3 + price4 + price5 + price6 +price7 + price8 + price9 +price10 + price11 + price12 + 
				price13 + price14 + price15 + price16 + price17 + price18 + price19 + price20 + price21 + price22 ;
	document.form1.field_total.value = total; // 合計を表示

}

function kakunin(){
	if(document.form1.field_total.value<=0){
		alert("合計金額は ０円 です。ご注文お願いします。");
		return false;
	}else{
		if(window.confirm("注文金額は　"+document.form1.field_total.value+"円　です。よろしいですか？")){ 
			return true; 
		}else{ 
			return false;
		}
	}
}

function logout(){
	if(window.confirm('ログオフします。よろしいですか？')){ // 確認ダイアログを表示
		location.href = "Home.html";
	}
	else{ // 「キャンセル」時の処理
		return false; // 送信を中止

	}

}