// 실습
// name과 message를 넣어서 랜더링하디
// name : 이름, message : 환영합니다.

export default function Jsx03(){
	const name = "주현제";
	const message = "환영합니다";
	return(
		<div>
			저의 이름은 {name}입니다 <br />
      <p style={{color : "red"}}>{name}님 {message}</p>
		</div>
	)
}