
// You should implement your task here.

module.exports = function towelSort (matrix) {

  var arr = [];
  for ( var i = 0; i < matrix.length; i++)
    {
      
      if ( i%2==0){
        var c =0;
        while( c < matrix[i].length)
        {
          arr.push(matrix[i][c]);
          c++;
        }
      }
      else
      {
        var c =matrix.length-1;
        while( c >=0)
        {
          arr.push(matrix[i][c]);
          c--;
        }
      }
    }

  return arr;
}
