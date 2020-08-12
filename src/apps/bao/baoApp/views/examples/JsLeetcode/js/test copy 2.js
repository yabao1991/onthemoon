class Solution {
  public int minIncrementForUnique(int[] arr) {
      Arrays.sort(arr);
      int count = 0;
      for(int i=1;i<arr.length;i++){
          if(arr[i] <= arr[i-1]){
              int diff = (arr[i-1]+1) - arr[i];
              arr[i]=arr[i-1]+1;
              count+=diff;  
          }
      }
      return count;
  }
}

https://stackoverflow.com/questions/38384537/minimum-unique-array-sum

https://stackoverflow.com/questions/38384537/minimum-unique-array-sum

https://stackoverflow.com/questions/38384537/minimum-unique-array-sum