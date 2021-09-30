//splice
//배열에서 기존 요소를 삭제 또는 교체 추가하여 배열의 내용을 변경

let mnoths = ['Jan', 'March', 'April', 'June']
mnoths.splice(1, 0, 'Feb')   //mnoths.splice(blank, blank2, blank3)
                             //blank는 배열에 몇번째에 수나 문자를 넣을지 결정  
                             //blank2는 만얀 '1'을 입력할 경우 blank에서 정한 번쨰의 수나 문자를 삭제하고 blank3을 넣은다 
                             //만약 '0'을 넣을 경우에 blank에서 정한 번호에 수를 넣는다
                             //blank3는 내가 넣을 수나 문자를 지정한다
console.log(mnoths) 