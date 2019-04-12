#include <stdio.h>

int main(){
   int T = 0;
   printf("please input T&s:\n");
   scanf("%d", &T);
   char s[T][100];
   for(int i = 0; i < T; i++){
       scanf("%s", &*s[i]);
   }
    for(int j = 0; j < T; j++){
        judge(s[j], j);
   }
   return 0; 
}

void judge(char data[100], int k){
    int sign = 0;
    for(int j = 0; j < 100; j++){
        if(data[j] == data[j+1]){
            sign = 1;
            for(int i = j; i < 100; i++){
                data[i] = data[i+2];
            }
            break;
        }
    }
    if(sign == 0 && k % 2 == 0){
        printf("Oh,no\n");
    }
    if(sign == 0 && k % 2 == 1){
        printf("Yes,you can win!\n");
    }
}
