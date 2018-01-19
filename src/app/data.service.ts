import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  AlphaNumbers: number[] = [];
  BetaNumbers: number[] = [];

    constructor() { }
    
    retrieveAlphaNumbers(): number[]{
      return this.AlphaNumbers;
    }

    retrieveBetaNumbers(): number[]{
      return this.BetaNumbers;
    }

    addAlpha(num: number){
      this.AlphaNumbers.push(num);
    }

    addBeta(num: number){
      this.BetaNumbers.push(num);
    }

    sumAlpha(){
      let sum = 0;
      for(let num of this.AlphaNumbers){
        sum += num;
      }
      return sum;
    }

    sumBeta(){
      let sum = 0;
      for(let num of this.BetaNumbers){
        sum += num;
      }
      return sum;
    }

    sum(){
      return this.sumAlpha() - this.sumBeta();
    }
}
