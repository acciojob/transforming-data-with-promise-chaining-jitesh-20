document.getElementById("btn").addEventListener('click',()=>{
	const num=document.getElementById("ip").value;
	const outputDiv=document.getElementById("output");
	if(isNaN(num)){
		outputDiv.textContent="Please enter a valid number";
		return;
	}
	new Promise((resolve)=>{
		setTimeout(()=>{
			outputDiv.textContent=`Result: ${num}`;
			resolve(num);
		},2000)
	}).then((data1)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				data1*=2;
				outputDiv.textContent=`Result: ${data1}`;
				resolve(data1);
			},2000)
		})
	}).then((data2)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				data2-=3;
				outputDiv.textContent=`Result: ${data2}`;
				resolve(data2);
			},1000)
		})
	}).then((data3)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				data3/=2;
				outputDiv.textContent=`Result: ${data3}`;
				resolve(data3);
			},1000)
		})
	}).then((data4)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				data4+=10;
				outputDiv.textContent=`Final Result: ${data4}`;
				resolve(data4);
			},1000)
		})
	})
})






