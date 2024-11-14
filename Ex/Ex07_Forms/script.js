
function calculateBMI() {
	const weight = document.getElementById('weight').value;
	const height = document.getElementById('height').value;

	if (weight > 0 && height > 0) {
		// BMI 계산
		// BMI = weight / height_in_meters^2
		height_in_meters = height/100;
		const bmi = weight / (height_in_meters * height_in_meters);
		// 18.5 미만: 저체중 (Underweight)
		// 18.5~24.9미만: 정상 (Normal)
		// 24.9~30.0미만: 과체중 (Overweight)
		// 30.0~: 비만 (Obesty)
		let classification = '';
		if (bmi < 18.5) {
			classification = 'UNDERWEIGHT';
		}
		else if ( bmi < 24.9 ){
			classification = 'Normal';
		}
		else if ( bmi < 30.0 ) {
			classification = 'OVERWEIGHT';
		}
		else {
			classification = "OBESITY";
		}

		document.getElementById('result').innerHTML = `Your BMI is ${bmi} - ${classification}`;

	}
	else {
		document.getElementById('result').innerHTML = '데이터를 똑바로 넣으세요!';
	}

}
