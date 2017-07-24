import React from "react";
import ReactDOM from "react-dom";
var InNumber=React.createClass({
	getInitialState: function() {
	    return {value: '', txt:'',arr:[],index:''};
	},
	isNumber:function(){
		var obj=parseFloat(this.state.value) ;
		if(Math.floor(obj)===obj && this.state.value.length==String(obj).length){
			var arr=this.state.arr;
			arr.push(obj);
			this.setState({arr:arr,txt:arr.join(', ')});  	
		}else{
			alert('输入有误');
		}
	},
	setValue:function(event){
		this.setState({value: event.target.value});
	},
	getIndex:function(){
		var arr=this.state.arr;
		if(arr.length<3){alert('数组过短，不可小于3');return;}
		var arr2=[arr[0]];
		var left=arr[0],right=0;
		for(var i=1,l=arr.length;i<l;i++){
			right+=arr[i];
		}
		for(var i=1,l=arr.length;i<l;i++){
			if(left==right-arr[i]){
				//return i;
				this.setState({index: i});
				break;
			}else{
				left+=arr[i];
				right-=arr[i];
				this.setState({index: -1});
			}
		}
	},
	render:function(){
		var value=this.state.value;
		var txt=this.state.txt;
		var index=this.state.index;
		return <div>
					<input placeholder="please in number" value={value} onChange={this.setValue}/><button onClick={this.isNumber}>确定</button>
					<br/><span>你选择的数组是:</span>
					<div>{txt}</div>
					<br/><button onClick={this.getIndex}>获取平衡位</button>
					<br/>平衡位是:{index}
				</div>;
	}
});
ReactDOM.render(
  <InNumber/>,
  document.querySelector('#app')
);