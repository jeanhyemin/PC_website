$(function(){

    $.ajax({
        url: './js/investCost.json',
        dataType: 'json',
        success: function(data){
            var useData = data.cost;  //모든 객체배열 정보 == useData
            
            function dataPrint(arr){ //빵 사진, 이름 넣기
                
                var txt = '<table>';
                    var txt = '<thead>';
                        var txt = '<tr>';
                        for(var i in arr){
                            var $PY = arr[i].PY;
                            txt+='<th scope="col">'+ $PY +'PY</th>';
                        }
                        var txt = '</tr>';
                    var txt = '</thead>';

                    var txt = '<tbody>';

                    var txt = '<tr>';
                    var txt = '<th>거래보증금</th>';
                    for(var i in arr){
                        var $Deposit = arr[i].Deposit;
                        txt+='<td>'+$Deposit+'</td>';
                    }
                    var txt = '</tr>';

                    var txt = '<tr>';
                    var txt = '<th>개점비</th>';
                    for(var i in arr){
                        var $Open = arr[i].Open;
                        txt+='<td>'+$Open+'</td>';
                    }
                    var txt = '</tr>';

                    var txt = '<tr>';
                    var txt = '<th>교육비</th>';
                    for(var i in arr){
                        var $Edu = arr[i].Edu;
                        txt+='<td>'+$Edu+'</td>';
                    }
                    var txt = '</tr>';

                    var txt = '<tr>';
                    var txt = '<th>설계비</th>';
                    for(var i in arr){
                        var $Design = arr[i].Design;
                        txt+='<td>'+$Design+'</td>';
                    }
                    var txt = '</tr>';

                    var txt = '<tr>';
                    var txt = '<th>인테리어</th>';
                    for(var i in arr){
                        var $Interior = arr[i].Interior;
                        txt+='<td>'+$Interior+'</td>';
                    }
                    var txt = '</tr>';

                    var txt = '<tr>';
                    var txt = '<th>간판비</th>';
                    for(var i in arr){
                        var $Signboard = arr[i].Signboard;
                        txt+='<td>'+$Signboard+'</td>';
                    }
                    var txt = '</tr>';

                    var txt = '<tr>';
                    var txt = '<th>가구비</th>';
                    for(var i in arr){
                        var $Furniture = arr[i].Furniture;
                        txt+='<td>'+$Furniture+'</td>';
                    }
                    var txt = '</tr>';
                    
                    var txt = '<tr>';
                    var txt = '<th>설비비(DID포함)</th>';
                    for(var i in arr){
                        var $Facility = arr[i].Facility;
                        txt+='<td>'+$Facility+'</td>';
                    }
                    var txt = '</tr>';

                    var txt = '<tr>';
                    var txt = '<th>전기증설/냉난방기</th>';
                    for(var i in arr){
                        var $ElecHeat = arr[i].ElecHeat;
                        txt+='<td>'+$ElecHeat+'</td>';
                    }
                    var txt = '</tr>';

                    var txt = '</tbody>';
                txt += '</table>';
 
                $('.table_box').html(txt);
               
            };
            
 
            //초기실행, 함수호출
            dataPrint(useData);
        } 
    });   
});