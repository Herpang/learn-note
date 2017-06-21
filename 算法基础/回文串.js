var test = 'weeeeeeeew';
function isMemo (string){
	if(typeof string !== 'string'){
		return false;
	}
	var is = false;
	var newstr = string.split('').reverse().join('');
	if(newstr === string){
		is = true;
	}
	return is;
}
isMemo(test);