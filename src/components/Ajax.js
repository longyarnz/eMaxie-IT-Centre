export default function Ajax(url, method, data, async, responseHandler){
	const ajax = new XMLHttpRequest();
	ajax.open(method, url, async);
	method === 'POST' && ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.send(data);
	ajax.onreadystatechange = ()=>{
		if(ajax.readyState === 4 && ajax.status === 200) responseHandler(ajax.responseText);
	}
}