function check() {
	
	if (!document.getElementById("post1").value.match(/^[0-9]*$/)) {
		window.alert('ユーザIDに数字以外が入力されています');
		return false;
		
	} else if (!document.getElementById("post2").value.match(/^[0-9a-zA-Z]*$/)) {
		window.alert('パスコードに英数字で入力してください！');
		return false;

	/*} else if (document.getElementById("post2").value.match(/^[0-9]+$/||/^[a-zA-Z!-/:-@¥[-`{-~]/).length<8) {
		window.alert('英数字8文字以上で入力してください！');
		return false;*/

	} else if (document.getElementById("post2").value.length<8){
		window.alert('パスコードを8文字以上で入力してください！');
		return false;
	
	} else {
		return true;
	}
}
